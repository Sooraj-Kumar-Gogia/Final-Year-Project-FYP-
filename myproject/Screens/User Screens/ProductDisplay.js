import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import CartScreen from './Cart';


const CallCartScreen =()=>
{navigation.navigate('Cart')}

const ProductDisplay = () => {
    navigation = useNavigation();
    return (

        <View>
            <Image source={require("C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg")} style={styles.ProductDisplayImage} />
            <Text style={styles.NameHeading}>Chicken Biryani</Text>
            <Text style={styles.Price}>PKR 200</Text>
            {/* <View style = {styles.circle}></View> */}
            <Text style={styles.Description}>This is laziz zaikedar Chicken Biryani made with pure ingredients of home. It is delivered with Raita and Salad. So, what are you waiting for? Order it now and Enjoy!</Text>
            <Button style={styles.button} onPress={CallCartScreen}>Add to HotPot</Button>
            
        </View>



    )
}

export default ProductDisplay;
