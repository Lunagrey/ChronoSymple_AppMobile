// Components/SignIn.js

import React from 'react'
import { View, Text, Button, TextInput} from 'react-native'

class SignIn extends React.Component {
	//constructeur de la classe je définis mail et paswword les deux éléms pour la connexions
	constructor(props) {
		super(props)
		this.state = { mail: "", password: "" }
	}
	
	//checklogin est la focntion appelé sur le onpress du bouton bleu
	checkLogin = () => {
		let { navigate } = this.props.navigation;
		//si l'un des deux est vide pas de passage à home
		if (this.state.mail == "" || this.state.password == "")
			return;
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
    return (
      <View style={{ flex: 1}}>
	<Text style={{ flex: 1}} >JE SUIS SIGN IN</Text>
	<TextInput
		placeholder="email"
		style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1}}
		onChangeText={(text) => this.setMail(text)}
		value={this.mail}
	/>
	<TextInput
		placeholder="password"
		style={{ flex: 1, height: 40, backgroundColor: 'gray', borderWidth: 1}}
		onChangeText={(text) => this.setPassword(text)}
		value={this.mail}
	/>
	<Button 
		style={{ flex: 1 }} 
		onPress={() => this.checkLogin()} 
		title="SI T'APPUIS SUR CE BOUTON TU PASSES AU COMPONENT HOME dans 'Home.js' CA SERA LE BOUTON DE LOGIN"
	/>
	<Button 
		style={{ flex: 1 }} 
		onPress={() => navigate('SignUp')} 
		title="Je ne suis pas encore inscrit => ALLEZ SUR SINGUP"
	/>
      </View>
    )
  }
}

export default SignIn;