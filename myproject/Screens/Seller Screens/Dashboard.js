import * as React from 'react';
import { Card, Button } from 'react-native-paper';
import { View, Text, Image } from 'react-native';
import styles from '../../style/ExternalStyle';
import { ScrollView } from 'react-native-gesture-handler';
import OrdersApproval from './OrderApproval';
import { useNavigation } from '@react-navigation/native';

const CallOrderApproval = () => {navigation.navigate('OrderApproval');}
const CallOrdersScreen = () => {navigation.navigate('Orders');}

const SellerDashboard = ({ route }) => {
    navigation = useNavigation();
    const sellerid = route.params.userId;
    console.log("I am at Seller Dasbboard baby", sellerid)
    console.log(sellerid);

    return (
        <View style={{ paddingTop: 20, }}>
            <ScrollView>
                <Card style={styles.SellerDashboardCards} onPress={CallOrderApproval}>
                    <Card.Content>
                        <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 18, alignSelf: 'center', fontWeight: 'bold', }}>UNCOMFIRMED ORDERS</Text>
                        <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 28, alignSelf: 'center', fontWeight: 'bold', }}>2</Text>
                    </Card.Content>
                </Card>

                <Card style={styles.SellerDashboardCards} onPress={CallOrdersScreen}>
                    <Card.Content>
                        <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 18, alignSelf: 'center', fontWeight: 'bold', }}>ACTIVE ORDERS</Text>
                        <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 28, alignSelf: 'center', fontWeight: 'bold', }}>2</Text>
                    </Card.Content>
                </Card>

                <Card style={styles.SellerDashboardCards} onPress={CallOrderApproval}>
                    <Card.Content>
                        <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 18, alignSelf: 'center', fontWeight: 'bold', }}>PRODUCTS PUBLISHED</Text>
                        <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 28, alignSelf: 'center', fontWeight: 'bold', }}>5</Text>
                    </Card.Content>
                </Card>






            </ScrollView>

        </View>


    )
}

export default SellerDashboard;