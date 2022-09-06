import * as React from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Button, Card } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import SellerDashboard from './Dashboard';


const OrderDetailsConfirmation = ({ route }) => {
            navigation = useNavigation();
            orderid = route.params.item_id;
            console.log("Confirm Order with id: ",orderid)
            const [data, setData] = useState([]);

            React.useEffect(() => {
                try {
                    console.log(orderid)
                    fetch(`http://10.0.2.2:3000/fetchunconfirmedorders/${orderid}`)
                        .then((res) => res.json())
                        .then(data => {
                            console.log(typeof (data))
                            console.log(data);
                            setData(data);
                            console.log(data.name)
                        })
                }
                catch (error) {
                    console.log("couldn't fetch data from your API Sooraj!")
                    console.log(error);
                }
            }, [])


            const id = data._id

            const CallConfirmOrder = (id) => {
                const unconfirmedid = id
                
                fetch(`http://10.0.2.2:3000/confirmanddeleteorder`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:{
                        id: unconfirmedid,
                    }
                })
            
                    .then(res => res.json())
                    .then(data => {
                        alert("Order Confirmed")
                        console.log(data)
                    }).catch(err => { console.log(err) });
            
            }



            const CallRejectOrder = () => {
    
                // React.useEffect(() => {
                    try {
                        console.log(id)
                        fetch(`http://10.0.2.2:3000/deleteuncomfirmedorder/${id}`, {
                            method: "POST",
                        })
                            .then((res) => res.json())
                            .then(data => {
                                console.log(typeof (data))
                                console.log(data);
                                alert("Order Rejected")
                                navigation.navigate('OrderApproval')
                            })
                    }
                    catch (error) {
                        console.log("couldn't reject order!")
                        console.log(error);
                    }
                // }, [])
            
            }



            return (
                <View style={{ margin: 20, }}>
                    <ScrollView>
                        <View><Text></Text></View>
                        <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/addProduct.png')} style={styles.ProductImageOrderPage} />
                        <Text style={styles.Heading}>Order Details</Text>
                        <Text style={{ fontSize: 14, color: 'black', marginBottom: 8, }}>Order ID: {data._id}</Text>
                        <Text style={{ fontSize: 14, color: 'black' }}>Product Name: {data.name}</Text>
                        <Text style={{ fontSize: 14, color: 'black' }}>Product ID: {data.productid}</Text>
                        <Text style={{ fontSize: 14, color: 'black' }}>Price {data.price}</Text>
                        <Text style={{ fontSize: 14, color: 'black' }}>Quantity: {data.quantity}</Text>
                        <Text style={{ fontSize: 14, color: 'black' }}>Address: {data.address}</Text>
                        <Text style={{ fontSize: 14, color: 'black' }}>Phone Number: {data.phone}</Text>
                        <Text style={{ fontSize: 14, color: 'black' }}>City: {data.city}</Text>
                        <Text style={{ fontSize: 14, color: 'black' }}>Address:{data.address}</Text>
                        <Text style={{ fontSize: 14, color: 'black' }}>User ID:{data.userid}</Text>
                        <Text style={{ fontSize: 14, color: 'black' }}>Seller ID: {data.sellerid}</Text>
                        <Button style={styles.button} onPress={CallConfirmOrder}>Confirm Order</Button>
                        <Button style={styles.rejectbutton} onPress={CallRejectOrder} >Reject Order</Button>
                    </ScrollView>

                </View>

            )




        }

export default OrderDetailsConfirmation;