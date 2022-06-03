import * as React from 'react';
import Login from './Screens/User Screens/Login';
import HomeUser from './Screens/User Screens/HomeUser';
import Signup from './Screens/User Screens/Signup';
import Signup1 from './Screens/User Screens/Signup1';
import Signup2 from './Screens/User Screens/Signup2';
import CartScreen from './Screens/User Screens/Cart';
import ProductDisplay from './Screens/User Screens/ProductDisplay';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bill from './Screens/User Screens/Bill';
import Thankyou from './Screens/User Screens/Thankyou';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeUser} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signup1" component={Signup1} />
      <Stack.Screen name="Signup2" component={Signup2}/>  
      <Stack.Screen name="ProductDisplay" component={ProductDisplay}/>  
      <Stack.Screen name="Cart" component={CartScreen}/> 
      <Stack.Screen name="Bill" component={Bill}/> 
      <Stack.Screen name ="Order Completed"component={Thankyou}/>
    </Stack.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    
  )
}

export default App;