import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard, Login, Analytics, Customer, Products} from '../screens';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator initialRouteName={Login}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Analytics"
        component={Analytics}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Customer"
        component={Customer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Router;
