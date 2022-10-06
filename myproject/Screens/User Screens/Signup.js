import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/ExternalStyle';
import Signup1 from './Signup1';
import { text } from 'body-parser';




export default Signup = () => {

    navigation = useNavigation();
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const role = "user";

    const CallSignup1Screen = () => {

        if (!name.trim()) { Alert.alert("Plaese Enter name") }
        if (!phone.match('^[0-9]{11}$') && phone>0) { Alert.alert("Please Enter a valid phone") }
        else {
            navigation.navigate('Signup1', { Role: role, Name: name, Phone: phone }); console.log(name, phone, role)
        }
    }

    return (
        <View>
            <ScrollView>
                <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/HI.png')} style={{ width: 150, height: 200, alignSelf: 'center', paddingTop: 70 }} />
                <Text style={styles.Heading}> Hey! Let's have some chat! </Text>
                <TextInput placeholder="Name" value={name} onChangeText={(text) => setname(text)} style={styles.TextBox}></TextInput>
                <TextInput placeholder="Phone" style={styles.TextBox} value={phone} onChangeText={(text) => setphone(text)}></TextInput>
            </ScrollView>

            <View style={{ backgroundColor: 'white' }}>
                <Button style={styles.button} mode="contained" onPress={CallSignup1Screen}>Next </Button>

            </View>
        </View>
    )

}




