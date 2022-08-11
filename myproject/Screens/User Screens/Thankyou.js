import * as React from 'react';
import { View, Text, Image,  } from 'react-native';
import { Button } from 'react-native-paper';
import { black, white } from 'react-native-paper/lib/typescript/styles/colors';
import { useNavigation } from '@react-navigation/native';
import styles from '../../style/ExternalStyle';
// import HomeUser from './HomeUser';

// const CallHomeScreen =()=>{
//     navigation.navigate('Home')
//   }
  

const Thankyou =()=>{
    navigation = useNavigation();
    return(
<View style = {{backgroundColor: 'white'}}>
    <Image source={require("C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/cute-funny-running-hamburger_464314-1362.webp")}  style={{width: 300, height: 350, alignSelf: 'center'}}/>
    <Text style = {{fontFamily: 'Poppins', fontSize: 26, alignSelf: 'center', fontWeight: 'bold', color: 'black'}}>Thank You!</Text>
    <Text style = {{fontFamily: 'Poppins', fontSize: 20, alignSelf: 'center', color: 'grey', alignContent: 'center', textAlign: 'center'}}>Once your order is approved, {'\n'}It'll be on way to you!!</Text>
    <Button style = {styles.button}>Okay</Button>
</View>

    )
}

export default Thankyou;