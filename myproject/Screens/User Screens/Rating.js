import * as React from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Button, Card } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Rating } from 'react-native-ratings';

export default Rate = ({ route }) => {

    const navigation = useNavigation();
    const getorderid = route.params.orderid
    const getuserid = route.params.userId
    const getsellerid = route.params.sellerid
    const getproductid = route.params.productid

    const [rate, setRate] = useState(0);
    const [comment, setComment] = useState('');
    // const [userid, setUserid] = useState('');
    // const [orderid, setOrderid] = useState('');
    // const [sellerid, setSellerid] = useState('');


    const CallRate = () => {
        console.log(getorderid, getuserid, getproductid, getsellerid, rate, comment)

        fetch("http://10.0.2.2:3000/submitrating", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sellerid: getsellerid,
                userid: getuserid,
                orderid: getorderid,
                productid: getproductid,
                rated: rate,
                comment: comment
            })
        })

            .then(res => res.json())
            .then(data => {
                alert("Thank you for the feedback")
                console.log(data)
                // const userId = data._id
                navigation.navigate('Home', { userId: getuserid })

            }).catch(err => {
                console.log(err)
            })



    }


    return (
        <View>
            <ScrollView>
                <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/RateFood.png')} style={{ width: 220, height: 250, marginTop: 20, alignSelf: 'center', paddingBottom: 20, marginBottom: 20, }} />
                <Text style={styles.Heading}>Rate Seller</Text>
                <Rating
                    type='star'
                    ratingCount={5}
                    imageSize={40}
                    startingValue={0}
                    onFinishRating={(rating) => setRate(rating)}
                    style={{ marginTop: 20, }} />
                {/* <Text style={styles.Description}>Comment</Text> */}
                <TextInput style={styles.TextBox} placeholder="Enter your comment" value={comment} onChangeText={(comment) => setComment(comment)}
                />
                <Button style={styles.button} onPress={() => CallRate()}>Submit</Button>


            </ScrollView>
        </View>
    )



}