// Components/ModulePlace.js

import React from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableRipple } from 'react-native-paper';

class ModulePlace extends React.Component {
	_searchModule = () => {
		console.log('faire le filtre ici')
	}

	render() {
	let { navigate } = this.props.navigation;
		return (
			<View style={styles.main_container}>
				<Text>JE SUIS UNE NOTE</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1
	},
	search: { 
		flex: 1,
		flexDirection: 'row',
		height: 50,
		borderColor: '#000000',
		borderWidth: 0.5,
		paddingLeft: 5
	},
	module: { 
		flex: 9,
		height: 50
	},
	searchelem: {
		flex: 1
	}
})

export default ModulePlace;