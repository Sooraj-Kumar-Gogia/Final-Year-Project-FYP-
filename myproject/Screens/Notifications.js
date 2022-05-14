import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from "../style/ExternalStyle";

const Notification = () => {
    return (
        <ScrollView>

            <View style={{ flex: 1, flexDirection: 'row',  backgroundColor: '#DEDEDE', borderBottomWidth: 0.2,}}>
                <Image source={require('C:/Users/ICT/Desktop/React/myproject/src/dishes/dish1.jpg')} style = {styles.CartItemImage}/>
                <Text style={styles.Description}>Your Order has been created from Chef name at 12: 45 pm</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row',  backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                <Image source={require('C:/Users/ICT/Desktop/React/myproject/src/dishes/dish1.jpg')} style = {styles.CartItemImage}/>
                <Text style={styles.Description}>Your Order has been created from Chef name at 12: 45 pm</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row',  backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                <Image source={require('C:/Users/ICT/Desktop/React/myproject/src/dishes/dish1.jpg')} style = {styles.CartItemImage}/>
                <Text style={styles.Description}>Your Order has been created from Chef name at 12: 45 pm</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row',  backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                <Image source={require('C:/Users/ICT/Desktop/React/myproject/src/dishes/dish1.jpg')} style = {styles.CartItemImage}/>
                <Text style={styles.Description}>Your Order has been created from Chef name at 12: 45 pm</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row',  backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                <Image source={require('C:/Users/ICT/Desktop/React/myproject/src/dishes/dish1.jpg')} style = {styles.CartItemImage}/>
                <Text style={styles.Description}>Your Order has been created from Chef name at 12: 45 pm</Text>
            </View>

        </ScrollView>
    )


}

export default Notification;