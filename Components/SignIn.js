// Components/SignIn.js

import React from 'react'
import { View, Text, Button, TextInput, Dimensions } from 'react-native'

class SignIn extends React.Component {
	static navigationOptions = {
		headerStyle: {backgroundColor: '#58b57d'},
	  title: 'Connection',
	  headerTintColor: 'white'
	}
	//constructeur de la classe je définis mail et paswword les deux éléms pour la connexions
	constructor(props) {
		super(props)
		this.state = { mail: "", password: "", isInvalid: false }
	}
	
	//checklogin est la focntion appelé sur le onpress du bouton bleu
	checkLogin = () => {
		let { navigate } = this.props.navigation;
		//si l'un des deux est vide pas de passage à home
		//if (this.state.mail == "" || this.state.password == "") {
		//	this.setState({ isInvalid: true })
		//	return;
		//}
		// LA TU FAIS TON BORDEL EN BASE DE DONNEE
		let cafontionne = true;
		if (cafontionne)
			navigate('Home')
		else
			return;
			//on rest sur la page de logout
	}

	setMail = (text) => {
		this.setState({ mail: text })
	}

	setPassword = (text) => {
		this.setState({ password: text })
	}

  render() {
	let { navigate } = this.props.navigation;
	let deviceWidth = Dimensions.get('window').width
	let errorMessage = "Mauvaise addresse mail ou mot de passe"
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
	{/*<Text style={{ }} >JE SUIS SIGN IN</Text>*/}
	<Text style={{fontSize: 24}}>Connection{"\n"}</Text>
	<TextInput
		placeholder="Addresse mail"
		style={{ height: 40, width: deviceWidth / 3 * 2, borderBottomWidth: 1}}
		onChangeText={(text) => this.setMail(text)}
		value={this.mail}
	/>
	<Text>{"\n"}</Text>
	<TextInput
		placeholder="Mot de passe"
		style={{ height: 40, width: deviceWidth / 3 * 2, borderBottomWidth: 1}}
		onChangeText={(text) => this.setPassword(text)}
		value={this.mail}
	/>
	<Text>{"\n"}</Text>
	<Button 
		color="#62BE87"
		style={{ height: 40, borderWidth: 2, borderColor: '#000000' }} 
		onPress={() => this.checkLogin()} 
		title="Se connecter"
		/*title="SI T'APPUIS SUR CE BOUTON TU PASSES AU COMPONENT HOME dans 'Home.js' CA SERA LE BOUTON DE LOGIN"*/
	/>
	<Text>{"\n"}</Text>
	<Button 
		color="#62BE87"
		style={{ height: 40, borderWidth: 2, borderColor: '#000000' }} 
		onPress={() => navigate('SignUp')} 
		title="je n'ai pas de compte"
		/*title="Je ne suis pas encore inscrit => ALLEZ SUR SINGUP"*/
	/>
	<Text>{"\n"}</Text>
	{this.state.isInvalid && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
      </View>
	
    )
  }
}

export default SignIn;