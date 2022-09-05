import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';


const SubmitComplain = ({ route }) => {

    const sellerid = route.params.sellerid;
    const userid = route.params.userid;
    const complainby = route.params.complainby;
    const [complain, setComplain] = useState('');


    const SubmitComplain = () => {
        console.log("hello add product")
        fetch("http://10.0.2.2:3000/complains", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sellerid,
                userid,
                complainby,
                complain
            })
        })

            .then(res => res.json())
            .then(data => {
                alert("Complain Submitted");
                console.log(data)

            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <View>
            <ScrollView>
                <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/complain.png')} style={{ width: 150, height: 200, alignSelf: 'center', paddingTop: 70 }} />
                <Text style={styles.NameHeading}>What Happened?</Text>
                <TextInput placeholder='Explain here in details' multiline style={styles.ProductDescription} value={complain} onChangeText={(text) => setComplain(text)}></TextInput>
                <Button style={styles.button} mode="contained" onPress={SubmitComplain}>Submit Complain</Button>
            </ScrollView>


        </View>

    )
}

export default SubmitComplain;