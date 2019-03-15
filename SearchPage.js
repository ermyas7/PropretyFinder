import React, { Component } from 'react';
import {
    Text, 
    View,
    TextInput,
    Button,
    ActivityIndicator,
    Image,
    StyleSheet,
} from 'react-native';

type Props = {};

class SearchPage extends Component<Props> {
  static navigationOptions =  {
    title: 'Property Finder',
  }
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.description}>
            Search for houses to buy
          </Text>
          <Text stlye={styles.description}>
            Search by place name or post code
          </Text>

          <View style={styles.flowRight}>
            <TextInput 
            underlineColorAndroid={'transparent'}
            style={styles.searchInput}
            placeholder='Search vis place name or post code'/>
            <Button title='Go' onPress={() => {}} color='#48BBEC'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center',
    } , 
    flowRight:{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
  });

export default SearchPage
