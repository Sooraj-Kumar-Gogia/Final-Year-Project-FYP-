// import react from "react";
import * as React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Button, Card } from "react-native-paper";
import styles from "../../style/ExternalStyle";

const HomeUser = () => {

  return (
    <View>
      <ScrollView>
        <Card style={styles.banner}>
          <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/Banner/banner.jpg')} style={styles.ProductImage} />
        </Card>

        <Text style={styles.Heading}>Popular Dishes</Text>
        <Card style={styles.productcatalog}>
          <View>
            <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImage} />
            <Card.Title title="Product Name here" subtitle="Card Subtitle like Category" />
            <Card.Content>
              <Text>Descriptione here</Text>
            </Card.Content>
          </View>
        </Card>

        <Card style={styles.productcatalog}>
          <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImage} />
          <Card.Title title="Product Name here" subtitle="Card Subtitle like Category" />
          <Card.Content>
            <Text>Descriptione here</Text>
          </Card.Content>
        </Card>

        <Card style={styles.productcatalog}>
          <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImage} />
          <Card.Title title="Product Name here" subtitle="Card Subtitle like Category" />
          <Card.Content>
            <Text>Descriptione here</Text>
          </Card.Content>
        </Card>

        <Card style={styles.productcatalog}>
          <Image source={require('C:/Users/ICT/Desktop/React/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg')} style={styles.ProductImage} />
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


