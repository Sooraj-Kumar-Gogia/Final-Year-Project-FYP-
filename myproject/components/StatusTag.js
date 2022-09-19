import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';


const ApprovalTag  = () => {
    return(
    <View style={{backgroundColor: 'orange', height: 20, width: 90, alignContent: 'center', borderRadius: 10,}}><Text style={{color: 'black', alignSelf: 'center'}}>APPROVED</Text></View>
    )
  }
  

const NotApprovedTag = () => {
  return (
    <View style={{backgroundColor: 'red', height: 20, width: 120, alignContent: 'center', borderRadius: 10,}}><Text style={{color: 'black', alignSelf: 'center'}}>PENDING</Text></View>
  )

}

const NewOrder = () => {
  return (
    <View style={{backgroundColor: 'green', height: 20, width: 120, alignContent: 'center', borderRadius: 10,}}><Text style={{color: 'white', alignSelf: 'center'}}>NEW ORDER</Text></View>
  )

}


export  {NotApprovedTag, ApprovalTag, NewOrder} ;


