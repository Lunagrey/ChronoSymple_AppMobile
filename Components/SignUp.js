// Components/SignUp.js

import React from 'react'
import { View, Text, TextInput, Button} from 'react-native'

class SignUp extends React.Component {

        constructor(props) {
                super(props)
                this.state = { mail: "", password: "" }
        }
        
        //checklogin est la focntion appelé sur le onpress du bouton bleu
        SingUp = () => {
                let { navigate } = this.props.navigation;
                //si l'un des deux est vide pas de passage à home
                if (this.state.mail == "" || this.state.password == "")
                        return;
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

  render() {
        let { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1}}>
        <Text style={{ flex: 1 }} >JE SUIS SIGNUP</Text>
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
                onPress={() => this.SingUp()} 
                title="SI T'APPUIS SUR CE BOUTON CA DOIT SIGNUP LE GARS ET APRES CA REDIRECT LOGIN"
        />
        <Button 
                style={{ flex: 1, backgroundColor: 'red' }} 
                onPress={() => navigate('SignIn')} 
                title="Je ne déjà inscrit => ALLEZ SUR SIGNIN"
        />
      </View>
    )
  }
}

export default SignUp;