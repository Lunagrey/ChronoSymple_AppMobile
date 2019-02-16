
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
import { connect } from 'react-redux';


class DoctorChoice extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			data: []
		}

	}

	componentWillMount () {
		APIGetPatientModules(this.props.token).then(data => {
		})
	}



	render() {
		let { navigate } = this.props.navigation;
		let deviceWidth = Dimensions.get('window').width
		this._getDoctorList()
		return (
			<View>
				<FlatList
  					data={[
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  						{FirstName: 'Caila', LastName: "Alexandre", email: 'alexandre.caila@toto.toto'},
  						{FirstName: 'four', LastName: "ma", email: 'ma.four@toto.toto'},
  					]}
  					renderItem={({item, separators}) => (
    					<TouchableHighlight
      						onPress={() => {}}
      						onShowUnderlay={separators.highlight}
      						onHideUnderlay={separators.unhighlight}>
      						<View style={{backgroundColor: 'white', borderBottomWidth: 1, justifyContent: 'center'}}>
        						<Text style={{margin: 15}}>{item.FirstName} {item.LastName}</Text>
      						</View>
    					</TouchableHighlight>
  					)}
				/>
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