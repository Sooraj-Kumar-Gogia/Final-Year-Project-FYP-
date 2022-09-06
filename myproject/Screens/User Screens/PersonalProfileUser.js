import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'; //Image
import { Button } from "react-native-paper";
import styles from '../../style/ExternalStyle';
import { useState } from 'react';
import {useNavigation} from '@react-navigation/native';

const Profile = ({route}) => {

  navigation = useNavigation();
  const [data, setData] = useState([]);
  const user = route.params.userId;

  React.useEffect(() => {
    fetch(`http://10.0.2.2:3000/fetchuser/${user}`)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })

  }, [])

  return (
    <View>
      <ScrollView>
        <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/users/img_avatar.png')} style={styles.UserProfileImage} />
        <Text style={styles.Heading}>{data.name}</Text>
        <Text style={styles.Description}>User ID: {data._id}</Text>
        <Text style={styles.Description} >Email: {data.email} </Text>
        <Text style={styles.Description}>Phone: {data.phone}</Text>
        <Button style={styles.button} onPress={()=>navigation.navigate('ContactSupport')}>Contact Support</Button>
        <Button style={styles.rejectbutton}>Log out</Button>
      </ScrollView>
    </View>

  )

}



export default Profile;


