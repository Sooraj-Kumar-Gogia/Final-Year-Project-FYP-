import * as React from 'react';
import { View, ScrollView, Text, TextInput, Image } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import { useNavigation } from '@react-navigation/native';
import Signup from './Signup';
import Navigation from '../../components/Navigation';

const CallHomeScreen = () => {
  navigation.navigate('Home')
}

const CallSignUpScreen = () => { navigation.navigate('Signup') }
const CallnavScreen = () => { navigation.navigate('Navigation') }


const Login = () => {
  navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/HI.png')} style={{ width: 150, height: 200, alignSelf: 'center', paddingTop: 70 }} />
        <Text style={styles.Heading}>Welcome Back</Text>

        <TextInput placeholder='Enter your Email' style={styles.TextBox}></TextInput>

        <TextInput placeholder='Password'
          style={styles.TextBox}
          secureTextEntry={true}></TextInput>
        <Button style={styles.button} mode="contained" onPress={CallHomeScreen}  >Log in </Button>

        <View style={{ flexDirection: 'column' }}>
          <Text style={{ alignSelf: 'center', fontFamily: 'Poppins', fontWeight: 'bold', }}> {'\n\n'}Don't have Account?</Text>
          <Text style={{ fontFamily: 'Poppins', fontWeight: 'bold', color: 'darkblue', alignSelf: 'center', }} onPress={CallHomeScreen}>Sign Up Now</Text>
        </View>
      </ScrollView>
    </View>

  )

}


export default Login;