import { useNavigation } from '@react-navigation/native';
import { text } from 'body-parser';
import * as React from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import { useState } from 'react';
import Navigation from '../../components/Navigation';


export default FillOrderForm = ({ route }) => {
    navigation = useNavigation()

    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    
    
    const productid = route.params.productId;
    const userid = route.params.userid;
    const quantity = route.params.quantity;
    const price = route.params.price;
    const sellerid = route.params.sellerId;
    const name = route.params.productname;

    const total = price * quantity;

    console.log(productid, userid, quantity, price, sellerid, name);

    const PlaceOrder = () => {


            fetch("http://10.0.2.2:3000/uncomfirmedorders", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productid: productid,
                    userid: userid,
                    quantity: quantity,
                    price: price,
                    sellerid: sellerid,
                    name: name,
                    city: city,
                    address: address,
                    phone: phone,
                    total: total    

                })
            })

                .then(res => res.json())
                .then(data => {
                    alert("Order Placed, Thank You!")
                    console.log(data)
                    const userid = data.userid;
                    navigation.navigate('Home', {userid})

                }).catch(err => {
                    console.log(err)
                })
            

        }


        return (
            <View>
                <ScrollView>
                    <Text style={styles.Heading}> Order Details </Text>
                    <TextInput placeholder="City" value={city} onChangeText={(text) => setCity(text)} style={styles.TextBox}></TextInput>
                    <TextInput placeholder='Address' value={address} onChangeText={(text) => setAddress(text)} style={styles.TextBox}></TextInput>
                    <TextInput placeholder='Phone' keyboardType='numeric' value={phone} onChangeText={(text) => setPhone(text)} style={styles.TextBox}></TextInput>
                    <Text style={styles.NameHeading}>Total Price: {total} </Text>

                </ScrollView>

                <View style={{ backgroundColor: 'white' }}>
                    <Button style={styles.button} mode="contained" onPress={PlaceOrder}>Place Order</Button>
                </View>
            </View>
        )

    }

