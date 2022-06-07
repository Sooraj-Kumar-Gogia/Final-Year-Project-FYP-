import * as React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';

const AddProduct2 = () => {
    return (
        <View>
            <Text style={styles.NameHeading}>Product Info</Text>
            <Button>Select Image</Button>
            <TextInput placeholder='Description' multiline style = {styles.ProductDescription}></TextInput>
            <Text style = {{padding: 20}}>Make sure your image is of 200 x 200 px</Text>
            <Button style= {styles.button}>Finish</Button>




        </View>

    )
}

export default AddProduct2;