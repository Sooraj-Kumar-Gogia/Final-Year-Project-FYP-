// import react from "react";
import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button, Card } from "react-native-paper";
import {NavigationContainer, useNavigation } from '@react-navigation/native';
import ProductDisplay from './ProductDisplay';
import styles from '../../style/ExternalStyle';
// import Navigation from '../../components/Navigation';

const CallProductScreen =()=>{
  navigation.navigate('ProductDisplay')
  }



  // const CallNavScreen =()=>{
  //   navigation.navigate('Navigation')
  //   }

const HomeUser = () => {
navigation = useNavigation()
  return (
    <View>
      {/* <Navigation/> */}
      <ScrollView>
        <Card style={styles.banner}>
          <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/Banner/banner.jpg')} style={styles.ProductImage} />
        </Card>

        <Text style={styles.Heading}>Popular Dishes</Text>
        <Card style={styles.productcatalog} onPress={CallProductScreen}>
          <View>
            <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImage} />
            <Card.Title title="Product Name here" subtitle="Card Subtitle like Category" />
            <Card.Content>
              <Text>Descriptione here</Text>
            </Card.Content>
          </View>
        </Card>

        <Card style={styles.productcatalog} onPress={CallProductScreen}>
          <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImage} />
          <Card.Title title="Product Name here" subtitle="Card Subtitle like Category" />
          <Card.Content>
            <Text>Descriptione here</Text>
          </Card.Content>
        </Card>

        <Card style={styles.productcatalog} onPress={CallProductScreen}>
          <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImage} />
          <Card.Title title="Product Name here" subtitle="Card Subtitle like Category" />
          <Card.Content>
            <Text>Descriptione here</Text>
          </Card.Content>
        </Card>

        <Card style={styles.productcatalog} onPress={CallProductScreen}>
          <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImage} />
          <Card.Title title="Product Name here" subtitle="Card Subtitle like Category" />
          <Card.Content>
            <Text>Descriptione here</Text>
          </Card.Content>
        </Card>


      </ScrollView>
    </View>



  )

}




export default HomeUser;


