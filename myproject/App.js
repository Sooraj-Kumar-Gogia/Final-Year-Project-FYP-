import * as React from 'react';
import Login from './Screens/User Screens/Login';
import HomeUser from './Screens/User Screens/HomeUser';
import Signup from './Screens/User Screens/Signup';
import Signup1 from './Screens/User Screens/Signup1';
import ProductDisplay from './Screens/User Screens/ProductDisplay';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SellerSignup from './Screens/Seller Screens/Signup_Seller';
import SellerSignup2 from './Screens/Seller Screens/SignupSeller2';
import Bill from './Screens/User Screens/Bill';
import Thankyou from './Screens/User Screens/Thankyou';
import { UserTab } from './components/Navigation';
import { SellerTab } from './components/Navigation';
import AddProduct from './Screens/Seller Screens/AddProduct';
import SellerDashboard from './Screens/Seller Screens/Dashboard';
import OrdersApproval from './Screens/Seller Screens/OrderApproval';
import OrderDetailsConfirmation from './Screens/Seller Screens/OrderDetailsConfirmation';
import Orders from './Screens/Seller Screens/Orders';
import CompleteOrder from './Screens/User Screens/CompleteOrder';


const Stack = createStackNavigator();

function UserStack() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={UserTab} />
      <Stack.Screen name="Dashboard" component={SellerTab} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signup1" component={Signup1} />
      <Stack.Screen name="SellerSignup" component={SellerSignup} />
      <Stack.Screen name="SellerSignup2" component={SellerSignup2} /> 
      <Stack.Screen name="OrderApproval" component={OrdersApproval} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="OrderDetailsConfirmation" component={OrderDetailsConfirmation} />
      <Stack.Screen name="ProductDisplay" component={ProductDisplay} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="CompleteOrder" component={CompleteOrder} />
      <Stack.Screen name="Bill" component={Bill} />
    </Stack.Navigator>

  );
} 


// function SellerStack() {
//   return (
//     <Stack.Navigator initialRouteName='Dashboard' screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="Dashboard" component={SellerDashboard} />
//       <Stack.Screen name="Add Product" component={AddProduct} />
//       <Stack.Screen name="Add Product2" component={AddProduct2} />
//     </Stack.Navigator>

//   );
// }




const App = () => {
  return (
    <NavigationContainer > 
      <UserStack />
      {/* <OrdersApproval/> */}
      {/* <ProductDisplay/> */}
      {/* <OrderDetailsConfirmation/> */}
      {/* <SellerTab /> */}
      {/* <SellerStack/> */}
      {/* <SellerDashboard/> */}
      {/* <UserTab/> */}
      {/* UserTab(); */}
      {/* SellerTab(); */}
      {/* <HomeUser/> */}
      {/* <Signup1></Signup1> */}
      {/* <AddProduct/> */}
      {/* <CompleteOrder/> */}
    </NavigationContainer>
  )
}

export default App;