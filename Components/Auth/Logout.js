// Components/SignUp.js

import React from 'react'
import { View, Text, TextInput, Button, Dimensions} from 'react-native'
import { LogOutAPatientWithApi } from '../../API/APIConnection'
import { getToken, remove, removeToken } from './StoreToken'
import { connect } from 'react-redux'

class Logout extends React.Component {
	constructor (props) {
		super(props)
		console.log('dpf,prnf,')
	}
		
	componentDidMount() {
		console.log('ok')
		LogOutAPatientWithApi(this.props.token).then(async data => {
			if (data.status == 200) {
				await removeToken()
		console.log('ok')

				this.props.navigation.navigate('LoginStack');
			}
			else {
				this.props.navigation.goBack();
			}
		})
		.catch()
	}

	render() {
		return (
			<Text>SignOut</Text>
		)
	}
}

const mapStateToProps = (state) => {
	return {
	  token: state.token
	}
      }
      
export default connect(mapStateToProps)(Logout)