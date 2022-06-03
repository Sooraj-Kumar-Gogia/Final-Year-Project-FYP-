import * as React from 'react';
import { View, Text, Image,  } from 'react-native';
import { Button } from 'react-native-paper';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/ExternalStyle';
import HomeUser from './HomeUser';

const CallHomeScreen =()=>{
    navigation.navigate('Home')
  }
  

const Thankyou =()=>{
    navigation = useNavigation();
    return(
<View>
    <Image source={require("C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/cute-funny-running-hamburger_464314-1362.webp")}  style={{width: 300, height: 350, alignSelf: 'center'}}/>
    <Text style = {{fontFamily: 'Poppins', fontSize: 26, alignSelf: 'center', fontWeight: 'bold', color: 'black'}}>Thank You!</Text>
    <Text style = {{fontFamily: 'Poppins', fontSize: 20, alignSelf: 'center', color: 'grey'}}>Your order is on way to you!!</Text>
    <Button style = {styles.button} onPress={CallHomeScreen}>Okay</Button>
</View>

    )
}

export default Thankyou;