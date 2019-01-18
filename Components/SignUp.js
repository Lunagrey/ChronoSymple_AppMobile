// Components/SignUp.js

import React from 'react'
import { View, Text, TextInput, Button, Dimensions} from 'react-native'

class SignUp extends React.Component {

        constructor(props) {
                super(props)
                this.state = { mail: "", password: "", rePassword: "" , isInvalid: false}
        }
        
        //checklogin est la focntion appelé sur le onpress du bouton bleu
        SingUp = () => {
                let { navigate } = this.props.navigation;
                //si l'un des deux est vide pas de passage à home
                if (this.state.mail == "" || this.state.password == "" || this.state.rePassword == "" || this.state.password != this.state.rePassword) {
                    this.setState({ isInvalid: true })
                    return;
                }

                // LA TU FAIS TON BORDEL EN BASE DE DONNEE
                let cafontionne = true;
                if (cafontionne)
                        navigate('SignIn')
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

        setRePassword = (text) => {
            this.setState({ rePassword: text})
        }

  render() {
    let { navigate } = this.props.navigation;
    let deviceWidth = Dimensions.get('window').width
    let errorText = "mauvais mot de passe ou addresse mail"
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#62BE87'}}>
        <Text style={{fontSize: 24}}>Inscription{"\n"}</Text>
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
                value={this.password}
        />
        <Text>{"\n"}</Text>
        <TextInput
                placeholder="Confirmer mot de passe"
                style={{ height: 40, width: deviceWidth / 3 * 2, borderBottomWidth: 1}}
                onChangeText={(text) => this.setRePassword(text)}
                value={this.rePassword}
        />
        <Text>{"\n"}</Text>
        <Button 
                style={{ }} 
                onPress={() => this.SingUp()} 
                title="S'inscrire"
                /*title="SI T'APPUIS SUR CE BOUTON CA DOIT SIGNUP LE GARS ET APRES CA REDIRECT LOGIN"*/
        />
        <Text>{"\n"}</Text>
        <Button 
                style={{ backgroundColor: 'red' }} 
                onPress={() => navigate('SignIn')} 
                title="J'ai deja un compte"
                /*title="Je ne déjà inscrit => ALLEZ SUR SIGNIN"*/
        />
        <Text>{"\n"}</Text>
        { this.state.isInvalid && <Text style={{color: 'red'}}>{errorText}</Text>}
      </View>
    )
  }
}

export default SignUp;