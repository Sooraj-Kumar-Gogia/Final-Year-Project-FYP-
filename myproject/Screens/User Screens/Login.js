import * as React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import { useNavigation } from '@react-navigation/native';



const Login = () => {
  navigation = useNavigation();
  return(
    <View>

    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/HI.png')} style={{width: 150, height: 200, alignSelf: 'center', paddingTop: 70}}/>
    <Text style={styles.Heading}>Welcome Back</Text>

    <TextInput placeholder='Enter your Email' 
    style = {styles.TextBox}>
    </TextInput>

    <TextInput placeholder='Password'
    style={styles.TextBox}
    secureTextEntry={true}></TextInput>

    <Button style={styles.button} mode="contained" onPress={navigation.navigate('HomeUser')}  >Log in </Button>

    </View>
  )

}


export default Login;