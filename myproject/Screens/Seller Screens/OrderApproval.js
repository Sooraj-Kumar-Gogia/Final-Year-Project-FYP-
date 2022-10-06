import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button, Card } from "react-native-paper";
import styles from '../../style/ExternalStyle';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { NewOrder } from '../../components/StatusTag';
import OrderDetailsConfirmation from './OrderDetailsConfirmation';
import SellerDashboard from './Dashboard';
import { UserTab } from '../../components/Navigation';
import { SellerTab } from '../../components/Navigation';
import Navigation from '../../components/Navigation';
import { useIsFocused } from '@react-navigation/native';




const OrdersApproval = ({ route }) => {
  // Stack = createStackNavigator();
  navigation = useNavigation();
  const isFocused = useIsFocused();
  sellerid = route.params.userId;
  console.log("At Order Approval, seller: ", sellerid);
  const [data, setData] = useState([]);


  React.useEffect(() => {
    fetch(`http://10.0.2.2:3000/fetchunconfirmedorderslist/${sellerid}`)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })


  }, [isFocused])
  console.log(data);

  // const CallOrderDetailsConfirmationScreen = () => {navigation.navigate('OrderDetailsConfirmation', {item_id: data._id});}

  return (

    <View>
      <ScrollView>
        {data.map((item, ndx) => (
          <View key={ndx}>
            <Card style={styles.orderlist} onPress={()=> navigation.navigate("OrderDetailsConfirmation", { item_id: item._id, userId: sellerid }) }>
              <Card.Content style={{ flex: 1, flexDirection: 'row', }}>
                <View style={{ width: 100, height: 150, flex: 2, }} onPress={()=>navigation.navigate('OrderDetailsConfirmation', { item_id: data._id })}>
                  <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: '#000000', }}>{item.name}</Text>
                  <Text style={{ fontFamily: 'Poppins', fontSize: 12, color: '#000000', }}>{item.price}</Text>
                  <Text style={{ fontFamily: 'Poppins', fontSize: 10, color: '#000000', }}>x {item.quantity}</Text>
                  <NewOrder />
                </View>
                <View style={{ width: 100, height: 150, flex: 1, }}>
                  <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImageOrderPageOrderPage} />
                </View>
              </Card.Content>
            </Card>
          </View>
        ))}
      </ScrollView>
    </View>

  )

}



export default OrdersApproval;
