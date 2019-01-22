// Components/Calendar.js

import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { TouchableRipple } from 'react-native-paper';

class Calendar extends React.Component {
	render() {
		let { navigate } = this.props.navigation;
		return (
			<View style={styles.main_container}>
					<View
					style={styles.module}
					onPress={() => navigate('CalendarStackNavigator')}>
						<Text>22 JANVIER 2019</Text>
					</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	main_container: {
		marginTop: 10
	},
  module: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 3,
		borderColor: '#62BE87',
		borderRadius: 0.5,
		padding: 30
	},
	date: {

	}
})

export default Calendar;