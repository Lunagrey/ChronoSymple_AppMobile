// Components/ModulePlace.js

import React from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableRipple } from 'react-native-paper';
import ModuleItem from './ModuleItem'
import { APIGetModules, APIAddModule } from '../API/APIModule'
import { getToken } from './Auth/StoreToken'
import { connect } from 'react-redux'

class ModulePlace extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			Dmodules: []
		}
		APIGetModules(this.props.token).then(data => {
			this.setState({
			  Dmodules: [ ...this.state.Dmodules, ...data.modules ],
			})
		})
	}

	_toggleFavorite() {
		const action = { type: "TOGGLE_FAVORITE", value: this.state.film }
		this.props.dispatch(action)

	}

	_addModule = (idModule) => {
		console.log("Display film " + idModule)
		console.log('token ' + this.props.token)
		APIAddModule(this.props.token, idModule).then(data => {
			if (data.status == 200)
				this.props.navigation.navigate('HomeModule', {idModule: idModule})
			else
				this.props.navigation.navigate('Login', {idModule: idModule})
		})
	}
	
	_searchModule = () => {
		console.log('faire le filtre ici')
	}

	render() {
		let { navigate } = this.props.navigation;
		return(
			<FlatList
				style={styles.list}
				data={this.state.Dmodules}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({item}) => (
				  <ModuleItem
				    dModule={item}
				    _addModule={this._addModule}
				  />
				)}
			/>
		)
	}
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1,
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
		height: 50,
	},
	searchelem: {
		flex: 1,
	},
	list: {
		flex: 1,
  	}
})

const mapStateToProps = (state) => {
	return {
	  token: state.token
	}
      }
      
export default connect(mapStateToProps)(ModulePlace)