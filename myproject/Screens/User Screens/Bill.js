import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
// import { exp } from 'react-native/Libraries/Animated/Easing';
import styles from '../../style/ExternalStyle';

const Bill = () => {
    return (
        
        <View style={{ flexDirection: 'column' }}>
            <ScrollView>
            <View style={{ flexDirection: 'row', }}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.ProductNameCart}>Chicken Biryani           </Text>
                        <Text style={styles.ProductNameCart}>250</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'baseline' }}>
                        <Text style={{ padding: 15, fontSize: 15, }}>x2</Text>
                        <Text> Counter here </Text>
                    </View>
                </View>
            </View>



            <View style={{ flexDirection: 'row', }}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.ProductNameCart}>Chicken Biryani           </Text>
                        <Text style={styles.ProductNameCart}>250</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'baseline' }}>
                        <Text style={{ padding: 15, fontSize: 15, }}>x2</Text>
                        <Text> Counter here </Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', }}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.ProductNameCart}>Chicken Biryani           </Text>
                        <Text style={styles.ProductNameCart}>250</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'baseline' }}>
                        <Text style={{ padding: 15, fontSize: 15, }}>x2</Text>
                        <Text> Counter here </Text>
                    </View>
                </View>
            </View>

            <Text style={styles.NameHeading}>Total: PKR 750</Text>
            </ScrollView>

            <Button style={styles.button}>Confirm Order</Button>
        </View >
     




    )


}

export default Bill;