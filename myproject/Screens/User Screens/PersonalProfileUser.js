import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'; //Image
import { Button } from "react-native-paper";
import styles from '../../style/ExternalStyle';

const Profile = () => {
  return (
    <View>
      <ScrollView>
        <Image source={require('C:/Users/Sooraj Gogia/OneDrive/Desktop/React/myproject/Final-Year-Project-FYP-/myproject/src/users/img_avatar.png')} style={styles.UserProfileImage} />
        <Text style={styles.Heading}>Sooraj Kumar</Text>
        <Text style={styles.Description}>User ID: 62fb3292e9bd362e0513252d</Text>
        <Text style={styles.Description} >Email: soorajkumar@yahoo.com </Text>
        <Text style={styles.Description}>Phone: 3023610522</Text>
        <Button style={styles.button}>Contact Support</Button>
        <Button style={styles.rejectbutton}>Log out</Button>
      </ScrollView>
    </View>

  )

}



export default Profile;


