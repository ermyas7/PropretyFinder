'user strict';
import React, { Component } from 'react'
import {
    StyleSheet,
    Image,
    View,
    TouchableHighLight,
    FlatList,
    Text,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export class SearchResults extends Component {
  static navigationOptions = {
      title: 'Results'
  };
  
  _keyExtractor = (item, index) => {
      return index.toString();
  }

  _renderItem = ({item})=>{
      return(
          <TouchableHighlight underlayColor='#dddddd'>
            <View>
                <Text>{item.title}</Text>
            </View>
          </TouchableHighlight>
      )
  }
  render() {
    const {params} = this.props.navigation.state;
    return (
        <FlatList 
        data={params.listings}
         keyExtractor={this._keyExtractor}
         renderItem={this._renderItem}/>
        )
  }
}

export default SearchResults
