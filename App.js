import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import AddToBasketScreen from './screens/AddToBasketScreen';
import OrderListScreen from './screens/OrderListScreen';
import CompleteDetailsScreen from './screens/CompleteDetailsScreen';
import OrderCompleteScreen from './screens/OrderCompleteScreen';
import TrackOrderScreen from './screens/TrackOrderScreen';
import InputCardDetailsScreen from './screens/InputCardDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddToBasket" component={AddToBasketScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OrderList" component={OrderListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CompleteDetails" component={CompleteDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OrderComplete" component={OrderCompleteScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TrackOrder" component={TrackOrderScreen} options={{ headerShown: false }} />
        <Stack.Screen name="InputCardDetails" component={InputCardDetailsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}