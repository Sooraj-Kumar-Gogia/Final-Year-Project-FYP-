import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';


const AddProduct = ({route}) => {

    const sellerid = route.params.userId;
    const [productname, setproductname] = useState('')
    const [price, setprice] = useState('')
    const [description, setdescription] = useState('')
    const [imageurl, setimageurl] = useState('')

    console.log("sellerid at add product", sellerid);


    const sendProduct = () => {
        console.log("hello add product")
    //     fetch("http://10.0.2.2:3000/addproducts", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             sellerid,
    //             productname,
    //             price,
    //             description,
    //             imageurl
    //         })
    //     })

    //         .then(res => res.json())
    //         .then(data => {
    //             alert("Product Published")
    //             console.log(data)

    //         }).catch(err => {
    //             console.log(err)
    //         })
    }

    return (
        <View>
            <ScrollView>
                <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/addProduct.png')} style={{ width: 150, height: 200, alignSelf: 'center', paddingTop: 70 }} />
                <Text style={styles.NameHeading}>Product Info</Text>
                <TextInput placeholder='Product Title' style={styles.TextBox} value={productname} />
                <TextInput placeholder='Description' multiline style={styles.ProductDescription}></TextInput>
                {/* <TextInput placeholder='Category' style = {styles.TextBox}></TextInput> */}
                <TextInput placeholder='Price' style={styles.TextBox}></TextInput>
                <Button>Select Image</Button>
            </ScrollView>
            <Button style={styles.button} mode="contained" onPress={sendProduct}>Publish Product</Button>

        </View>

    )
}

export default AddProduct;