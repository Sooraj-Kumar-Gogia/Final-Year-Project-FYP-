import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, Modal } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const AddProduct = ({ route }) => {

    const sellerid = route.params.userId;
    const [name, setproductname] = useState('')
    const [price, setprice] = useState('')
    const [description, setdescription] = useState('')
    const [modal, setModal] = useState(false)
    const [image, setimageurl] = useState('')
    // const image = "hello.jpg";

    console.log("sellerid at add product", sellerid);


    const sendProduct = () => {
        console.log("hello add product")
        fetch("http://10.0.2.2:3000/addproducts", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sellerid,
                name,
                price,
                description,
                image
            })
        })

            .then(res => res.json())
            .then(data => {
                alert("Product Published")
                console.log(data)

            }).catch(err => {
                console.log(err)
            })
    }



    let options = {
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

    const openCamera = async () => {
        const images = await launchCamera(options);
        if (!images.didCancel) {
            let newFile = { uri: images.assets[0].uri, type: images.assets[0].type, name: images.assets[0].fileName }
            handleUpload(newFile)
        }
    }

    const openGalary = async () => {
        const images = await launchImageLibrary(options);
        if (!images.didCancel) {
            let newFile = { uri: images.assets[0].uri, type: images.assets[0].type, name: images.assets[0].fileName }
            handleUpload(newFile)
        }
    }

    const handleUpload = (image) => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'usersYHEW')
        data.append('cloud_name', 'react-native-yhew')

        fetch("https://api.cloudinary.com/v1_1/react-native-yhew/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json()).
            then(data => {
                console.log(data)
                setimageurl(data.url)
                setModal(false)
            })
    }




    return (
        <View>
            <ScrollView>
                <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/illustrations/addProduct.png')} style={{ width: 150, height: 200, alignSelf: 'center', paddingTop: 70 }} />
                <Text style={styles.NameHeading}>Product Info</Text>
                <TextInput placeholder='Product Title' value={name} onChangeText={(text) => setproductname(text)} style={styles.TextBox}></TextInput>
                <TextInput placeholder='Description' multiline style={styles.ProductDescription} value={description} onChangeText={(text) => setdescription(text)}></TextInput>
                {/* <TextInput placeholder='Category' style = {styles.TextBox}></TextInput> */}
                <TextInput placeholder='Price' keyboardType='numeric' style={styles.TextBox} value={price} onChangeText={(text) => setprice(text)}></TextInput>
                <Button style={styles.rejectbutton} onPress={() => setModal(true)}>Select Image</Button>
                <Button style={styles.button} mode="contained" onPress={sendProduct}>Publish Product</Button>
            </ScrollView>


            <Modal
                animatedType="slide"
                transparent={false}
                visible={modal}
                style={{ backgroundColor: "white", position: 'absolute', top: 2, width: "100%" }}>

                <View style={{ alignContent: 'center', alignItems: 'center', flexDirection: "row", justifyContent: 'space-around', marginTop: 350 }}>
                    <Button icon={image == "" ? "camera" : "check"} style={{ backgroundColor: '#10047c' }} mode="contained" onPress={openCamera}>
                        Camera
                    </Button>

                    <Button icon={image == "" ? "image-area" : "check"} style={{ backgroundColor: '#10047c' }} mode="contained" onPress={openGalary}>
                        Galary
                    </Button>
                </View>
                <Button style={{ backgroundColor: 'red', marginTop: 20, margin: 40 }} mode="contained" onPress={() => setModal(false)}>
                    cancel
                </Button>
            </Modal>

        </View>

    )
}

export default AddProduct;