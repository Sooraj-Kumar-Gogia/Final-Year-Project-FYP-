import * as React from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Button, Card } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import SubmitComplain from './SubmitComplain';

// const CallHomeScreen =(props) => {
//     alert("Order Completed");
//     navigation.navigate('Home');
// }



export default CompleteOrder = ({route}) => {
    navigation = useNavigation();
    const [data, setData] = useState([]);
    const orderid = route.params.orderid;
    const complainby = 'user';


    React.useEffect(() => {
        fetch(`http://10.0.2.2:3000/fetchordersbyorderidtocompleteorder/${orderid}`)
          .then((res) => res.json())
          .then(data => {
            setData(data);
          })

    
      }, [])

    return (
        <View style={{margin: 20,}}>
            <ScrollView>
                <View><Text></Text></View>
                <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/addProduct.png')} style={styles.ProductImageOrderPage} />
                <Text style={styles.Heading}>Order Details</Text>
                <Text style={{fontSize: 14, color:'black', marginBottom: 8,}}>Order ID: {data._id}</Text>
                <Text style={{fontSize: 14, color:'black'}}>Product Name: {data.name}</Text>
                <Text style={{fontSize: 14, color:'black'}}>Price: {data.price}</Text>
                <Text style={{fontSize: 14, color:'black'}}>Quantity: x{data.quantity}</Text>
                <Text style={{fontSize: 14, color:'black'}}>Address: {data.address}</Text>
                <Text style={{fontSize: 14, color:'black'}}>Phone Number: {data.city}</Text>
                <Text style={{fontSize: 14, color:'black'}}>City: {data.city}</Text>
                <Button style={styles.button}>Order Completed</Button>
                <Button style={styles.rejectbutton} onPress={navigation.navigate('SubmitComplain',{sellerid: data.sellerid, userid: data.userid, complainby })}>Complain Seller</Button>
            </ScrollView>

        </View>

    )




}