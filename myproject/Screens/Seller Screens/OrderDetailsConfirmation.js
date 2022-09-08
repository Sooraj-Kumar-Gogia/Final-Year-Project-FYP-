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
    sellerid = route.params.userId
    console.log("Confirm Order with id: ", orderid, "seller: ", sellerid)
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
                    console.log(data)
                })
        }
        catch (error) {
            console.log("couldn't fetch data from your API Sooraj!")
            console.log(error);
        }
    }, [])
    
    const id = orderid;
    // console.log("ID: ", id)
    console.log(data)
    console.log("User ID: ",data.userid)
    console.log("Seller ID: ", data.sellerid)
    // console.log("Order ID: ", data._id)
    console.log("Product name: ", data.name)
    console.log("Price ",data.price)
    console.log("Quantity: ", data.quantity)
    console.log("City: ",data.city)
    console.log("Address: ",data.address)
    console.log("Phone: ",data.phone)
    console.log("Total: ", data.total)
    
   const user = data.userid;
    const seller = data.sellerid;
    const product = data.productid;
    // const orderid = data._id;
    const producttitle = data.name;
    const productprice = data.price;
    const items = data.quantity;
    const usercity = data.city;
    const useraddress = data.address;
    const userphone = data.phone;
    const billtotal = data.total;



    const PostConfirmOrder = () => {
        try {
            console.log("seller: ", seller, " User: ", user, " Product: ", product, " Order: ", orderid, " Product Title: ", producttitle, " Product Price: ", productprice, " Items: ", items, " City: ", usercity, " Address: ", useraddress, " Phone: ", userphone); 
            fetch("http://10.0.2.2:3000/moveorderdata", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sellerid: seller,
                    userid: user,
                    productid: product,
                    name: producttitle,
                    price: productprice,
                    address: useraddress,
                    city: usercity,
                    phone: userphone, 
                    quantity: items

                })
            })

                .then(res => res.json())
                .then(data => {
                    alert("Order Confirmed and Moved to Confirmed Orders")
                    console.log(data)
                    CallRejectOrder();
                    

                }).catch(err => {
                    console.log(err)
                })
        }
        catch (error) {
            console.log("couldn't fetch data from your API Sooraj!")
            console.log(error);
        }

    }


    const CallRejectOrder = (sellerid) => {

        try {
            console.log(id)
            fetch(`http://10.0.2.2:3000/deleteuncomfirmedorder/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then(data => {
                    console.log(typeof (data))
                    console.log(data);
                    alert("Order Rejected")
                    navigation.navigate('OrderApproval', { userId: sellerid })
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
                {/* <Text style={{ fontSize: 14, color: 'black' }}>Seller ID: {data.total}</Text> */}
                <Button style={styles.button} onPress={()=>PostConfirmOrder()}>Confirm Order</Button>
                <Button style={styles.rejectbutton} onPress={()=>CallRejectOrder(sellerid)} >Reject Order</Button>
            </ScrollView>

        </View>

    )


}

export default OrderDetailsConfirmation;