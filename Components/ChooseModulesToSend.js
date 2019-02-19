
import React from 'react'
import { View,
	List,
	Text,
	Button,
	Dimensions,
	ListItem,
	StyleSheet,
	TouchableHighlight,
	TextInput,
	FlatList,
	ScrollView,
	TouchableOpacity,
	Image} from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableRipple } from 'react-native-paper';
import { APIGetPatientModules } from '../API/APIModule';
import { connect } from 'react-redux';


class ChooseModulesToSend extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			data: []
		}

	}

	componentWillMount () {
		APIGetPatientModules(this.props.token).then(async data => {
			console.log("ChooseModulesToSend=>");
			console.log(data)
			let response = await data.json()
			console.log("-----")
			console.log(response.modules)
			console.log("-----")
			
			this.setState({
				data: response.modules,
			})
		})
	}


	render() {
		let { navigate } = this.props.navigation;
		let deviceWidth = Dimensions.get('window').width
		var moduleLists = [];

		for (let i = 0; i < this.state.data; i++) {
			moduleLists.push(
				<View key = {i}>
					<Text>{this.state.data[i].name}</Text>
				</View>
			)
		}
		return (
			<View style={styles.main_container}>
				{moduleLists}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	main_container: {
		margin: 10,
		justifyContent: 'center'
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
		height: 50
	},
	searchelem: {
		flex: 1
	},
	moduleText: {
		fontSize: 20
	}
})

const mapStateToProps = (state) => {
	return {
	  token: state.token
	}
      }
      
export default connect(mapStateToProps)(ChooseModulesToSend)