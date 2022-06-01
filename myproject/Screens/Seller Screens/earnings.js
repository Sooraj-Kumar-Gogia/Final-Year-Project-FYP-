import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-paper';
import styles from '../../style/ExternalStyle';

const Earnings = () => {
    return (
        <View>
            <Card style={styles.SellerDashboardCards}>
                <Card.Content>
                    <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 18, alignSelf: 'center', fontWeight: 'bold', }}>Total</Text>
                    <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 28, alignSelf: 'center', fontWeight: 'bold', }}>40,000</Text>
                </Card.Content>
            </Card>

            <Text>Withdrawn </Text>
            <Text>20,000</Text>
            


        </View>
    )
}

export default Earnings;