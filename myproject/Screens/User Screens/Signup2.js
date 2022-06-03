import * as React from 'react';
import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import { Button } from "react-native-paper";
import styles from '../../style/ExternalStyle';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { useState } from 'react/cjs/react.production.min';

const CallHomeScreen = () => {
  navigation.navigate('Home')
}

const Signup2 = () => {
  navigation = useNavigation();
  return (

    <View style={styles.Container}>
      {/* const [pickerValue, setPickerValue] = useState("Select City") */}
      <ScrollView>
        <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/assets/icon.jpg')} style={{ width: 100, height: 100, alignSelf: 'center', paddingTop: 70, }} />
        {/* <Picker selectedValue={''} style={style.TextBox} selectedValue={pickerValue} onValueChange = {(ItemValue) => setPickerValue(ItemValue)}>
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
        </Picker>  */}

        <Text style={styles.Heading}>Almost there...</Text>
        <TextInput placeholder="Phone" style={styles.TextBox}></TextInput>
        <TextInput placeholder="Address" style={styles.TextBox}></TextInput>
        {/*Use google Map to compare locatoin dynamically to select the exact location*/}
        <TextInput placeholder="Postal Code" style={styles.TextBox}></TextInput>
      </ScrollView>


      <View style={{ backgroundColor: 'white' }}>
        <Button style={styles.button} mode="contained" onPress={CallHomeScreen}>Create Account</Button>
      </View>
    </View>
  )
}

export default Signup2;
