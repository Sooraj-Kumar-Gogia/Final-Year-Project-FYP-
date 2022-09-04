import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';


const DeleteUserAdmin = ({route}) => {

    const adminid = route.params.userId;
    const [id, setuserid] = useState('')


    console.log("Admin ID: ", adminid);


    return (
        <View>
            <ScrollView>
                <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/addProduct.png')} style={{ width: 150, height: 200, alignSelf: 'center', paddingTop: 70 }} />
                <Text style={styles.NameHeading}>Delete User</Text>
                <TextInput placeholder='User ID' value={id} onChangeText={(text) => setuserid(text)} style={styles.TextBox}></TextInput>
                <Button style={styles.button} mode="contained">Delete User</Button>                
            </ScrollView>
            

        </View>

    )
}

export default DeleteUserAdmin;