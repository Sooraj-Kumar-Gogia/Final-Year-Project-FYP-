import * as React from 'react';
import { Card, Button } from 'react-native-paper';
import { View, Text, Image } from 'react-native';
import styles from '../../style/ExternalStyle';
import { ScrollView } from 'react-native-gesture-handler';
import OrdersApproval from './OrderApproval';
import { useNavigation } from '@react-navigation/native';

const CallOrderApproval = (sellerid) => { navigation.navigate('OrderApproval', { userId: sellerid }); }
const CallOrdersScreen = (sellerid) => { navigation.navigate('Orders', { userId: sellerid }); }

const SellerDashboard = ({ route }) => {
    navigation = useNavigation();
    const sellerid = route.params.userId;
    console.log("I am at Seller Dasbboard", sellerid)
    console.log(sellerid);

    return (
        // <View></View>
        <View style={{ paddingTop: 20, flex: 2,  }}>

            <View style={{ flex: 2, width: '100%', flexDirection: 'row',}}>
                <ScrollView>
                    <Card style={styles.banner}>
                        <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/Banner/banner2.png')} style={styles.ProductImage} resizeMode='contain' />
                    </Card>
                    <Card style={styles.banner}>
                        <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/Banner/banner.jpg')} style={styles.ProductImage} resizeMode='contain' />
                    </Card>

                </ScrollView>
            </View>


            <Text style={styles.NameHeading}>Orders </Text>

            <ScrollView>
                <View style={{ flex: 2, width: '100%', flexDirection: 'row', }}>
                    <Card style={styles.SellerDashboardCards} onPress={() => CallOrderApproval(sellerid)}>
                        <Card.Content>
                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 18, alignSelf: 'center', fontWeight: 'bold', }}>UNCOMFIRMED ORDERS</Text>
                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 40, fontWeight: 'bold', }}>{'\n'}2</Text>
                        </Card.Content>
                    </Card>

                    <Card style={styles.SellerDashboardCards2} onPress={() => CallOrdersScreen(sellerid)}>
                        <Card.Content>
                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 18, fontWeight: 'bold', }}>ACTIVE ORDERS</Text>
                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 40, fontWeight: 'bold', }}>{'\n'}2</Text>
                        </Card.Content>
                    </Card>
                </View>
            </ScrollView>

        </View>
    )
}

export default SellerDashboard;