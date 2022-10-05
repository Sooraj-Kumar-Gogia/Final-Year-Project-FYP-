import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';


const DeleteUserAdmin = () => {

    // const adminid = route.params.userId; {route}
    // const [id, setuserid] = useState('')
    const [email, setemail] = useState('')


    const DeleteUser = () => {
        try {
            console.log(email)
            fetch(`http://10.0.2.2:3000/deleteuser/${email}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then(data => {
                    console.log(data);
                    alert("User Deleted")
                })
        }
        catch (error) {
            console.log("couldn't delete user!")
            console.log(error);
        }
    }
    // console.log("Admin ID: ", adminid);


    return (
        <View>
            <ScrollView>
                <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/deleteuser.png')} style={{ width: 150, height: 200, alignSelf: 'center', paddingTop: 70 }} />
                <Text style={styles.NameHeading}>Delete User</Text>
                <TextInput placeholder='Enter Email' value={email} onChangeText={(text) => setemail(text)} style={styles.TextBox}></TextInput>
                <Button style={styles.button} mode="contained" onPress={() => DeleteUser}>Delete User</Button>
            </ScrollView>


        </View>

    )
}

export default DeleteUserAdmin;