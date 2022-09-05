import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import Bill from './Bill';
import { useState } from 'react';
import CounterInput from "react-native-counter-input";
import { useEffect } from 'react';
import FillOrderForm from './FillOrderForm';





export default ProductDisplay = ({ route }) => {
  navigation = useNavigation();
  const [data, setData] = useState([])

  const productId = route.params.item_id
  const userId = route.params.userId;
  
  const [counter, setCounter] = useState(1)
  // const id = mongoose.Types.ObjectId(req.params.viewexp_id);

  console.log(productId);
  console.log(data)


  React.useEffect(() => {
    try {
      console.log(productId)
      console.log("I am in try block")
      fetch(`http://10.0.2.2:3000/fetchtproduct/${productId}`)
        .then((res) => res.json())
        .then(data => {
          console.log(typeof (data))
          console.log(data);
          setData(data);
          console.log(data.name)
        })
    }
    catch (error) {

      console.log("couldn't fetch data from your API Sooraj!")
      console.log(error);
    }
  }, [])


  const CallFillOrderForm = () => { navigation.navigate('FillOrderForm', { productId: productId, productname: data.name, price: data.price, quantity: counter, sellerId: data.sellerid, userid: userId  }) }


  return (

    <View>
      <View>
        
        <Image source={require("C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg")} style={styles.ProductDisplayImage} />
        <Text style={styles.NameHeading}>{data.name}</Text>
        <Text style={styles.Price}>{data.price}</Text>
        <Text style={styles.Description}>{data.description}</Text>
        <CounterInput style={{width: 150, height: 70, marginLeft: 20,}} horizontal={true}
          value={counter}
          onChange={(counter) => {
            setCounter(counter)
          }}
        />
        <Button style={styles.button} onPress={CallFillOrderForm}>ORDER NOW</Button>
      </View>

    </View>





  )
}

// export default ProductDisplay;
