import react from "react";
import * as React from 'react';
import { View, Text, TextInput, ScrollView, Image } from 'react-native';
// import { Button } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";

const HomeUser = () => {

  return (
    <View>
<Text>This is Home for the User Degree</Text>
      {/* <NavigationContainer>
        <AppHeader />

      </NavigationContainer>
      <View style={style.FullScreenRectangle}>Hello</View>
      <Text style={style.Heading}>Dishes for you</Text>
      <ScrollView>
        <View style={style.productcatalog}>
          <Image source={require('./src/dishes/dish1.jpg')}/>
          <Image source={require('./src/dishes/dish2.jpg')}/>
          <Image source={require('./src/dishes/dish3.jpg')}/>
          <Image source={require('./src/dishes/dish4.jpg')}/>
          <Image source={require('./src/dishes/dish5.jpg')}/>
        </View>
      </ScrollView>
      <View style={style.productcatalog}></View>

      <Footer /> */}
    </View>

  )

}




// const style = StyleSheet.create(
//   {

//     TextBox: {
//       borderColor: 'lightgrey',
//       borderWidth: 1,
//       padding: 10,
//       marginHorizontal: 20,
//       marginVertical: 15,
//       textAlignVertical: 'center',
//       backgroundColor: '#DEDEDE',
//       borderRadius: 5,
//     },


//     Heading: {
//       fontSize: 30,
//       color: 'darkblue',
//       fontFamily: 'Poppins',
//       alignSelf: 'center',
//     },

//     button: {
//       width: "90%",
//       marginHorizontal: 20,
//       marginBottom: 20,
//       borderRadius: 10,
//       height: 50,
//       alignItems: "center",
//       justifyContent: "center",
//       backgroundColor: "orange",


//     },

//     Container: {
//       flex: 1,
//       flexDirection: 'column',
//     },

//     FullScreenRectangle: {
//       width: "90%",
//       marginHorizontal: 20,
//       marginBottom: 20,
//       borderRadius: 10,
//       height: 100,
//       alignItems: "center",
//       justifyContent: "center",
//       backgroundColor: "orange",
//     },
//     productcatalog: {
//       width: "90%",
//       marginHorizontal: 20,
//       marginBottom: 20,
//       borderRadius: 10,
//       height: 150,
//       alignItems: "center",
//       justifyContent: "center",
//       backgroundColor: "yellow",
//     }



//   }
// )



export default HomeUser;
