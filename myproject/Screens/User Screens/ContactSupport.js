import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'; //Image
import { Button } from "react-native-paper";
import styles from '../../style/ExternalStyle';
import { useState } from 'react';

const ContactSupport = () => {

//   const [data, setData] = useState([]);
//   const user = route.params.userId;

//   React.useEffect(() => {
//     fetch(`http://10.0.2.2:3000/fetchuser/${user}`)
//       .then((res) => res.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       })

//   }, [])

  return (
    <View>
      <ScrollView>
        <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/users/img_avatar.png')} style={styles.UserProfileImage} />
        <Text style={styles.NameHeading}>Contact us</Text>
        <Text style={styles.Price}>Phone # </Text>
        <Text style={styles.Heading} >+923023610522 </Text>
        <Text style={styles.Price}>Email: </Text>
        <Text style={styles.Heading}>sooraj.bcskkf18@iba-suk.edu.pk</Text>
      </ScrollView>
    </View>

  )

}



export default ContactSupport;


