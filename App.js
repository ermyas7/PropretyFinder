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
import SearchResults from './SearchResults';



const App = createStackNavigator({
 HOME: {
   screen: SearchPage
 },
 Results: {
   screen: SearchResults
 } 
});

export default createAppContainer(App);