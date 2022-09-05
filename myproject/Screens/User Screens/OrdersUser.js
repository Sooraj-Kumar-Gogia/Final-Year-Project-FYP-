// import { useNavigation } from '@react-navigation/native/lib/typescript/src';
import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Button, Card } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { ApprovalTag, NotApprovedTag } from '../../components/StatusTag';
import { useState } from 'react';
import styles from '../../style/ExternalStyle';
import CompleteOrder from './CompleteOrder';

const CallCompleteOrder = () => {
  navigation.navigate('CompleteOrder');
}


const OrdersUser = ({ route }) => {
  navigation = useNavigation();
  const userId = route.params.userId;
  const [data, setData] = useState([]);

  React.useEffect(() => {
    fetch(`http://10.0.2.2:3000/fetchordersbyuserid/${userId}`)
      .then((res) => res.json())
      .then(data => {
        setData(data);
      })

    if (data.length > 0) {
      setLoading(false)
      console.log(data)
    }
    else { console.log("No orders to show") }

  }, [])

  return (


    <View>
      <ScrollView>

        {data.map((item, ndx) => (
          <View>
            <Card style={styles.orderlist} onPress={CallCompleteOrder} key={ndx}>
              <Card.Content style={{ flex: 1, flexDirection: 'row', }}>
                <View style={{ width: 100, height: 150, flex: 2, }}>
                  <Text style={{ fontFamily: 'Poppins', fontSize: 20, color: '#000000' }}>{item.name}</Text>
                  <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: '#dedede' }}>{item.price}</Text>
                  <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: '#dedede' }}>x{item.quantity}</Text>
                  <View><ApprovalTag /></View>
                </View>
                <View style={{ width: 100, height: 150, flex: 1, }}>
                  <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImageOrderPage} />
                </View>
              </Card.Content>
            </Card>


          </View>
        ))}




        {/* <Card style={styles.orderlist}>
          <Card.Content style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ width: 100, height: 150, flex: 2, }}>
              <Text style = {{fontFamily: 'roboto', fontSize: 20, color: '#000000'}}>Biryaani</Text>
              <Text style = {{fontFamily: 'roboto', fontSize: 14, color: '#dedede'}}>You ordered it from username, on 12:30 am</Text>
              <View><NotApprovedTag/></View>
            </View>
            <View style={{ width: 100, height: 150, flex: 1, }}>
              <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImageOrderPage} />
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.orderlist}>
          <Card.Content style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ width: 100, height: 150, flex: 2, }}>
              <Text style = {{fontFamily: 'roboto', fontSize: 20, color: '#000000'}}>Biryaani</Text>
              <Text style = {{fontFamily: 'roboto', fontSize: 14, color: '#dedede'}}>You ordered it from username, on 12:30 am</Text>
              <NotApprovedTag/>
            </View>
            <View style={{ width: 100, height: 150, flex: 1, }}>
              <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImageOrderPage} />
            </View>
          </Card.Content>
        </Card> */}


      </ScrollView>
    </View>

  )

}




export default OrdersUser;
