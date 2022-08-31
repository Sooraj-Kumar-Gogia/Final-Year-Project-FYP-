import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import { Button, Card } from "react-native-paper";
// import DatePicker from 'react-native-date-picker';
import styles from "../../style/ExternalStyle";
import Login from '../User Screens/Login';
import { useNavigation } from '@react-navigation/native';
import { text } from 'body-parser';


const SellerSignup2 = ({route}) => {
    navigation = useNavigation();
    const CallLogin = () => { navigation.navigate('Login') }

    const email = route.params.Email;
    const password = route.params.Password;
    const phone = route.params.Phone;
    const name = route.params.Name;
    const role = route.params.Role;
    const [BusinessName, setBusinessName] = useState('');
    const [StoreDescription, setStoreDescription] = useState('');
    const [CNIC, setCNIC] = useState('');
    // const [CNICurl, setCNICurl] = useState('');
    const CNICurl = "www.cloudinary.com/image/upload/v1599098983/cnic_qxqxqx.jpg";


    const SubmitForm = () => {
        console.log(name, email, role, password)
        if (!email.trim()) { alert("Plaese Enter an Email") }
        if (!password.trim()) { alert("Please Enter a Password") }

        else { 
            fetch("http://10.0.2.2:3000/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    name,
                    password,
                    phone,
                    role,
                    BusinessName,
                    StoreDescription,
                    CNIC,
                    CNICurl
                })
            })

                .then(res => res.json())
                .then(data => {
                    alert("Account Created")
                    console.log(data)
                    CallLogin()

                }).catch(err => {
                    console.log(err)
                })
            }

        }


    return (

        <View style = {{flex: 2, flexWrap: "nowrap"}}>
            <Text style={styles.Heading}>Almost There...</Text>
            <TextInput placeholder='Business Name i.e. Sooraj Kitchen' style = {styles.TextBox} value={BusinessName} onChangeText={(text)=>setBusinessName(text)} />
            <TextInput placeholder='About Store i.e I am a chef with experience and I sell veg dishes...' multiline={true} style={styles.ProductDescription} value={StoreDescription} onChangeText={(text)=>setStoreDescription(text)} />
            <TextInput placeholder='CNIC' style = {styles.TextBox} value={CNIC} onChangeText={(text)=>setCNIC(text)}/>
            <Button style = {{height: 40, width: 150, marginBottom: 0, paddingLeft: 10}}>Upload CNIC</Button>
            <Button style={styles.button} mode="contained" onPress={SubmitForm}>Create Account</Button>
        </View>

    )

}


export default SellerSignup2;