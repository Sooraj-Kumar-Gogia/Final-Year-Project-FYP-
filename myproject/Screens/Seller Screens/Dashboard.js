import * as React from 'react';
import { Card, Button } from 'react-native-paper';
import { View, Text, Image } from 'react-native';
import styles from '../../style/ExternalStyle';

const SellerDashboard = () => {
    return (
        <View style={{ paddingTop: 20, }}>
            <Card style={styles.SellerDashboardCards}>
                <Card.Content>
                    <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 18, alignSelf: 'center', fontWeight: 'bold', }}>UNCOMFIRMED ORDERS</Text>
                    <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 28, alignSelf: 'center', fontWeight: 'bold', }}>2</Text>
                </Card.Content>
            </Card>

            <Text style={{ fontFamily: 'Poppins', fontSize: 20, alignSelf: 'center', fontWeight: 'bold', paddingTop: 20, }}>Kitchen Status: Active</Text>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 2, width: '70%', alignSelf: 'center', padding: 20 }} />
            <View>
                <View style={{ borderBottomColor: 'black', borderLeftWidth: 2, alignSelf: 'center', padding: 20 }} />
                <View style={{ flexDirection: 'row', paddingLeft: 20, }}>
                    <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/Banner/banner.jpg')} style={{ width: 60, height: 60, borderRadius: 20, padding: 10 }} />
                    <Text>         </Text>

                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 2, width: '70%', alignSelf: 'center', padding: 20 }} />
            </View>


            <View style = {{flexDirection: 'row',}}>
                <Card style={styles.LeftSideCard}>
                    <Card.Content>
                        <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 18, alignSelf: 'center', fontWeight: 'bold', }}>UNCOMFIRMED ORDERS</Text>
                        <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 28, alignSelf: 'center', fontWeight: 'bold', }}>2</Text>
                    </Card.Content>
                </Card>

                <Card style={styles.RightSideCard}>
                    <Card.Content>
                        <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 18, alignSelf: 'center', fontWeight: 'bold', }}>UNCOMFIRMED ORDERS</Text>
                        <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 28, alignSelf: 'center', fontWeight: 'bold', }}>2</Text>
                    </Card.Content>
                </Card>

            </View>



        </View>


    )
}

export default SellerDashboard;