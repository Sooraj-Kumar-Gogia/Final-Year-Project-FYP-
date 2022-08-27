import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from '../Screens/User Screens/Signup';
import HomeUser from '../Screens/User Screens/HomeUser';
import OrdersUser from '../Screens/User Screens/OrdersUser';
import Profile from '../Screens/User Screens/PersonalProfileUser';
import Notification from '../Screens/User Screens/Notifications';
import CartScreen from '../Screens/User Screens/Cart';
import Message from '../Screens/User Screens/messages';
import SellerDashboard from '../Screens/Seller Screens/Dashboard';
import SellerNotification from '../Screens/Seller Screens/notifications';
import SellerProfile from '../Screens/Seller Screens/ProfileEdit';
import Orders from '../Screens/Seller Screens/Orders';


const Tab = createBottomTabNavigator();

function UserTab() {
  return(
  // <NavigationContainer>
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={HomeUser} />
      <Tab.Screen name="Messages" component={Message} />
      <Tab.Screen name="Orders" component={OrdersUser} />
      <Tab.Screen name='Notification' component={Notification} />
      <Tab.Screen name='Profile' component={Profile} />
      <Tab.Screen name='Cart' component={CartScreen} />
    </Tab.Navigator>
  // </NavigationContainer>
  )
}

function SellerTab() {
  // <NavigationContainer>
    <Tab.Navigator initialRouteName='Dashboard'>
      <Tab.Screen name="Dashboard" component={SellerDashboard} />
      {/* <Tab.Screen name="Earnings" component={Earnings} /> */}
      <Tab.Screen name="AddProduct" component={AddProduct} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name='Notification' component={SellerNotification} />
      <Tab.Screen name='Profile' component={SellerProfile} />
    </Tab.Navigator>
  // </NavigationContainer>

}


export { UserTab, SellerTab };