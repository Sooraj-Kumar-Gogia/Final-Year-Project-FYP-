import * as React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';

const AddProduct = () => {
    return (
        <View>
            <Text style={styles.NameHeading}>Product Info</Text>
            <TextInput placeholder='Product Title' style = {styles.TextBox}/>
            <TextInput placeholder='Category' style = {styles.TextBox}></TextInput>
            <TextInput placeholder='Tags' style = {styles.TextBox}></TextInput>
            








        </View>

    )
}

export default AddProduct;