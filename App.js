/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict'; 
import React from 'react';
import {createStackNavigator, createAppContainer,} from 'react-navigation';
import SearchPage from './SearchPage';




const App = createStackNavigator({
 HOME: {
   screen: SearchPage
 } 
});

export default createAppContainer(App);