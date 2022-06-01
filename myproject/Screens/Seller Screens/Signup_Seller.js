import * as React from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import styles from "../../style/ExternalStyle";

const SellerSignup = () => {
    return (
        <View>
            <TextInput placeholder='First Name' style = {styles.TextBox}/>
            <TextInput placeholder='Last Name' style = {styles.TextBox} />
            <TextInput placeholder='Email' style = {styles.TextBox} />
            <TextInput placeholder='Password' secureTextEntry='True' style = {styles.TextBox} />
        </View>


    )

}


export default SellerSignup;