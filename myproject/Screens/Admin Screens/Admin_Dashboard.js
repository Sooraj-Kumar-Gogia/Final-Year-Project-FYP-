import * as React from 'react';
import { Card, Button } from 'react-native-paper';
import { View, Text, Image } from 'react-native';
import styles from '../../style/ExternalStyle';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ComplainsAdmin from './ComplainsAdmin';
import DeleteUserAdmin from './DeleteUserAdmin';

const CallComplainScreen = () => { navigation.navigate('ComplainsAdmin'); }
const CallDeleteUserScreen = () => { navigation.navigate('DeleteUserAdmin'); }

const AdminDashboard = () => {
    navigation = useNavigation();
    // const sellerid = route.params.userId; { route }
    // console.log("I am at Seller Dasbboard", sellerid)
    // console.log(sellerid);

    return (
            // <View></View>
            <View style={{ paddingTop: 20, flex: 2, flexDirection: 'column', }}>
                <View style={{margin:10, flex: 2, flexDirection: 'row'}}>
                <Text style={styles.NameHeading}>Hi, Admin </Text>
                <Button style = {{height: 40, width: 150, marginTop: 10}}> LOG OUT</Button>

            </View>
                <ScrollView>
                    <Card style={styles.SellerDashboardCards} onPress={CallComplainScreen}>
                        <Card.Content>
                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 18, alignSelf: 'center', fontWeight: 'bold', }}>COMPLAINS</Text>
                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 40, fontWeight: 'bold', }}>{'\n'}2</Text>
                        </Card.Content>
                    </Card>

                    <Card style={styles.SellerDashboardCards} onPress={CallDeleteUserScreen}>
                        <Card.Content>
                            <Text style={{ color: 'white', fontFamily: 'Poppins', fontSize: 18, fontWeight: 'bold', }}>DELETE USER BY ID</Text>
                        </Card.Content>
                    </Card>
                </ScrollView>


        </View>
    )
}

export default AdminDashboard;