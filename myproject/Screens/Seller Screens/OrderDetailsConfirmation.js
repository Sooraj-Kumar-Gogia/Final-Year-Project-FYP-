import * as React from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Button, Card } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import SellerDashboard from './Dashboard';

const CallSellerDashboard =(props) => {
    alert("Order Confirmed");
    navigation.navigate('SellerDashboard');
}

const RejectOrder = (props) => {
    alert("Order Rejected");
    navigation.navigate('SellerDashboard');
}


export default OrderDetailsConfirmation = () => {
    navigation = useNavigation();

    return (
        <View style={{margin: 20,}}>
            <ScrollView>
                <View><Text></Text></View>
                <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/addProduct.png')} style={styles.ProductImageOrderPage} />
                <Text style={styles.Heading}>Order Details</Text>
                <Text style={{fontSize: 14, color:'black', marginBottom: 8,}}>Order ID</Text>
                <Text style={{fontSize: 14, color:'black'}}>Product Name</Text>
                <Text style={{fontSize: 14, color:'black'}}>Price</Text>
                <Text style={{fontSize: 14, color:'black'}}>Quantity</Text>
                <Text style={{fontSize: 14, color:'black'}}>Address</Text>
                <Text style={{fontSize: 14, color:'black'}}>Phone Number</Text>
                <Text style={{fontSize: 14, color:'black'}}>City</Text>
                <Text style={{fontSize: 14, color:'black'}}>Address</Text>
                <Button style={styles.button} onPress={CallSellerDashboard}>Confirm Order</Button>
                <Button style={styles.rejectbutton} onPress={RejectOrder} >Reject Order</Button>
            </ScrollView>

        </View>

    )




}