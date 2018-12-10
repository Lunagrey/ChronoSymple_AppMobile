import React from 'react';
import { AppRegistry, StyleSheet, Button, Image, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer, NavigationActions, StackAction, navigationOptions} from 'react-navigation';
import HomePage from './HomePage.js';
import ModulePage from './ModulePage.js';

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false
    };
  }

  componentDidMount() {
    setTimeout( () => {
      this.setTimePassed();
    },3000);
  }

  setTimePassed() {
    this.setState({timePassed: true});
  }

  render() {
    if (this.state.timePassed) {
      return this.props.navigation.reset([NavigationActions.navigate({routeName: 'Home'})], 0);
    } else {
      let pic = {
        uri: './gecko.png'
      }
      return (
        <View style={styles.container}>
          <Image source={require('./gecko.png')}/>
          <Text style={[styles.titleText, {color: 'white'}]}>ChronoSymple </Text>
        </View>
      );
    }
  }
}

const Navigation = createStackNavigator({
  Loading: {
    screen: LoadingScreen,
    navigationOptions: {
      header: null
    },
  },
  Home: {
    screen: HomePage,
    navigationOptions: {
      header: null
    },
  },
  Module: {
    screen: ModulePage,
    navigationOptions: {
      header: null
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#62BE87',
    fontSize: 40,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 34,
    fontWeight: 'bold',
    lineHeight: 200,
  },
});

const App = createAppContainer(Navigation);

export default App;