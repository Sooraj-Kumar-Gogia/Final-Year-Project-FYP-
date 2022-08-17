import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { text } from 'body-parser';
import * as React from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import { useState } from 'react';
import Navigation from '../../components/Navigation';


export default Signup1 = ({ route }) => {
    navigation = useNavigation()

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [repass, setrepass] = useState('')
    const name = route.params.Name
    const role = route.params.Role
    const phone = route.params.Phone

    const SubmitForm = () => {
        console.log(name, email, role, password)
        if (!email.trim()) { alert("Plaese Enter an Email") }
        if (!password.trim()) { alert("Please Enter a Password") }
        if (password != repass) { alert("Passwords do not match") }

        else { 
            fetch("http://10.0.2.2:3000/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    name,
                    password,
                    repass,
                    role,
                    phone
                })
            })

                .then(res => res.json())
                .then(data => {
                    alert("Account Created")
                    console.log(data)
                    navigation.navigate('Home')

                }).catch(err => {
                    console.log(err)
                })
            }

        }


        return (
            <View>
                <ScrollView>

                    <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/HI.png')} style={{ width: 150, height: 200, alignSelf: 'center', paddingTop: 70 }} />
                    <Text style={styles.Heading}> Perfect! A bit more info </Text>
                    <TextInput placeholder="Email" value={email} onChangeText={(text) => setemail(text)} style={styles.TextBox}></TextInput>
                    <TextInput placeholder='Password' secureTextEntry={true} value={password} onChangeText={(text) => setpassword(text)} style={styles.TextBox}></TextInput>
                    <TextInput placeholder='Re-enter Password' secureTextEntry={true} value={repass} onChangeText={(text) => setrepass(text)} style={styles.TextBox}></TextInput>

                </ScrollView>

                <View style={{ backgroundColor: 'white' }}>
                    <Button style={styles.button} mode="contained" onPress={SubmitForm}>Create Account</Button>
                </View>
            </View>
        )

    }

