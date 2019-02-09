// Components/ModulePlace.js

import React from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableRipple } from 'react-native-paper';
import ModuleItem from './ModuleItem'
import { APIGetModules,  } from '../API/APIModule'
import { getToken } from './Auth/StoreToken'

class ModulePlace extends React.Component {
	constructor (props) {
		super(props)
		//this.modules
		//this.token
		this.state = {
			modules: []
		}
		this.getModules()
	}

	async getModules() {
		this.token = await getToken();
		if (value !== null) {
			this.setState({
				modules: await APIGetModules(value)
			})
		//	console.log(this.modules)
		}
	}

	_addModule = (idFilm) => {
		console.log("Display film " + idFilm)
		this.props.navigation.navigate('HomeModule', {idModule: idModule})
	}
	
	_searchModule = () => {
		console.log('faire le filtre ici')
	}

	render() {
	let { navigate } = this.props.navigation;
		return (
			<View style={styles.main_container}>
				{console.log(this.state.modules)}
				<View style={styles.search}>
					<Icon name='search' style={styles.searchelem}/> 
					<TextInput
						style={styles.searchelem}
						placeholder='Nom du module'
						onSubmitEditing={() => this._searchModule()}
					/>
				</View>
				<View style={styles.module}>
					<FlatList
					        style={styles.list}
						data={this.props.modules}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({item}) => (
							<ModuleItem
								module={item}
								_addModule={this._addModule}
							/>
						)}
				/*	onEndReachedThreshold={0.5}
				 	onEndReached={() => {
						if (!this.props.favoriteList && this.props.page < this.props.totalPages) {
							this.props.loadFilms()
						}
					}} */
					/>
				</View>
				{/* <View style={styles.module}>
					<TouchableOpacity
						onPress={() => navigate('HomeModule')}
						title="OHLALA J'ADD LE MODULE DIABETE"
					>
					<Image source={require("../Images/diamodule.png")}/>
					</TouchableOpacity>
				</View> */}
			</View>
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
    		flex: 1
  	}
})

export default ModulePlace;