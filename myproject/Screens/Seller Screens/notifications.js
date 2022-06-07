import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../../style/ExternalStyle';

const SellerNotification = () => {
    return (

        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row',  backgroundColor: '#DEDEDE', borderBottomWidth: 0.2,}}>
                <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style = {styles.CartItemImage}/>
                <Text style={styles.Description}>Your Order has been created from Chef name at 12: 45 pm</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row',  backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style = {styles.CartItemImage}/>
                <Text style={styles.Description}>Your Order has been created from Chef name at 12: 45 pm</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row',  backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style = {styles.CartItemImage}/>
                <Text style={styles.Description}>Your Order has been created from Chef name at 12: 45 pm</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row',  backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style = {styles.CartItemImage}/>
                <Text style={styles.Description}>Your Order has been created from Chef name at 12: 45 pm</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row',  backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style = {styles.CartItemImage}/>
                <Text style={styles.Description}>Your Order has been created from Chef name at 12: 45 pm</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row',  backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style = {styles.CartItemImage}/>
                <Text style={styles.Description}>Your Order has been created from Chef name at 12: 45 pm</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row',  backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style = {styles.CartItemImage}/>
                <Text style={styles.Description}>Your Order has been created from Chef name at 12: 45 pm</Text>
            </View>


        </ScrollView>
    )


}

export default SellerNotification;