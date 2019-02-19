
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
import { APIGetDoctors } from '../API/APIModule';
import { connect } from 'react-redux';


class DoctorChoice extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			data: []
		}

	}

	componentWillMount () {
		APIGetDoctors(this.props.token).then(async data => {
			let response = await data.json()
			console.log("toto 12456789");
			console.log(data)
			console.log("-----")
			console.log(response.users)
			console.log("-----")
			for (var i = response.users.length - 1; i >= 0; i--) {
				console.log(i)
				console.log(response.users[i].id)
			}
			this.setState({
				data: [...response.users],
			})
		})
	}


	render() {
		let { navigate } = this.props.navigation;
		let deviceWidth = Dimensions.get('window').width
		return (
			<View>
				<FlatList
  					data={this.state.data}
  					keyExtractor={(item) => item.id.toString()}
  					renderItem={({item, separators}) => (
    					<TouchableHighlight
      						onPress={() => {}}
      						onShowUnderlay={separators.highlight}
      						onHideUnderlay={separators.unhighlight}>
      						<View style={{backgroundColor: 'white', borderBottomWidth: 1, justifyContent: 'center'}}>
        						<Text style={{margin: 15}}>{item.first_name} {item.last_name}</Text>
      						</View>
    					</TouchableHighlight>
  					)}
				/>
				{this.state.data}
      		</View>
		)
	}
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1
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
	}
})

const mapStateToProps = (state) => {
	return {
	  token: state.token
	}
      }
      
export default connect(mapStateToProps)(DoctorChoice)