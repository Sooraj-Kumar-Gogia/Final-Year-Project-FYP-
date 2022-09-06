import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import { Button, Card } from "react-native-paper";
// import DatePicker from 'react-native-date-picker';
import styles from "../../style/ExternalStyle";
import Login from '../User Screens/Login';
import { useNavigation } from '@react-navigation/native';
import { text } from 'body-parser';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const SellerSignup2 = ({ route }) => {
    navigation = useNavigation();
    const [frontCNIC, setFrontCNIC] = useState('')
    const [modal, setModal] = useState(false)
    const CallLogin = () => { navigation.navigate('Login') }

    const email = route.params.Email;
    const password = route.params.Password;
    const phone = route.params.Phone;
    const name = route.params.Name;
    const role = route.params.Role;
    const [BusinessName, setBusinessName] = useState('');
    const [StoreDescription, setStoreDescription] = useState('');
    const [CNIC, setCNIC] = useState('');
    // const [CNICurl, setCNICurl] = useState('');
    const CNICurl = frontCNIC;


    const SubmitForm = () => {
        console.log(name, email, role, password)
        if (!email.trim()) { alert("Plaese Enter an Email") }
        if (!password.trim()) { alert("Please Enter a Password") }

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
                    phone,
                    role,
                    BusinessName,
                    StoreDescription,
                    CNIC,
                    CNICurl
                })
            })

                .then(res => res.json())
                .then(data => {
                    alert("Account Created")
                    console.log(data)
                    CallLogin()

                }).catch(err => {
                    console.log(err)
                })
        }

    }




    let options={
        title: 'Select Image',
      type: 'library',
      options: {
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
      },
      }
      
      const openCamera = async() => {
      const images = await launchCamera(options);
      if (!images.didCancel){
        let newFile = {uri: images.assets[0].uri, type: images.assets[0].type, name : images.assets[0].fileName}
         handleUpload(newFile)
      }
      }
      
      const openGalary = async() => {
      const images = await launchImageLibrary(options);
      if (!images.didCancel){
       let newFile = {uri: images.assets[0].uri, type: images.assets[0].type, name : images.assets[0].fileName}
        handleUpload(newFile)
      }
      }
      
      const handleUpload = (image) => {
      const data = new FormData()
      data.append('file', image)
      data.append('upload_preset', 'usersYHEW')
      data.append('cloud_name', 'react-native-yhew')
      
      fetch("https://api.cloudinary.com/v1_1/react-native-yhew/image/upload", {
        method:"post",
        body:data
      }).then(res => res.json()).
      then(data => {
        console.log(data)
        setFrontCNIC(data.url)
        setModal(false)
      })
      }


    return (

        <View style={{ flex: 2, flexWrap: "nowrap" }}>
            <Text style={styles.Heading}>Almost There...</Text>
            <TextInput placeholder='Business Name i.e. Sooraj Kitchen' style={styles.TextBox} value={BusinessName} onChangeText={(text) => setBusinessName(text)} />
            <TextInput placeholder='About Store i.e I am a chef with experience and I sell veg dishes...' multiline={true} style={styles.ProductDescription} value={StoreDescription} onChangeText={(text) => setStoreDescription(text)} />
            <TextInput placeholder='CNIC' style={styles.TextBox} value={CNIC} onChangeText={(text) => setCNIC(text)} />
            <Button style={{ height: 40, width: 150, marginLeft: 10, marginBottom: 0, paddingLeft: 10 }} onPress={() => setModal(true)}>Upload CNIC</Button>
            <Button style={styles.button} mode="contained" onPress={SubmitForm}>Create Account</Button>
        </View>

    )

}


export default SellerSignup2;