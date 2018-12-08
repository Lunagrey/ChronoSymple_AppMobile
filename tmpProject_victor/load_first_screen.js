import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, Text, View} from 'react-native';

export default class App extends React.Component {
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
});