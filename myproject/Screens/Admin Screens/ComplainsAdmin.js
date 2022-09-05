import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';


const ComplainsAdmin = () => {

    // const sellerid = route.params.userId; {route}
    const [name, setproductname] = useState('')
    // const [price, setprice] = useState('')
    // const [description, setdescription] = useState('')
    // const [imageurl, setimageurl] = useState('')
    // const image = "hello.jpg";

    // console.log("sellerid at add product", sellerid);


    // const sendProduct = () => {
    //     console.log("hello add product")
    //     fetch("http://10.0.2.2:3000/addproducts", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             sellerid,
    //             name,
    //             price,
    //             description,
    //             image
    //         })
    //     })

    //         .then(res => res.json())
    //         .then(data => {
    //             alert("Product Published")
    //             console.log(data)

    //         }).catch(err => {
    //             console.log(err)
    //         })
    // }

    return (
        <View>
            <Text style={styles.NameHeading}>Complains</Text>
            <ScrollView>
                <View style={{ borderRadius: 10, backgroundColor: '#DEDEDE', width: 500, height: 300, borderColor: 'grey', borderBottomWidth: 2, }}>
                    <Text style={styles.Description}>User ID: 123456789 </Text>
                    <Text style={styles.Description}>Seller ID: 123456 </Text>
                    <Text style={styles.Description}>Description: Seller did not provide quality </Text>
                    <Text style={styles.Description}>Complained By: user </Text>
                </View>
                <View style={{ borderRadius: 10, backgroundColor: '#DEDEDE', width: 500, height: 300, borderColor: 'grey' }}>
                    <Text style={styles.Description}>User ID: 123456 </Text>
                    <Text style={styles.Description}>Seller ID: 123456789 </Text>
                    <Text style={styles.Description}>Description: Meal was not fresh </Text>
                    <Text style={styles.Description}>Complained By: user </Text>
                </View>
            </ScrollView>


        </View>

    )
}

export default ComplainsAdmin;