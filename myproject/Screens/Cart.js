import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { exp } from 'react-native/Libraries/Animated/Easing';
import styles from "../style/ExternalStyle";

const CartScreen = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', }}>
                <View>
                    <Image source={require('C:/Users/ICT/Desktop/React/myproject/src/dishes/dish1.jpg')} style={styles.CartItemImage} />
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
                    <Image source={require('C:/Users/ICT/Desktop/React/myproject/src/dishes/dish1.jpg')} style={styles.CartItemImage} />
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
                    <Image source={require('C:/Users/ICT/Desktop/React/myproject/src/dishes/dish1.jpg')} style={styles.CartItemImage} />
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



            <Button style={styles.button}>Order Now</Button>
        </View >






    )


}

export default CartScreen;