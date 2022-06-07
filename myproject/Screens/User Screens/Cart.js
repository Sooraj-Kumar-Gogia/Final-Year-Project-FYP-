import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import Bill from './Bill';

const CallBillScreen = () => { navigation.navigate('Bill') }

const CartScreen = () => {
    navigation = useNavigation();
    return (
        <View>
            <View style={{ flexDirection: 'row', }}>
                <View>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.CartItemImage} />
                </View>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.ProductNameCart}>Chicken Biryani           </Text>
                        <Text style={styles.ProductNameCart}>250</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'baseline' }}>
                    <Text style = {{padding: 15, fontSize: 15,}}>x2</Text>
                    <Text> Counter here </Text>
                    </View>
                </View>
            </View>



            <View style={{ flexDirection: 'row', }}>
                <View>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.CartItemImage} />
                </View>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.ProductNameCart}>Chicken Biryani           </Text>
                        <Text style={styles.ProductNameCart}>250</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'baseline' }}>
                    <Text style = {{padding: 15, fontSize: 15,}}>x2</Text>
                    <Text> Counter here </Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', }}>
                <View>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.CartItemImage} />
                </View>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.ProductNameCart}>Chicken Biryani           </Text>
                        <Text style={styles.ProductNameCart}>250</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'baseline' }}>
                    <Text style = {{padding: 15, fontSize: 15,}}>x2</Text>
                    <Text> Counter here </Text>
                    </View>
                </View>
            </View>



            <Button style={styles.button} onPress={CallBillScreen}>Order Now</Button>
        </View >






    )


}

export default CartScreen;









// import React, { useContext } from 'react';
// import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
// import { DataContext } from '../context-provider'

// const CartStatus = () => {


//     return (
        
//             <View style={[style.miniCartWrapper]}>
//                 <View style={style.miniCart}>
//                     <Text style={[style.cartText, style.circle]}>Hi</Text>
//                     <Text style={style.cartText}>View Cart</Text>
//                     <Text style={style.cartText}>$200</Text>
//                 </View>
//             </View>
       
//     );
// }

// export default CartStatus;


// const style = StyleSheet.create({

//     miniCartWrapper: {
//         backgroundColor: "white",
//     },
//     miniCart: {
//         backgroundColor: "#D70F64",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: 15,
//     },
//     cartText: {
//         color: "white",
//         fontWeight: "bold"
//     },
//     circle: {
//         width: 20,
//         height: 20,
//         backgroundColor: "white",
//         textAlign: "center",
//         borderRadius: 50,
//         color: "black"
//     },


// })