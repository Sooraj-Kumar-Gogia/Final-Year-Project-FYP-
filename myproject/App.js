import * as React from 'react';
import Login from './Screens/User Screens/Login';
import HomeUser from './Screens/User Screens/HomeUser';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
  
  
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeUser} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Login><MyStack/></Login>
    
    </NavigationContainer>
  )

}
export default App;