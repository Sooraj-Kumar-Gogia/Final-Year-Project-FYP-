import { StyleSheet } from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

const styles = StyleSheet.create(
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
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "orange",


    },

    rejectbutton:
    {
      width: "90%",
      marginHorizontal: 20,
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "grey",
    },

    ProductDisplayImage: {
      width: '100%',
      height: '50%',
      alignContent: 'center',
      justifyContent: 'center',

    },

    Container: {
      flex: 1,
      flexDirection: 'column',
    },

    UserProfileImage: {
      borderRadius: 60,
      width: 120,
      height: 120,
      alignContent: 'center',
      alignSelf: 'center',
      marginTop: 50,
    },

    productcatalog: {
      margin: 20,
      flexDirection: 'row',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      overflow: 'hidden',

    },
    ProductImage: {
      width: 400,
      height: 250,
      alignSelf: 'center',
      paddingTop: 10,
      alignContent: 'center',
      margin: 20,
      // borderColor: 'fefefe',
      // borderRightWidth: 2,
    },

    banner: {
      height: 200,
      overflow: 'hidden',
    },

    orderlist: {
      height: 120,
      flex: 1,
      flexDirection: 'column',
      overflow: 'hidden',
      borderColor: '#00000',

    },

    ProductImageOrderPage: {
      width: 150,
      height: 70,
      alignSelf: 'center',
      flex: 1,
      flexDirection: 'column',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      alignContent: 'center',
    },

    NameHeading: {
      fontSize: 30,
      color: 'darkblue',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      padding: 10,
    },

    Price: {
      fontSize: 25,
      color: 'orange',
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      paddingLeft: 10,
    },

    Description: {
      fontSize: 16,
      fontFamily: 'Poppins',
      padding: 10,
      justifyContent: 'center',
      textAlign: 'justify',
      margin: 10,

    },

    circle:
    {
      // borderRadius: 100,
      // color: 'white',
      // backgroundColor: 'orange',
      // width: 10,
      // height: 30,
      // fontSize: 20,
      // alignContent: 'center',
      // justifyContent: 'center',

      width: 25,
      height: 25,
      borderRadius: 56 / 2,
      backgroundColor: 'orange',
      padding: 20,
      paddingLeft: 20,

    },
    CartItemImage: {
      borderRadius: 10,
      width: 120,
      height: 120,

    },
    ProductNameCart: {
      fontSize: 20,
      color: 'black',
      fontFamily: 'Poppins',
      padding: 10,
    },

    SellerDashboardCards:
    {
      borderRadius: 30,
      width: '80%',
      height: 100,
      alignSelf: 'center',
      backgroundColor: 'orange',
      color: 'white',
      alignContent: 'center',
    },

    RightSideCard: {
      borderRadius: 30,
      width: '50%',
      height: 100,
      alignSelf: 'flex-start',
      backgroundColor: 'orange',
      color: 'white',
      alignContent: 'center',
      paddingTop: 20,
    },
    LeftSideCard: {
      borderRadius: 30,
      width: '40%',
      height: 100,
      alignSelf: 'flex-end',
      backgroundColor: 'orange',
      color: 'white',
      alignContent: 'center',
      paddingTop: 20,
    },

    ProductDescription: {
      borderColor: 'lightgrey',
      borderWidth: 1,
      padding: 10,
      marginHorizontal: 20,
      marginVertical: 15,
      textAlignVertical: 'center',
      backgroundColor: '#DEDEDE',
      borderRadius: 5,
      height: 200,
      alignContent: 'flex-start',
    },


  }




















































)

export default styles;