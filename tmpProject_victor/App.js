import React from 'react';
import { AppRegistry, StyleSheet, Button, Image, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer, NavigationActions, StackAction, navigationOptions} from 'react-navigation';

import AcceuilPage from './AcceuilPage.js'
/*
export default class App extends React.Component {
  render() {
    return (
        <Navigation/>
      );
  }
}*/

class LoadingScreen extends React.Component {
  render() {
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

const Navigation = createStackNavigator({
  Loading: {
    screen: LoadingScreen
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
});

const App = createAppContainer(Navigation);

export default App;