// import react from "react";
import * as React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from "react-native-paper";
// import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { useState } from 'react/cjs/react.production.min';
import styles from '../style/ExternalStyle';

const Signup2 = () => {
  // const [pickerValue, setPickerValue] = useState("Select City")
  return (

    <View style={styles.Container}>
      <ScrollView>
        <Image source={require('./src/assets/icon.jpg')} style={{ width: 100, height: 100, alignSelf: 'center', paddingTop: 70 }} />
        <Text style={styles.Heading}>Almost there...</Text>

        <TextInput placeholder="Phone" style={styles.TextBox}></TextInput>
        {/* <Picker selectedValue={''} style={style.TextBox} selectedValue={pickerValue} onValueChange = {(ItemValue) => setPickerValue(ItemValue)}>  */}
        <Picker style={styles.TextBox}>
          <Picker.Item label='Karachi' value={'Karachi'} />
          <Picker.Item label='Islamabad' value={'Islamabad'} />
          <Picker.Item label='Rawalpindi' value={'Rawalpindi'} />
          <Picker.Item label='Lahore' value={'Lahore'} />
          <Picker.Item label='Kandhkot' value={'Kandhkot'} />
          <Picker.Item label='Sukkur' value={'Sukkur'} />
          <Picker.Item label='Khairpur' value={'Khairpur'} />
          <Picker.Item label='Dadu' value={'Dadu'} />
          <Picker.Item label='Ghotiki' value={'Ghotiki'} />
          <Picker.Item label='Hunza' value={'Hunza'} />
          <Picker.Item label='Hyderabad' value={'Hyderabad'} />
        </Picker>
        <TextInput placeholder="Address" style={styles.TextBox}></TextInput> {/*Use google Map to compare locatoin dynamically to select the exact location*/ }
        <TextInput placeholder="Postal Code" style={styles.TextBox}></TextInput>

      </ScrollView>

      <View style={{ backgroundColor: 'white' }}>
        <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>Create Account</Button>
      </View>
    </View>
  )

}


export default Signup2;

