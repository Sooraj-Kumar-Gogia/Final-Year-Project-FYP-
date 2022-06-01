import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'; //Image
import { Button } from "react-native-paper";
import styles from "../style/ExternalStyle";

const Profile = () => {
  return (
    <View>
      <Image source={require('C:/Users/ICT/Desktop/React/myproject/src/users/img_avatar.png')} style={styles.UserProfileImage} />
    <Text></Text>
      <View style={styles.button}><Text>Personal Information</Text></View>
      <View style ={styles.button}><Text>Notification Settings</Text></View>
      <View style ={styles.button}><Text>Profile Settings</Text></View>
      <View style ={styles.button}><Text>Help and Support</Text></View>
    </View>

  )

}



export default Profile;


