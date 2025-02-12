import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Length from '../Component/Length';
import Mass from '../Component/Mass';
import Temperature from '../Component/Temperature';
import Login from './Login';
import SignUp from './SignUp';
import Start from './Start';
import ForgotPassword from './ForgotPassword';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="Start" 
          component={Start} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPassword} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
        />
        <Stack.Screen 
          name="Temperature" 
          component={Temperature} 
          options={{ headerShown: true }}           
        />

        <Stack.Screen 
          name="Mass" 
          component={Mass} 
          options={{ headerShown: true }} 
        />
        <Stack.Screen 
          name="Length" 
          component={Length} 
          options={{ headerShown: true }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
