import * as React from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Button, Card } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import SubmitComplain from './SubmitComplain';
import OrdersUser from './OrdersUser';
import Rating from './Rating';



export default CompleteOrder = ({ route }) => {
    navigation = useNavigation();
    const getorderid = route.params.orderid
    const userId = route.params.userid
    const [Data, setData] = useState([]);
    const complainby = 'user'

    console.log("Order ID outside: ", getorderid)

    React.useEffect(() => {
        fetch(`http://10.0.2.2:3000/fetchordersbyorderidtocompleteorder/${getorderid}`)
            .then((res) => res.json())
            .then(data => {
                setData(data);
            })


    }, []);

    const CallCompleteOrder = (userid) => {

        try {
            console.log("Order ID inside: ", getorderid)
            fetch(`http://10.0.2.2:3000/completeorder/${getorderid}`,
                {
                    method: "DELETE",
                })
                .then((res) => res.json())
                .then(data => {
                    console.log(typeof (data))
                    console.log(data);
                    // alert("Order Completed")
                    alert("Order Completed")
                    navigation.navigate("Rating", { userId: Data.userid, sellerid: Data.sellerid, orderid: getorderid, productid: Data.productid })

                })
        }
        catch (error) {
            console.log("couldn't reject order!")
            console.log(error);
        }

    }




    const showAlert = () =>
        Alert.alert(
            "Order Completed",
            "Order fullfilled and will be removed from order list",
            [
                {
                    text: "Rate Order",
                    onPress: () => Alert.alert("Rate Order Pressed"),
                    style: "cancel",
                },

                {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel Pressed"),
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    ),
            }
        );




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
                <Button style={styles.button} onPress={() => CallCompleteOrder(Data.userid)}>Complete Order</Button>
                <Button style={styles.rejectbutton} onPress={() => navigation.navigate('SubmitComplain', { sellerid: Data.sellerid, userid: Data.userid, complainby })}>Complain Seller</Button>
            </ScrollView>

        </View>
    )




}
