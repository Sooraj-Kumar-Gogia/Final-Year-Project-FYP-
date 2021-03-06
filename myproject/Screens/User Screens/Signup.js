// import react from "react";
import * as React from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import Signup1 from './Signup1';
import {useNavigation } from '@react-navigation/native';


const CallSignup1Screen =()=>{
    navigation.navigate('Signup1')
  }


const Signup = () => {
    navigation = useNavigation();

    // const [pickerValue, setPickerValue] = useState("Select City")
    return (


        <View>
            <ScrollView>
                <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/HI.png')} style={{ width: 150, height: 200, alignSelf: 'center', paddingTop: 70 }} />
                <Text style={styles.Heading}> Hey! Let's have some chat! </Text>
                <TextInput placeholder="Name" style={styles.TextBox}></TextInput>

            </ScrollView>

            <View style={{ backgroundColor: 'white' }}>
            <Button style={styles.button} mode="contained" onPress={CallSignup1Screen}>Next </Button>
                
            </View>
        </View>
     )

 }




export default Signup;
