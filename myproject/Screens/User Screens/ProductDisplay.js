import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../style/ExternalStyle';
import CartScreen from './Cart';
import Bill from './Bill';
import { useState } from 'react';
import CounterInput from "react-native-counter-input";




export default ProductDisplay = ({ route }) => {
  navigation = useNavigation();
  const [data, setData] = useState([])

  const productId = route.params.item_id
  
  const [counter, setCounter] = useState(1)
  // const id = mongoose.Types.ObjectId(req.params.viewexp_id);

  const CallCartScreen = () => { navigation.navigate('Bill', { productId: productId }) }

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

  return (

    <View>
      <View>
        <Image source={require("C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/dishes/dish1.jpg")} style={styles.ProductDisplayImage} />
        <Text style={styles.NameHeading}>{data.name}</Text>
        <Text style={styles.Price}>{data.price}</Text>
        <Text style={styles.Description}>{data.description}</Text>
        <CounterInput
          value={counter}
          onChange={(counter) => {
            setCounter(counter)
          }}
        />
        <Button style={styles.button} onPress={CallCartScreen}>Add to HotPot</Button>
      </View>

      {/* <Text>This is Done</Text> */}
      {/* <Text style={{ fontSize: 20, color: 'black' }}>{data.name}</Text> */}
      {/* <Text>{data}</Text> */}

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
