// Components/SignUp.js

import React from 'react'
import { View, Text, TextInput, Button, Dimensions} from 'react-native'
import { LogOutAPatientWithApi } from '../../API/APIConnection'
import { getToken } from './StoreToken'

class Logout extends React.Component {
	constructor (props) {
		super(props)
//		let statu = LogOutAPatientWithApi(getToken());
		console.log(getToken())
		
		//if (ret == data) {
			//	
			//}
		}
		
		componentDidMount() {
//			let statu = LogOutAPatientWithApi(getToken());
	}

	render() {
		return (
			<Text>SignOut</Text>
		)
	}
}

export default Logout;