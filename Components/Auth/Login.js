// Components/SignIn.js

import React from 'react'
import { View, Text, Button, TextInput, Dimensions, AsyncStorage } from 'react-native'
import { LoginAPatientWithApi } from '../../API/APIConnection'
import { InAsyncStorage } from './VerifyToken'

class Login extends React.Component {
	static navigationOptions = {
		headerStyle: {backgroundColor: '#58b57d'},
	  title: 'Connection',
	  headerTintColor: 'white'
	}

	constructor(props) {
		super(props)
		this.state = { mail: "", password: "", isInvalid: false }
	}

	storeData = async (token) => {
		try {
			console.log('enter data ' + token)
			await AsyncStorage.setItem('token', token);
		} catch (error) {
			console.error('AsyncStorage#setItem error: ' + error.message);
		}
	}

	checkLogin = () => {
		let { navigate } = this.props.navigation;

		if (this.state.mail == "" || this.state.password == "") {
			this.setState({ isInvalid: true })
			return;
		}

		LoginAPatientWithApi(this.state.mail, this.state.password).then(data => {
			let token = data.login_token

			if (token) {
				this.storeData(token);
				navigate('Home')
			}

			else {
				var tabErrors = data.errors
				this.setState({ isInvalid: true, errorText: "Problème de connection" })
				return;
			}
		});
	}

	setMail = (text) => {
		this.setState({ mail: text })
	}

	setPassword = (text) => {
		this.setState({ password: text })
	}

	componentDidMount() {
		console.log('oui');
		let { navigate } = this.props.navigation;
		value = InAsyncStorage();
		if (value !== null) {
			navigate('Home')
		}
	}

  	render() {
	let { navigate } = this.props.navigation;
	let deviceWidth = Dimensions.get('window').width
	let errorMessage = "Mauvaise addresse mail ou mot de passe"
    	return (
      		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
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
				onPress={() => navigate('SignIn')} 
				title="je n'ai pas de compte"
				/*title="Je ne suis pas encore inscrit => ALLEZ SUR SINGUP"*/
			/>
			<Text>{"\n"}</Text>
			{this.state.isInvalid && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
		</View>
	)}
}

export default Login;