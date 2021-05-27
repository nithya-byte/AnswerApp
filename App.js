import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupLogin from './screens/SignupLoginScreen';
import AskScreen from './screens/AskScreen'
import {AppTabNavigator} from './Components/AppTabNavigator';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
}
}
const switchNavigator  = createSwitchNavigator
({SignUp:{screen:SignupLogin},AppContainer:{screen:AppTabNavigator} });
const AppContainer = createAppContainer(switchNavigator);
