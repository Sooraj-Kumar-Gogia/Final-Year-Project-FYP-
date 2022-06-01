import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import { Button, Card } from "react-native-paper";
import DatePicker from 'react-native-date-picker'
import styles from "../../style/ExternalStyle";

const SellerSignup2 = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View>
            
            <DatePicker date={date} onDateChange={setDate} style = {styles.TextBox}/>
            <TextInput placeholder='CNIC' style = {styles.TextBox}/>
            <TextInput placeholder='Phone' style = {styles.TextBox}/>
            <TextInput placeholder='Store Name' style = {styles.TextBox}/>
            <TextInput placeholder='About Store' style = {styles.TextBox}/>
            <Button>Upload Store Cover Image</Button>
            <TextInput placeholder='Email' style = {styles.TextBox}/>
            <TextInput placeholder='About' secureTextEntry='True' style = {styles.TextBox}/>
            <TextInput placeholder='Street' style = {styles.TextBox}/>
            <TextInput placeholder='Location' style = {styles.TextBox}/>

        </View>


    )

}


export default SellerSignup2;