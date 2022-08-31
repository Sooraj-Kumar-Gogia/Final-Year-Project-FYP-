import * as React from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
// import Signup from './Signup';
// import HomeUser from './HomeUser';
import { UserTab } from '../../components/Navigation';
import { SellerTab } from '../../components/Navigation';
import Signup from './Signup';
import Navigation from '../../components/Navigation';
import SellerSignup from '../Seller Screens/Signup_Seller';

const CallHomeScreen = (userId) => {
  console.log("I am CallHomeScreen",userId);
  navigation.navigate('Home', { userId: userId })
}
const CallSellerDashboard = (userId) => {
  console.log("I am CallSellerScreen",userId);
  navigation.navigate('Dashboard', { userId: userId })
}

const CallSignUpScreen = () => { navigation.navigate('Signup') }
const CallSellerSignup = () => { navigation.navigate('SellerSignup') }
const CallnavScreen = () => { navigation.navigate('Navigation') }

const Login = () => {
  navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  let role;
  let userId;

  const sendCrd = () => {
    fetch("http://10.0.2.2:3000/signin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        role = data.role;
        userId = data._id;
        // console.log(role, userId)
        if (role.toLowerCase() === "user") {
          CallHomeScreen(userId)
        }
        else if (role.toLowerCase() === "seller") {
          CallSellerDashboard(userId)
        }
        else {
          console.log("Invalid credentials")
          alert("Invalid Credentials")
        }
        setData(data)

      })

    // try {
    //   // console.log(data.userid)
    //   // console.log(data.user.role)
    //   if (data.user != null) {
    //     console.log(data)
    //     console.log(data.role)
    //     console.log(data.role)
    //     console.log(data.role)
    //     console.log(data.role)
    //     console.log(data.role)
    //     // if (data.role == "user") { CallHomeScreen }
    //     // if (data.role == "seller") { CallSellerDashboard }

    //   }
    //   // else if (data.token != null && data.user.role == "seller") {
    //   //   CallSellerDashboard();
    //   // }
    // } catch (error) {
    //   alert("Invalid Credentials")
    //   console.log(error)
    // }

  }

  return (
    <View>
      <ScrollView>
        <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/HI.png')} style={{ width: 150, height: 200, alignSelf: 'center', paddingTop: 70 }} />
        <Text style={styles.Heading}>Welcome Back</Text>

        <TextInput placeholder='Enter your Email' value={email} onChangeText={(text) => setEmail(text)} style={styles.TextBox}></TextInput>

        <TextInput placeholder='Password'
          style={styles.TextBox}
          secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}></TextInput>

        <Button style={styles.button} mode="contained" onPress={sendCrd}  >Log in </Button>

        <View style={{ flexDirection: 'column' }}>
          <Text style={{ alignSelf: 'center', fontFamily: 'Poppins', fontWeight: 'bold', }}> {'\n\n'}Don't have Account?</Text>
          <Text style={{ fontFamily: 'Poppins', fontWeight: 'bold', color: 'darkblue', alignSelf: 'center', }} onPress={CallSignUpScreen}>Sign up</Text>
          <Text style={{ alignSelf: 'center', fontFamily: 'Poppins', fontWeight: 'bold', }}> {'\n\n'}OR</Text>
          <Text style={{ fontFamily: 'Poppins', fontWeight: 'bold', color: 'darkblue', alignSelf: 'center', }} onPress={CallSellerSignup}>Become a Seller</Text>

        </View>
      </ScrollView>
    </View>

  )

}


export default Login;