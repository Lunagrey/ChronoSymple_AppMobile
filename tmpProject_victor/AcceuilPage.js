import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer, StackNavigator, StackAction, navigationOptions} from 'react-navigation';


export default class AcceuilPage extends React.Component {
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
});<View>
        <Text>Hello World ! :)</Text>
        <Button title='press this button'
        onPress={() => this.props.navigation.reset([NavigationActions.navigate({routeName: 'Acceuil'})], 0)}
        />
      </View>