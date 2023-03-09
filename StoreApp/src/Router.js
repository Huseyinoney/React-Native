import React from 'react';
import { SafeAreaView,Text } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Products from "./pages/Products";
import Detail from './pages/Detail';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "ProductPage" component = {Products} options = {{
          title:"Dükkan",
          headerTitleAlign:'center',
          headerStyle:{backgroundColor:"#64b5f6"},
          headerTitleStyle:{color:"white"},
          headerTintColor:"white"
        }} />
        <Stack.Screen  name = "DetailPage" component = {Detail} options = {{
          title:"Detail",
          headerTitleAlign:'center',
          headerStyle:{backgroundColor:"#64b5f6"},
          headerTitleStyle:{color:"white"},
          headerTintColor:"white"
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;