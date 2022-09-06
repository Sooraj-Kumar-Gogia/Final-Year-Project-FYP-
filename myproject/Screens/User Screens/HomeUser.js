// import react from "react";
import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button, Card } from "react-native-paper";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ProductDisplay from './ProductDisplay';
import styles from '../../style/ExternalStyle';
// import Navigation from '../../components/Navigation';

const CallProductScreen = () => {
  navigation.navigate('ProductDisplay', { item_id: item._id, item_name: item.name })

}
// const CallNavScreen =()=>{
//   navigation.navigate('Navigation')
//   }

const HomeUser = ({route}) => {
  navigation = useNavigation()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setname] = useState('');
  const [price, setprice] = useState('');
  const user = route.params.userId;


  React.useEffect(() => {
    fetch("http://10.0.2.2:3000/getproducts")
      .then((res) => res.json())
      .then(data => {
        setData(data);
      })

    if (data.length > 0) {
      setLoading(false)
      console.log(data)
    }
    else { console.log("Data 00") }

  }, [])



  return (

    <View>
      <ScrollView>
        <Text style={styles.Heading}>Popular Dishes</Text>
        <Card style={styles.banner}>
          <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/Banner/banner.jpg')} style={styles.ProductImage} resizeMode='contain' />
        </Card>
        {data.map((item, ndx) => (
          <View>
            <Card style={styles.productcatalog} onPress={()=>{navigation.navigate('ProductDisplay', { item_id: item._id, userId: user })}}>
              <View key={ndx}>
                <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImage} />
                <Card.Title title={item.name} subtitle={item._id} />
                <Card.Content>
                  <Text>{item.price}</Text>
                </Card.Content>
              </View>
            </Card>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}




export default HomeUser;


