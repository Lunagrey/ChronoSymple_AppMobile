// Components/Note.js

import React from 'react'
import { View, Dimensions,  Text, TextInput, Button} from 'react-native'
import { connect } from 'react-redux'
import { APIGetPatientNotesByModule } from '../API/APIModule'

class Note extends React.Component {
	constructor(props) {
		super(props)
		this.state = { glicemie: "", glucide: "", insulineavrepas: "", Insulineaprepas: "", insulineajeun: "", date: "", heure: ""}
	}

	setPassword = (text) => { 
		this.setState({ password: text })
	}

	_addNote = () => {
		let myTab = {
			"Glicemie": this.state.glicemie,
			"Glucide": this.state.glucide,
			"Insuline av.repas": this.state.insulineavrepas,
			"Insuline ap.repas": this.state.Insulineaprepas,
			"Insuline a jeun": this.state.insulineajeun,
			"date": this.state.date,
			"heure": this.state.heure
		}
		APIGetPatientNotesByModule(this.props.token, this.props.idCurrentModule).then(data => {
			console.log(data)
			this.setState({
				notes: [ ...this.state.notes, ...data.notes ],
			})
		})
		console.log(myTab)
	}

	setGlicemie = (text) => {
		this.setState({ glicemie: text })
	}

	setGlucide = (text) => {
		this.setState({ glucide: text })
	}

	setInsulineavrepas = (text) => {
		this.setState({ insulineavrepas: text })
	}

	setInsulineaprepas = (text) => {
		this.setState({ Insulineaprepas: text })
	} 

	setInsulineajeun = (text) => {
	    this.setState({ insulineajeun: text})
	}

  	render() {
  		let deviceWidth = Dimensions.get('window').width
	    return (
      	<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
	        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Declaration de symptome{'\n\n\n'}</Text>
	        <View style={{flexDirection: 'row', marginLeft: deviceWidth / 7, marginRight: deviceWidth / 7}}>
	        	<Text style={{flex: 1}}> Glicemie:</Text>
	        	<TextInput
				placeholder="Glicémie"
				style={{ flex: 1, height: 25, width: deviceWidth / 3, borderBottomWidth: 1}}
				onChangeText={(text) => his.setGlicemie(text)}
				value={this.glicemie}
			/>
			</View>
			<Text>{"\n"}</Text>
			<View style={{flexDirection: 'row', marginLeft: deviceWidth / 7, marginRight: deviceWidth / 7}}>
	        	<Text style={{flex: 1}}> Glucide:</Text>
	        	<TextInput
				placeholder="Glucide"
				style={{ flex: 1, height: 25, width: deviceWidth / 3, borderBottomWidth: 1}}
				onChangeText={(text) => this.setGlucide(text)}
				value={this.glucide}
			/>
			</View>
			<Text>{"\n"}</Text>
			<View style={{flexDirection: 'row', marginLeft: deviceWidth / 7, marginRight: deviceWidth / 7}}>
	        	<Text style={{flex: 1}}> Insuline av. repas</Text>
	        	<TextInput
				placeholder="Insuline av. repas:"
				style={{ flex: 1, height: 25, width: deviceWidth / 3, borderBottomWidth: 1}}
				onChangeText={(text) => this.setInsulineavrepas(text)}
				value={this.insulineavrepas}
			/>
			</View>
			<Text>{"\n"}</Text>
			<View style={{flexDirection: 'row', marginLeft: deviceWidth / 7, marginRight: deviceWidth / 7}}>
	        	<Text style={{flex: 1}}> Insuline ap. repas:</Text>
	        	<TextInput
				placeholder="Insuline ap. repas:"
				style={{ flex: 1, height: 25, width: deviceWidth / 3, borderBottomWidth: 1}}
				onChangeText={(text) => this.setInsulineaprepas(text)}
				value={this.Insulineaprepas}
			/>
			</View>
			<Text>{"\n"}</Text>
			<View style={{flexDirection: 'row', marginLeft: deviceWidth / 7, marginRight: deviceWidth / 7}}>
	        	<Text style={{flex: 1}}> Insuline a jeun:</Text>
	        	<TextInput
				placeholder="Insuline a jeun"
				style={{ flex: 1, height: 25, width: deviceWidth / 3, borderBottomWidth: 1}}
				onChangeText={(text) => this.setInsulineajeun(text)}
				value={this.insulineajeun}
			/>
			</View>
			<Text>{"\n"}</Text>
			<Button 
				color="#62BE87"
				style={{ height: 40, borderWidth: 2, borderColor: '#000000' }} 
				onPress={() => {this._addNote()}} 
				title="Valider la prise de note"
				/*title="SI T'APPUIS SUR CE BOUTON TU PASSES AU COMPONENT HOME dans 'Home.js' CA SERA LE BOUTON DE LOGIN"*/
			/>
		</View>
    	)
  	}
}


const mapStateToProps = (state) => {
	return {
	  token: state.token,
	  idCurrentModule: state.idCurrentModule
	}
      }
      
export default connect(mapStateToProps)(Note)