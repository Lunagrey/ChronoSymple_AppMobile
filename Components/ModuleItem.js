// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class ModuleItem extends React.Component {

  render() {
    console.log('In module item')
    console.log(this.props);
    const { module, _addModule } = this.props
    return (
      <TouchableOpacity
        style={styles.main_container}
        onPress={() => _addModule(module.id)}>
        <Text>{module.name}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  content_container: {
    flex: 1,
    margin: 5
  },
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  module: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 3,
		borderColor: '#62BE87',
		borderRadius: 0.5,
		padding: 30
	}
})

export default ModuleItem