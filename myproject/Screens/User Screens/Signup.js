// import react from "react";
import * as React from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import styles from "../style/ExternalStyle";

const Signup = () => {
    // const [pickerValue, setPickerValue] = useState("Select City")
    return (


        <View>
            <ScrollView>
                <Image source={require('C:/Users/ICT/Desktop/React/myproject/src/illustrations/HI.png')} style={{ width: 150, height: 200, alignSelf: 'center', paddingTop: 70 }} />
                <Text style={styles.Heading}> Hey! Let's have some chat! </Text>
                <TextInput placeholder="Name" style={styles.TextBox}></TextInput>

            </ScrollView>

            <View style={{ backgroundColor: 'white' }}>
                <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>Next</Button>
            </View>
        </View>
     )

 }




export default Signup;
