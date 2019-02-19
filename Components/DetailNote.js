// Components/ModulePlace.js

import React from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableRipple } from 'react-native-paper';

class ModulePlace extends React.Component {
	render() {
		let item = this.props.navigation.getParam('data')
		return (
			<View style={styles.main_container}>
				<Text>Glycemie : {item.Glycemie}</Text>
				<Text>Glucide : {item.Glycemie}</Text>
				<Text>Insuline a jeun : {item.Glycemie}</Text>
				<Text>Insuline avant repas : {item.Glycemie}</Text>
				<Text>Insuline après repas : {item.Glycemie}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1, 
		justifyContent: "center", 
		alignItems: "center"
	},
})

export default ModulePlace;