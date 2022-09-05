import * as React from 'react';
import { Card, Button } from 'react-native-paper';
import { View, Text, Image } from 'react-native';
import styles from '../../style/ExternalStyle';
import { ScrollView } from 'react-native-gesture-handler';
import OrdersApproval from './OrderApproval';
import { useNavigation } from '@react-navigation/native';

const CallOrderApproval = (sellerid) => { navigation.navigate('OrderApproval', {userId: sellerid}); }
const CallOrdersScreen = (sellerid) => { navigation.navigate('Orders', {userId: sellerid}); }

const SellerDashboard = ({ route }) => {
    navigation = useNavigation();
    const sellerid = route.params.userId;
    console.log("I am at Seller Dasbboard", sellerid)
    console.log(sellerid);

    return (
            // <View></View>
            <View style={{ paddingTop: 20, flex: 2, flexDirection: 'column', }}>
                <Text style={styles.NameHeading}>Hi, Have a busy day full of orders and earn! </Text>
                <ScrollView>
                    <Card style={styles.SellerDashboardCards} onPress={CallOrderApproval(sellerid)}>
                        <Card.Content>
                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 18, alignSelf: 'center', fontWeight: 'bold', }}>UNCOMFIRMED ORDERS</Text>
                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 40, fontWeight: 'bold', }}>{'\n'}2</Text>
                        </Card.Content>
                    </Card>

                    <Card style={styles.SellerDashboardCards} onPress={CallOrdersScreen(sellerid)}>
                        <Card.Content>
                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 18, fontWeight: 'bold', }}>ACTIVE ORDERS</Text>
                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 40, fontWeight: 'bold', }}>{'\n'}2</Text>
                        </Card.Content>
                    </Card>
                </ScrollView>

        </View>
    )
}

export default SellerDashboard;