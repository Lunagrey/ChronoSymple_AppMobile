// Components/Note.js

import React from 'react'
import { View, Dimensions,  Text, TextInput, Button} from 'react-native'

class Note extends React.Component {
	constructor(props) {
		super(props)
		this.state = { mail: "", password: "", glicemie: "", isInvalid: false }
	}
	setPassword = (text) => { 
		this.setState({ password: text })
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
					onChangeText={(text) => this.setPassword(text)}
					value={this.password}
				/>
			</View>
			<Text>{"\n"}</Text>
			<View style={{flexDirection: 'row', marginLeft: deviceWidth / 7, marginRight: deviceWidth / 7}}>
	        	<Text style={{flex: 1}}> Glucide:</Text>
	        	<TextInput
					placeholder="Glucide"
					style={{ flex: 1, height: 25, width: deviceWidth / 3, borderBottomWidth: 1}}
					onChangeText={(text) => this.setPassword(text)}
					value={this.password}
				/>
			</View>
			<Text>{"\n"}</Text>
			<View style={{flexDirection: 'row', marginLeft: deviceWidth / 7, marginRight: deviceWidth / 7}}>
	        	<Text style={{flex: 1}}> Insuline av. repas</Text>
	        	<TextInput
					placeholder="Insuline av. repas:"
					style={{ flex: 1, height: 25, width: deviceWidth / 3, borderBottomWidth: 1}}
					onChangeText={(text) => this.setPassword(text)}
					value={this.password}
				/>
			</View>
			<Text>{"\n"}</Text>
			<View style={{flexDirection: 'row', marginLeft: deviceWidth / 7, marginRight: deviceWidth / 7}}>
	        	<Text style={{flex: 1}}> Insuline ap. repas:</Text>
	        	<TextInput
					placeholder="Insuline ap. repas:"
					style={{ flex: 1, height: 25, width: deviceWidth / 3, borderBottomWidth: 1}}
					onChangeText={(text) => this.setPassword(text)}
					value={this.password}
				/>
			</View>
			<Text>{"\n"}</Text>
			<View style={{flexDirection: 'row', marginLeft: deviceWidth / 7, marginRight: deviceWidth / 7}}>
	        	<Text style={{flex: 1}}> Insuline a jeun:</Text>
	        	<TextInput
					placeholder="Insuline a jeun"
					style={{ flex: 1, height: 25, width: deviceWidth / 3, borderBottomWidth: 1}}
					onChangeText={(text) => this.setPassword(text)}
					value={this.password}
				/>
			</View>
			<Text>{"\n"}</Text>
			<Button 
				color="#62BE87"
				style={{ height: 40, borderWidth: 2, borderColor: '#000000' }} 
				onPress={() => {}} 
				title="Valider"
				/*title="SI T'APPUIS SUR CE BOUTON TU PASSES AU COMPONENT HOME dans 'Home.js' CA SERA LE BOUTON DE LOGIN"*/
			/>
		</View>
    	)
  	}
}

export default Note;