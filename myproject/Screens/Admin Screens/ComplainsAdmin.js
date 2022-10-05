import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';


const ComplainsAdmin = ({route}) => {
 
    const [data, setdata] = useState([])

    React.useEffect(() => {
        fetch(`http://10.0.2.2:3000/fetchcomplains`)
            .then((res) => res.json())
            .then(data => {
                setdata(data);

            })
    }, [])



    return (
        <View>
            <Text style={styles.NameHeading}>Complains</Text>
            <ScrollView>
                <View style={{ borderRadius: 10, backgroundColor: '#DEDEDE', width: 500, height: 300, borderColor: 'grey', borderBottomWidth: 2, }}>
                    <Text style={styles.Description}>User ID: {data.userid} </Text>
                    <Text style={styles.Description}>Seller ID: {data.sellerid} </Text>
                    <Text style={styles.Description}>Complain: {data.complain} </Text>
                    <Text style={styles.Description}>Complained By: {data.complainby} </Text>
                </View>
            </ScrollView>


        </View>

    )
}

export default ComplainsAdmin;