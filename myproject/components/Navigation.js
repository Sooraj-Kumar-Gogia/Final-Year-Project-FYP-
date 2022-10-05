import * as React from 'react';
import { Text, View, Image } from 'react-native';
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
    <Tab.Navigator initialRouteName='Home' initialParams={{ userId: userId }}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: 'absolute',
          // bottom: 5,
          // left: 20,
          // right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 80,
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeUser} initialParams={{ userId: userId }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              {/* <Icon name="home" size={25} color={focused ? '#e32f45' : '#748c94'} /> */}
              <Image source={require('../src/assets//home.png')} resizeMode="contain" style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : 'grey'
              }} />
              {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Dashboard</Text> */}
            </View>
          )
        }}
      />
      <Tab.Screen name="Orders" component={OrdersUser} initialParams={{ userId: userId }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              {/* <Icon name="home" size={25} color={focused ? '#e32f45' : '#748c94'} /> */}
              <Image source={require('../src/assets//orders.png')} resizeMode="contain" style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : 'grey'
              }} />
              {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Dashboard</Text> */}
            </View>
          )
        }}

      />
      <Tab.Screen name="PendingOrders" component={PendingOrdersUser} initialParams={{ userId: userId }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              {/* <Icon name="home" size={25} color={focused ? '#e32f45' : '#748c94'} /> */}
              <Image source={require('../src/assets//pendingorders.png')} resizeMode="contain" style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : 'grey'
              }} />
              {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Dashboard</Text> */}
            </View>
          )
        }}
      />
      {/* <Tab.Screen name='Notification' component={Notification} /> */}
      <Tab.Screen name='Profile' component={Profile} initialParams={{ userId: userId }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              {/* <Icon name="home" size={25} color={focused ? '#e32f45' : '#748c94'} /> */}
              <Image source={require('../src/assets//profile.png')} resizeMode="contain" style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : 'grey'
              }} />
              {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Dashboard</Text> */}
            </View>
          )
        }}
      />
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
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: 'absolute',
          // bottom: 5,
          // left: 20,
          // right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
        }
      }}
    >
      <Tab.Screen name="Dashboard" component={SellerDashboard} initialParams={{ userId: userId }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              {/* <Icon name="home" size={25} color={focused ? '#e32f45' : '#748c94'} /> */}
              <Image source={require('../src/assets//home.png')} resizeMode="contain" style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : 'grey'
              }} />
              {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Dashboard</Text> */}
            </View>
          )
        }}
      />
      <Tab.Screen name="OrdersApproval" component={OrdersApproval} initialParams={{ userId: userId }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              {/* <Icon name="home" size={25} color={focused ? '#e32f45' : '#748c94'} /> */}
              <Image source={require('../src/assets//pendingorders.png')} resizeMode="contain" style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : 'grey'
              }} />
              {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Order Approval</Text> */}
            </View>
          )
        }}
      />
      <Tab.Screen name="MyStore" component={MyStore} initialParams={{ userId: userId }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              {/* <Icon name="home" size={25} color={focused ? '#e32f45' : '#748c94'} /> */}
              <Image source={require('../src/assets//store.png')} resizeMode="contain" style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : 'grey'
              }} />
              {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>My Store</Text> */}
            </View>
          )
        }}
      />
      <Tab.Screen name="AddProduct" component={AddProduct} initialParams={{ userId: userId }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              {/* <Icon name="home" size={25} color={focused ? '#e32f45' : '#748c94'} /> */}
              <Image source={require('../src/assets//add.png')} resizeMode="contain" style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : 'grey'
              }} />
              {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Add Product</Text> */}
            </View>
          )
        }}
      />
      <Tab.Screen name="Orders" component={Orders} initialParams={{ userId: userId }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              {/* <Icon name="home" size={25} color={focused ? '#e32f45' : '#748c94'} /> */}
              <Image source={require('../src/assets//orders.png')} resizeMode="contain" style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : 'grey'
              }} />
              {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Orders</Text> */}
            </View>
          )
        }}
      />
      <Tab.Screen name='Profile' component={SellerProfile} initialParams={{ userId: userId }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              {/* <Icon name="home" size={25} color={focused ? '#e32f45' : '#748c94'} /> */}
              <Image source={require('../src/assets//profile.png')} resizeMode="contain" style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : 'grey'
              }} />
              {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Profile</Text> */}
            </View>
          )
        }}
      />
    </Tab.Navigator>
    //  </NavigationContainer>
  )

}

function AdminTab({ route }) {
  const userId = route.params.userId;
  console.log(userId);
  return (
    // <NavigationContainer>
    <Tab.Navigator initialRouteName='AdminDashboard' initialParams={{ userId: userId }}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: 'absolute',
          // bottom: 5,
          // left: 20,
          // right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 80,
        }

      }}
    >
      <Tab.Screen name="AdminDashboard" component={AdminDashboard} initialParams={{ userId: userId }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              {/* <Icon name="home" size={25} color={focused ? '#e32f45' : '#748c94'} /> */}
              <Image source={require('../src/assets//home.png')} resizeMode="contain" style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : 'grey'
              }} />
              <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Dashboard</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="DeleteUserAdmin" component={DeleteUserAdmin} initialParams={{ userId: userId }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              {/* <Icon name="home" size={25} color={focused ? '#e32f45' : '#748c94'} /> */}
              <Image source={require('../src/assets//profile.png')} resizeMode="contain" style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : 'grey'
              }} />
              {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Delete User</Text> */}
            </View>
          )
        }}

      />
      <Tab.Screen name="ComplainsAdmin" component={ComplainsAdmin} initialParams={{ userId: userId }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              {/* <Icon name="home" size={25} color={focused ? '#e32f45' : '#748c94'} /> */}
              <Image source={require('../src/assets//complain.png')} resizeMode="contain" style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#e32f45' : 'grey'
              }} />
              {/* <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Complains</Text> */}
            </View>
          )
        }}

      />
    </Tab.Navigator>
    //  </NavigationContainer>
  )

}




export { UserTab, SellerTab, AdminTab };