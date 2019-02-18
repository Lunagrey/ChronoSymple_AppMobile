import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

class NoteItem extends React.Component {
	render() {
    const { note, _addNote } = this.props
		return (
			<TouchableOpacity
				style={styles.note}
				onPress={() => _accessDetailNote(note.id)}>
					<Text>{note.date}</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	main_container: {
		margin: 10
	},
  note: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 3,
		borderColor: 'black',
		backgroundColor: '#62BE87',
		borderRadius: 0.5,
		padding: 30,
		color: '#000'
	},
})

export default NoteItem