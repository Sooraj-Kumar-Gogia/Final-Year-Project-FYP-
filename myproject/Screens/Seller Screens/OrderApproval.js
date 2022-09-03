import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button, Card } from "react-native-paper";
import styles from '../../style/ExternalStyle';
import { useNavigation } from '@react-navigation/native';
import { NewOrder } from '../../components/StatusTag';
import OrderDetailsConfirmation from './OrderDetailsConfirmation';
import SellerDashboard from './Dashboard';
import { UserTab } from '../../components/Navigation';
import { SellerTab } from '../../components/Navigation';
import Navigation from '../../components/Navigation';

const CallOrderDetailsConfirmationScreen = () => {
  navigation.navigate('OrderDetailsConfirmation');
}

const OrdersApproval = () => {
  // Stack = createStackNavigator();
  navigation = useNavigation();

  return (

    <View>
      <ScrollView>
        <Card style={styles.orderlist} onPress={CallOrderDetailsConfirmationScreen}>
          <Card.Content style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ width: 100, height: 150, flex: 2, }} onPress={CallOrderDetailsConfirmationScreen}>
              <Text style={{ fontFamily: 'roboto', fontSize: 14, color: '#000000', }}>Biryaani</Text>
              <Text style={{ fontFamily: 'roboto', fontSize: 12, color: '#000000', }}>Price</Text>
              <Text style={{ fontFamily: 'roboto', fontSize: 10, color: '#000000', }}>Quantity</Text>
              {/* <Text style = {{fontFamily: 'roboto', fontSize: 14, color: '#dedede'}}>You ordered it from username, on 12:30 am</Text> */}
              <NewOrder />

            </View>
            <View style={{ width: 100, height: 150, flex: 1, }}>
              <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImageOrderPageOrderPage} />
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.orderlist}>
          <Card.Content style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ width: 100, height: 150, flex: 2, }}>
              <Text style={{ fontFamily: 'roboto', fontSize: 20, color: '#000000' }}>Biryaani</Text>
              <Text style={{ fontFamily: 'roboto', fontSize: 14, color: '#dedede' }}>You ordered it from username, on 12:30 am</Text>

            </View>
            <View style={{ width: 100, height: 150, flex: 1, }}>
              <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImageOrderPage} />
            </View>
          </Card.Content>
        </Card>


        <Card style={styles.orderlist}>
          <Card.Content style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ width: 100, height: 150, flex: 2, }}>
              <Text style={{ fontFamily: 'roboto', fontSize: 20, color: '#000000' }}>Biryaani</Text>
              <Text style={{ fontFamily: 'roboto', fontSize: 14, color: '#dedede' }}>You ordered it from username, on 12:30 am</Text>
              <View></View>
            </View>
            <View style={{ width: 100, height: 150, flex: 1, }}>
              <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImageOrderPage} />
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.orderlist}>
          <Card.Content style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ width: 100, height: 150, flex: 2, }}>
              <Text style={{ fontFamily: 'roboto', fontSize: 20, color: '#000000' }}>Biryaani</Text>
              <Text style={{ fontFamily: 'roboto', fontSize: 14, color: '#dedede' }}>You ordered it from username, on 12:30 am</Text>

            </View>
            <View style={{ width: 100, height: 150, flex: 1, }}>
              <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImageOrderPage} />
            </View>
          </Card.Content>
        </Card>


      </ScrollView>
    </View>

  )

}



export default OrdersApproval;
