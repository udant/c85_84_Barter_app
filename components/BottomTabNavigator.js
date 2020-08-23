import React from 'react';
import {createBottomTabNavigator,createAppContainer } from "react-navigation"; 
import HomeScreen from "../screens/ExchangeScreen";
import ExchangeScreen from "../screens/ExchangeScreen";

export default BottomTabNavigator=createBottomTabNavigator({
    Home:{screen:HomeScreen},
    Exchange:{screen:ExchangeScreen}
  })
  const AppContainer = createAppContainer(switchNavigator)