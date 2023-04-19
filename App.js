import { StyleSheet, Text, View } from 'react-native';
import We from './Screens/We';
import Donate from './Screens/Donate';
import Find from './Screens/Find';
import Earn from './Screens/Earn';
import Cash from './Screens/Cash';
import SignUp from './Screens/SignUp';
import SignIn from './Screens/SignIn';
import Things from './Screens/Things';
import Home from './Screens/Home';
import Locate from './Screens/Locate';
import Card from './Screens/Card';
import Account from './Screens/Account';
import { useFonts  } from 'expo-font';
import React, { useEffect } from 'react';
import * as Splashscreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons'

// install splashscreen (npx expo install expo-splash-screen)
// install react navigation (npm install @react-navigation/native)
// install react stack (npm install @react-navigation/native-stack)

const Stack = createNativeStackNavigator();





export default function App() {
  const [fontsLoaded] = useFonts({
    'kanit-bold': require('./assets/fonts/Kanit-Bold.ttf'),
    'kanit-medium': require('./assets/fonts/Kanit-Medium.ttf'),
    'kanit-regular': require('./assets/fonts/Kanit-Regular.ttf')
  });

  useEffect(() => {
    async function prepare () {
      await Splashscreen.preventAutoHideAsync(); 
    }
    prepare();
  }, [])

if(!fontsLoaded) {
  return undefined;
} else {
  Splashscreen.hideAsync();
}


return (

   <NavigationContainer>
         <Stack.Navigator>
    <Stack.Screen
     name='We'
     component={We}
     options={{ headerShown: false}}
     />
     <Stack.Screen
      name='Donate'
      component={Donate} 
      options={{ headerShown: false}}         
      />
      <Stack.Screen
      name='Find'
      component={Find}
      options={{ headerShown: false}}
       />
       <Stack.Screen
      name='Earn'
      component={Earn}
      options={{ headerShown: false}}
       />
        <Stack.Screen
      name='Cash'
      component={Cash}
      options={{ headerShown: false}}
       />
         <Stack.Screen
      name='SignUp'
      component={SignUp}
      options={{ headerShown: false}}
       />
         <Stack.Screen
      name='SignIn'
      component={SignIn}
      options={{ headerShown: false}}
       />
         <Stack.Screen
      name='Things'
      component={Things}
      options={{ headerShown: false}}
       />
       <Stack.Screen
      name='Home'
      component={Home}
      options={{ headerShown: false}}
       />
       <Stack.Screen
      name='Locate'
      component={Locate}
      options={{ headerShown: false}}
       />
        <Stack.Screen
      name='Card'
      component={Card}
      options={{ headerShown: false}}
       />
         <Stack.Screen
      name='Account'
      component={Account}
      options={{ headerShown: false}}
       />
  </Stack.Navigator>
  </NavigationContainer>
  

  
);




}


