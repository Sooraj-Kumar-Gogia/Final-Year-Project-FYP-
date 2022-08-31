import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import styles from "../../style/ExternalStyle";
import { useNavigation } from '@react-navigation/native';
import SellerSignup2 from './SignupSeller2';
import { text } from 'body-parser';



const SellerSignup = () => {
    navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const role = "seller";



    const CallSellerSignup2 = () => { 
        console.log(email, password, phone, name, role)
        navigation.navigate('SellerSignup2',  {Email: email, Password: password, Phone: phone, Name: name, Role: role})
    
    }

    return (
        <View>
            <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/HI.png')} style={{ width: 150, height: 200, alignSelf: 'center', paddingTop: 70 }} />
            <Text style={styles.Heading}>Seller Registration Form </Text>
            <TextInput placeholder='Full Name' style={styles.TextBox} value={name} onChangeText={(text)=>setName(text)}/>
            <TextInput placeholder='Email' style={styles.TextBox} value={email} onChangeText={(text) => setEmail(text)} />
            <TextInput placeholder='Phone' style={styles.TextBox} value={phone} onChangeText={(text) => setPhone(text)} />
            <TextInput placeholder='Password' secureTextEntry={true} style={styles.TextBox} value={password} onChangeText={(text) => setPassword(text)} />
            <Button style={styles.button} mode="contained" onPress={CallSellerSignup2}>Next</Button>
        </View>

    )

}


export default SellerSignup;