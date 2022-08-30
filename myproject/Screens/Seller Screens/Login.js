import * as React from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Navigation from '../../components/Navigation';
import {SellerTab} from '../../components/Navigation';
import SellerSignup from './Signup_Seller';


const CallDashboardScreen = () => {
  navigation.navigate('Dashboard')
}

const CallSignUpScreen = () => { navigation.navigate('SellerSignup') }
const CallnavScreen = () => { navigation.navigate('Navigation') }

const SellerLogin = () => {
  navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const role = "seller"

  const sendCrd = () => {
    fetch("http://10.0.2.2:3000/sellerlogin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        "email": email,
        "password": password,
        "role": role
        
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        try {
          if(data.token != null){
            // CallSignUpScreen();
            CallDashboardScreen();
          }
        } catch (error) {
            alert("Invalid Credentials")
            console.log(error)
        }
      })

  }

  return (
    <View>
      <ScrollView>
        <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/HI.png')} style={{ width: 150, height: 200, alignSelf: 'center', paddingTop: 70 }} />
        <Text style={styles.Heading}>Hello Seller</Text>

        <TextInput placeholder='Enter your Email' value={email} onChangeText={(text) => setEmail(text)} style={styles.TextBox}></TextInput>

        <TextInput placeholder='Password'
          style={styles.TextBox}
          secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}></TextInput>

        <Button style={styles.button} mode="contained" onPress={sendCrd}  >Log in </Button>

        <View style={{ flexDirection: 'column' }}>
          <Text style={{ alignSelf: 'center', fontFamily: 'Poppins', fontWeight: 'bold', }}> {'\n\n'}Don't have Account?</Text>
          <Text style={{ fontFamily: 'Poppins', fontWeight: 'bold', color: 'darkblue', alignSelf: 'center', }} onPress={CallSignUpScreen}>Sign Up Now</Text>
        </View>
      </ScrollView>
    </View>

  )

}


export default SellerLogin;