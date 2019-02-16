
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'

export default class HomeModule extends React.Component {

	render() {
		let { navigate } = this.props.navigation;
		return (
			<View style={styles.main_container}>
				<TouchableHighlight
				style={styles.noteModule}
				onPress={() => navigate('Note')}>
					<Text style={styles.moduleText}>Note</Text>
				</TouchableHighlight>
				<TouchableHighlight
				style={styles.CalendarMdule}
				onPress={() => navigate('Calendar')}>
					<Text style={styles.moduleText}>Calendrier</Text>
				</TouchableHighlight>
				<TouchableHighlight
				style={styles.StatisticModule}
				onPress={() => navigate('Statistic')}>
					<Text style={styles.moduleText}>Statistic</Text>
				</TouchableHighlight>
				<TouchableHighlight
				style={styles.ExportModule}
				onPress={() => navigate('Export')}>
					<Text style={styles.moduleText}>Export</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

const styles = StyleSheet.create({
		main_container: {
			margin: 10,
			justifyContent: 'center',
			flex: 1
		},
		noteModule: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			borderWidth: 3,
			backgroundColor: '#DEDDC7',
			borderColor: 'black',
			borderRadius: 0.5,
			padding: 30,
			marginBottom: 30
		},
		CalendarMdule: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			borderWidth: 3,
			backgroundColor: '#AEECF9',
			borderColor: 'black',
			borderRadius: 0.5,
			padding: 30,
			marginBottom: 30,
		},
		StatisticModule: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			borderWidth: 3,
			borderRadius: 0.6,
			borderColor: 'black',
			padding: 30,
			backgroundColor: '#FF7395',
			marginBottom: 30,
		},
		ExportModule: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			borderWidth: 3,
			backgroundColor: '#FBC58F',
			borderColor: 'black',
			borderRadius: 0.5,
			padding: 30,
			marginBottom: 30,
		},
		moduleText: {
			fontSize: 20
		}
	})