import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import Footer from "./components/Footer";
import {} from 'react-native-maps'

const signup = () => {
  return (
    <View>

      <Image source={require('C:\Users\ICT\Desktop\React\myproject\src\illustrations\message.png')} style={{width: 100, height: 100, alignSelf: 'center', paddingTop: 70}}/>
      <View> {/*User must see the messages here dynamically*/}</View>
  
    </View>

  )

}




const style = StyleSheet.create(
  {

    TextBox: {
      borderColor: 'lightgrey',
      borderWidth: 1,
      padding: 10,
      marginHorizontal: 20,
      marginVertical: 15,
      textAlignVertical: 'center',
      backgroundColor: '#DEDEDE',
      borderRadius: 5,
    },


    Heading: {
      fontSize: 30,
      color: 'darkblue',
      fontFamily: 'Poppins',
      alignSelf: 'center',
    },

    button: {
      width: "90%",
      marginHorizontal: 20,
      marginBottom: 20,
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "orange",


    },

    Container: {
      flex: 1,
      flexDirection: 'column',
    },

    FullScreenRectangle: {
      width: "90%",
      marginHorizontal: 20,
      marginBottom: 20,
      borderRadius: 10,
      height: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "orange",
    },
    productcatalog: {
      width: "90%",
      marginHorizontal: 20,
      marginBottom: 20,
      borderRadius: 10,
      height: 150,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "yellow",
    }



  }
)



export default signup;


