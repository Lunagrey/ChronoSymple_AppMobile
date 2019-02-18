// Components/Calendar.js

import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native'
import { APIAddPatientNotes } from '../API/APIModule'
import { connect } from 'react-redux'
import { NoteItem } from './NoteItem'

class Calendar extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			notes: []
		}
		APIAddPatientNotes(this.props.token, this.props.idCurrentModule).then(data => {
			console.log(data)
			this.setState({
				notes: [ ...this.state.notes, ...data.notes ],
			})
		})
	}

	_accessDetailNote = () => {
		this.props.navigation.navigate('DetailNote')
	}

	render() {
		return (
			<View>
			 <FlatList
				style={styles.list}
				data={this.state.notes}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({item}) => (
				  <NoteItem
				    note={item}
				    _accessDetailNote={this._accessDetailNote}
				  />
				)}
			/>
			</View>
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

const mapStateToProps = (state) => {
	return {
	  token: state.token,
	  idCurrentModule: state.idCurrentModule
	}
      }
      
export default connect(mapStateToProps)(Calendar)