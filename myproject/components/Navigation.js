import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from '../Screens/Signup';
import HomeUser from '../Screens/HomeUser';
import OrdersUser from '../Screens/OrdersUser';
import Profile from '../Screens/PersonalProfileUser';
import Notification from '../Screens/Notifications';
import CartScreen from '../Screens/Cart';

function HomeScreen() 
{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function Faltu() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Faltu!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen name="Signup" component={Signup} />
        <Tab.Screen name="Home" component={HomeUser} />
        <Tab.Screen name="Orders" component={OrdersUser} />
        <Tab.Screen name='Profile' component={Profile} />
        <Tab.Screen name='Profile' component={Notification} />
        <Tab.Screen name='Profile' component={CartScreen} />
        
        
      </Tab.Navigator>

    </NavigationContainer>
  );
}
