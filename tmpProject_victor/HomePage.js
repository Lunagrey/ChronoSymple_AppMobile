import React, { Component } from 'react';
import { AppRegistry, StyleSheet, StatusBar, Button, Image, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer, StackNavigator, StackAction, navigationOptions} from 'react-navigation';

export default class HomePage extends React.Component {
  render() {
    
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title='Add a Module'
          onPress={() => this.props.navigation.navigate('Module')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
/*<View>
        <Text>Hello World ! :)</Text>
        <Button title='press this button'
        onPress={() => this.props.navigation.reset([NavigationActions.navigate({routeName: 'Acceuil'})], 0)}
        />
      </View>*/
