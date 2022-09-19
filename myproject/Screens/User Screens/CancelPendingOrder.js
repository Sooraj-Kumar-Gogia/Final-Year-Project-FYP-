import * as React from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Button, Card } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import SubmitComplain from './SubmitComplain';
import OrdersUser from './OrdersUser';
import Rating from './Rating';



export default CancelPendingOrder = ({ route }) => {
    navigation = useNavigation();
    const getorderid = route.params.orderid
    const userId = route.params.userid
    const [Data, setData] = useState([]);
    const complainby = 'user'

    console.log("Order ID outside: ", getorderid)

    React.useEffect(() => {
        fetch(`http://10.0.2.2:3000/fetchunconfirmedorders/${getorderid}`)
            .then((res) => res.json())
            .then(data => {
                setData(data);
            })


    }, []);


    const CallRejectOrder = (userid) => {

        try {
            const id = Data._id
            console.log(id)
            fetch(`http://10.0.2.2:3000/deleteuncomfirmedorder/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then(data => {
                    console.log(typeof (data))
                    console.log(data);
                    alert("Done")
                    navigation.navigate('Home', { userId: userid })
                })
        }
        catch (error) {
            console.log("couldn't reject order!")
            console.log(error);
        }

    }




    return (
        <View style={{ margin: 20, }}>
            <ScrollView>
                <View><Text></Text></View>
                <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/addProduct.png')} style={styles.ProductImageOrderPage} />
                <Text style={styles.Heading}>Order Details</Text>
                <Text style={{ fontSize: 18, color: 'black', fontStyle: 'italic', marginBottom: 8, }}>Order ID: {Data._id}</Text>
                <Text style={{ fontSize: 18, color: 'black' }}>Product Name: {Data.name}</Text>
                <Text style={{ fontSize: 18, color: 'black' }}>Price: {Data.price}</Text>
                <Text style={{ fontSize: 18, color: 'black' }}>Quantity: x{Data.quantity}</Text>
                <Text style={{ fontSize: 18, color: 'black' }}>Address: {Data.address}</Text>
                <Text style={{ fontSize: 18, color: 'black' }}>Phone Number: {Data.city}</Text>
                <Text style={{ fontSize: 18, color: 'black' }}>City: {Data.city}</Text>
                <Button style={styles.button} onPress={() => CallRejectOrder(Data.userid)}>Cancel Order</Button>
            </ScrollView>

        </View>
    )




}

