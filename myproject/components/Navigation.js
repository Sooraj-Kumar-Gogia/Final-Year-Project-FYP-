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
import AddProduct from '../Screens/Seller Screens/AddProduct';
import OrdersApproval from '../Screens/Seller Screens/OrderApproval';
import OrderDetailsConfirmation from '../Screens/Seller Screens/OrderDetailsConfirmation';
import ProductDisplay from '../Screens/User Screens/ProductDisplay';
import AdminDashboard from '../Screens/Admin Screens/Admin_Dashboard';
import ComplainsAdmin from '../Screens/Admin Screens/ComplainsAdmin';
import DeleteUserAdmin from '../Screens/Admin Screens/DeleteUserAdmin';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PendingOrdersUser from '../Screens/User Screens/PendingOrdersUser';
import MyStore from '../Screens/Seller Screens/MyStore';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/'


const Tab = createBottomTabNavigator();

function UserTab({ route }) {
  const userId = route.params.userId;
  console.log("I am at Navigation Screen ", userId);
  return (
    // <NavigationContainer>
    <Tab.Navigator initialRouteName='Home' initialParams={{ userId: userId }}>
      <Tab.Screen name="Home" component={HomeUser} initialParams={{ userId: userId }} />
      <Tab.Screen name="Orders" component={OrdersUser} initialParams={{ userId: userId }} />
      <Tab.Screen name="PendingOrders" component={PendingOrdersUser} initialParams={{ userId: userId }} />
      {/* <Tab.Screen name='Notification' component={Notification} /> */}
      <Tab.Screen name='Profile' component={Profile} initialParams={{ userId: userId }} />
    </Tab.Navigator>
    // </NavigationContainer>
  )
}

function SellerTab({ route }) {
  const userId = route.params.userId;
  console.log(userId);
  return (
    // <NavigationContainer>
    <Tab.Navigator initialRouteName='Dashboard' initialParams={{ userId: userId }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') {
            // iconName = focused ? 'home' : 'home';
            iconName = 'home';
            size = focused ? 25 : 20;
          } else if (route.name === 'Orders') {
            // iconName = focused ? 'shopping-cart' : 'shopping-cart';
            iconName = 'shopping-cart'
          } else if (route.name === 'AddProduct') {
            // iconName = focused ? 'plus' : 'plus';
            iconName = 'plus'
          } else if (route.name === 'MyStore') {
            iconName = focused ? 'store' : 'store';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }
          return <Icon name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
        showIcon: true,
        labelstyle: {fontSize: 12},
      }}
    >
      <Tab.Screen name="Dashboard" component={SellerDashboard} initialParams={{ userId: userId }} />
      <Tab.Screen name="OrdersApproval" component={OrdersApproval} initialParams={{ userId: userId }} />
      <Tab.Screen name="MyStore" component={MyStore} initialParams={{ userId: userId }} />
      <Tab.Screen name="AddProduct" component={AddProduct} initialParams={{ userId: userId }} />
      <Tab.Screen name="Orders" component={Orders} initialParams={{ userId: userId }} />
      <Tab.Screen name='Profile' component={SellerProfile} initialParams={{ userId: userId }} />
    </Tab.Navigator>
    //  </NavigationContainer>
  )

}

function AdminTab({ route }) {
  const userId = route.params.userId;
  console.log(userId);
  return (
    // <NavigationContainer>
    <Tab.Navigator initialRouteName='AdminDashboard' initialParams={{ userId: userId }}>
      <Tab.Screen name="AdminDashboard" component={AdminDashboard} initialParams={{ userId: userId }} />
      <Tab.Screen name="DeleteUserAdmin" component={DeleteUserAdmin} initialParams={{ userId: userId }} />
      <Tab.Screen name="ComplainsAdmin" component={ComplainsAdmin} initialParams={{ userId: userId }} />
    </Tab.Navigator>
    //  </NavigationContainer>
  )

}




export { UserTab, SellerTab, AdminTab };