import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../../style/ExternalStyle';


const Header = () => {
    return (
        <View>
            <Text style={{ fontFamily: 'Poppins', fontSize: 28, fontWeight: 'bold', padding: 10, color: 'black' }}>
                Cancelled Orders
            </Text>
        </View>
    )
}



const CancelledOrders = () => {
    return (

        <View>
            <Header></Header>
            <ScrollView>

                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/cancel.png')} style={styles.CartItemImage} />
                    <Text style={styles.Description}>Order Cancelled</Text>
                    <Text style = {styles.Description}>PKR 500</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/cancel.png')} style={styles.CartItemImage} />
                    <Text style={styles.Description}>Order Cancelled</Text>
                    <Text style = {styles.Description}>PKR 500</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/cancel.png')} style={styles.CartItemImage} />
                    <Text style={styles.Description}>Order Cancelled</Text>
                    <Text style = {styles.Description}>PKR 500</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/cancel.png')} style={styles.CartItemImage} />
                    <Text style={styles.Description}>Order Cancelled</Text>
                    <Text style = {styles.Description}>PKR 500</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/cancel.png')} style={styles.CartItemImage} />
                    <Text style={styles.Description}>Order Cancelled</Text>
                    <Text style = {styles.Description}>PKR 500</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/cancel.png')} style={styles.CartItemImage} />
                    <Text style={styles.Description}>Order Cancelled</Text>
                    <Text style = {styles.Description}>PKR 500</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/cancel.png')} style={styles.CartItemImage} />
                    <Text style={styles.Description}>Order Cancelled</Text>
                    <Text style = {styles.Description}>PKR 500</Text>
                </View>
            </ScrollView>

        </View>
    )


}

export default CancelledOrders;