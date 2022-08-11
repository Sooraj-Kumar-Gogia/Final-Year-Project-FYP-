import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import { Button, Card } from "react-native-paper";
import { ApprovalTag, NotApprovedTag } from '../../components/StatusTag';
import styles from '../../style/ExternalStyle';




const OrdersUser = () => {

  return (

   
    <View>
      <ScrollView>
        <Card style={styles.orderlist}>
          <Card.Content style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ width: 100, height: 150, flex: 2,}}>
              <Text style = {{fontFamily: 'roboto', fontSize: 20, color: '#000000', }}>Biryaani</Text>
              <Text style = {{fontFamily: 'roboto', fontSize: 14, color: '#dedede'}}>You ordered it from username, on 12:30 am</Text>
              <View><ApprovalTag/></View>
              
            </View>
            <View style={{ width: 100, height: 150, flex: 1, }}>
              <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImageOrderPageOrderPage} />
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.orderlist}>
          <Card.Content style={{ flex: 1, flexDirection: 'row', }}>
            <View style={{ width: 100, height: 150, flex: 2, }}>
              <Text style = {{fontFamily: 'roboto', fontSize: 20, color: '#000000'}}>Biryaani</Text>
              <Text style = {{fontFamily: 'roboto', fontSize: 14, color: '#dedede'}}>You ordered it from username, on 12:30 am</Text>
              <View><ApprovalTag/></View>
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
        </Card>


      </ScrollView>
    </View>

  )

}




export default OrdersUser;
