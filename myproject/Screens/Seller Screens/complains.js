import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../../style/ExternalStyle';


const Header = () => {
    return (
        <View>
            <Text style={{ fontFamily: 'Poppins', fontSize: 28, fontWeight: 'bold', padding: 10, color: 'black' }}>
                Complains
            </Text>
        </View>
    )
}



const Complain = () => {
    return (

        <View>
            <Header></Header>
            <ScrollView>

                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/complain.jpg')} style={styles.CartItemImage} />
                    <Text style={styles.Description}>We have received a complain for you</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/complain.jpg')} style={styles.CartItemImage} />
                    <Text style={styles.Description}>We have received a complain for you</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/complain.jpg')} style={styles.CartItemImage} />
                    <Text style={styles.Description}>We have received a complain for you</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/complain.jpg')} style={styles.CartItemImage} />
                    <Text style={styles.Description}>We have received a complain for you</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/complain.jpg')} style={styles.CartItemImage} />
                    <Text style={styles.Description}>We have received a complain for you</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/complain.jpg')} style={styles.CartItemImage} />
                    <Text style={styles.Description}>We have received a complain for you</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#DEDEDE', borderBottomWidth: 0.2, }}>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/illustrations/complain.jpg')} style={styles.CartItemImage} />
                    <Text style={styles.Description}>We have received a complain for you</Text>
                </View>
            </ScrollView>

        </View>
    )


}

export default Complain;