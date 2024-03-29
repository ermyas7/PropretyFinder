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
  constructor(props){
    super(props);
    this.state = {
      searchString: 'london',
      isLoading: false,
      message: '', 
    };
  }

  _onSearchTextChanged = (event) => {
    this.setState({searchString : event.nativeEvent.text});
  }

  _excuteQuery = (query) => {
    this.setState({isLoading: true});
    fetch(query)
    .then((response) => response.json())
    .then((json) => this._handleResponse(json.response))
    .catch((err) => {
      this.setState({
        isLoading:false,
        message: `Something bad hapened ${err}`});
    });
  }

  _handleResponse = (response) => {
    this.setState({
      isLoading: false,
      message: '',
    });
    if(response.application_response_code.substring(0,1) === '1'){
      this.props.navigation.navigate(
        'Results', {listings: response.listings}
      );
    }else{
      this.setState({message: 'Location not recognized Please try again!'});
    }
  }

  _onSearchPressed = () => {
    const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._excuteQuery(query);
  }
  static navigationOptions =  {
    title: 'Property Finder',
  }
  render() {
    const spinner = this.state.isLoading? <ActivityIndicator size='large'/> : null;
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
            placeholder='Search via name or post code'
            value={this.state.searchString}
            onChange={this._onSearchTextChanged}/>
            <Button title='Go' onPress={this._onSearchPressed} color='#48BBEC'/>
        </View>

        <Image source={require('./Resources/house.png')} style={styles.image}/>
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
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
    image: {
      width: 217,
      height: 138,
    },
  });

  //utility function
  function urlForQueryAndPage(key, value, pageNumber) {
    const data = {
        encoding: 'json',
        pretty: '1',
        action: 'search_listings',
        country: 'uk',
        listing_type: 'buy',
        page: pageNumber,

    };
    data[key] = value;
  
    const querystring = Object.keys(data)
      .map(key => key + '=' + encodeURIComponent(data[key]))
      .join('&');
  
    return 'https://api.nestoria.co.uk/api?' + querystring;
  }

export default SearchPage
