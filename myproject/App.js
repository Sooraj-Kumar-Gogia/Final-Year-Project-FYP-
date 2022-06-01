import * as React from 'react';
import Login from './Screens/User Screens/Login';
import HomeUser from './Screens/User Screens/HomeUser';
import { NavigationContainer } from '@react-navigation/native';


function Stack(){
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={HomeUser} />
    </Stack.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  )

}
export default App;