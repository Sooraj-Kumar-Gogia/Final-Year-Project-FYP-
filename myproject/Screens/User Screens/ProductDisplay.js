import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import CartScreen from './Cart';
import { useState } from 'react';


const CallCartScreen = () => { navigation.navigate('Cart') }

export default ProductDisplay = ({ route }) => {
  navigation = useNavigation();
  const [productdata, setData] = useState([])
  const productId = route.params.item_id

  console.log(productId);
  console.log(productdata)


  React.useEffect(() => {
    try {
      console.log(productId)
      console.log("I am in try block")
      fetch('http://10.0.2.2:3000/getproducts/${productId}')
        .then(
          // (res) => res.json()
          (res) => {
            console.log(res)
            console.log("I am in there after raw datablock")
            data= res.json()
            console.log(data)
          }
          )
        // .then(data => {
        //   console.log(data);
        //   setData(data);
        //   console.log(data.name)
        // })
    }
    catch (error) {

      console.log("couldn't fetch data from your API Sooraj!")
      console.log(error);
    }
  }, [])

  return (

    <View>

      {/* {productdata.map((item, ndx) => (
        <View key={ndx}>
          <Image source={require("C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg")} style={styles.ProductDisplayImage} />
          <Text style={styles.NameHeading}>item.name</Text>
          <Text style={styles.Price}>item.price</Text>
          <Text style={styles.Description}>item.description</Text>
          <Button style={styles.button} onPress={CallCartScreen}>Add to HotPot</Button>
        </View>
      ))} */}
      <Text>This is Done</Text>
      {/* <Text style={{ fontSize: 20, color: 'black' }}>{productdata.name}</Text> */}

    </View>


    // <View>
    //   <Image source={require("C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg")} style={styles.ProductDisplayImage} />
    //   <Text style={styles.NameHeading}>productdata.name</Text>
    //   <Text style={styles.Price}>productdata.price</Text>
    //   <Text style={styles.Description}>productdata.description</Text>
    //   <Button style={styles.button} onPress={CallCartScreen}>Add to HotPot</Button>
    // </View>



  )
}

// export default ProductDisplay;
