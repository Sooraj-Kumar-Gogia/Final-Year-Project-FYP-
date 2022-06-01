// import react from "react";
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native'; //, TextInput, StyleSheet, ScrollView, Image
import { Button } from 'react-native-paper';
import styles from '../style/ExternalStyle';
// import { Picker } from '@react-native-picker/picker';
// import { Button } from "react-native-paper";
// // import { Item } from 'react-native-paper/lib/typescript/components/List/List';
// import { useState } from 'react/cjs/react.production.min';

const Signup1 = () => {
    // const [pickerValue, setPickerValue] = useState("Select City")
    return (


        <View>
            <ScrollView>

                <Image source={require('C:/Users/ICT/Desktop/React/myproject/src/illustrations/HI.png')} style={{ width: 150, height: 200, alignSelf: 'center', paddingTop: 70 }} />
                <Text style={styles.Heading}> Perfect! A bit more info </Text>
                <TextInput placeholder="Email" style={styles.TextBox}></TextInput>
                <TextInput placeholder='Password' secureTextEntry={true} style={styles.TextBox}></TextInput>
                <TextInput placeholder='Re-enter Password' secureTextEntry={true} style={styles.TextBox}></TextInput>

            </ScrollView>

            <View style={{ backgroundColor: 'white' }}>
                <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>Next</Button>
            </View>
        </View>
    )

}




export default Signup1;
