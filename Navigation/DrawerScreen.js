import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View, TouchableOpacity, TouchableHighlight, StyleSheet, Image} from 'react-native';
import { DrawerActions } from 'react-navigation';
import { COLOR, ThemeProvider, Toolbar, Drawer, Avatar } from 'react-native-material-ui';
import { Icon } from 'react-native-elements'
import { TouchableRipple } from 'react-native-paper';

class DrawerScreen extends Component {
	navigateToScreen = (route) => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
		this.props.navigation.dispatch(DrawerActions.closeDrawer())
	}
	
	async InAsyncStorage() {
		try {
			const value = await AsyncStorage.getItem('token');
			return value;
		} catch (error) {
			return error.message;
		}
	}

	componentDidMount() {

	}

	listModule() {
		if (1) {
		<TouchableOpacity style={{ margin: 20, flex: 1, justifyContent : 'center', alignItems: 'center', flexDirection : 'row'}}
		onPress={this.navigateToScreen('Stack')}>
			<Image/>
		</TouchableOpacity>
		}
	}

	render () {
		return (
			<View>
				<ScrollView>
					<View>
			{/* 			this.listModule(); */}
						<TouchableOpacity style={{ margin: 20, flex: 1, justifyContent : 'center', alignItems: 'center', flexDirection : 'row'}}
						onPress={this.navigateToScreen('Stack')}>
							<Icon style={{ flex: 1}} size='20' color="grey" name="add-circle-outline" size={30}/>
							<Text style={{ flex: 2, marginLeft: 20 , backgroundColor: '#fff', fontSize: 20}}>
								Ajouter un module
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "#F5FCFF"
	},
	welcome: {
			fontSize: 20,
			textAlign: "center",
			margin: 10,
			color: "#000066"
	},
	welcomePress: {
			fontSize: 20,
			textAlign: "center",
			margin: 10,
			color: "#ffffff"
	},
	button: {
			borderColor: "#000066",
			borderWidth: 1,
			borderRadius: 10
	},
	buttonPress: {
			borderColor: "#000066",
			backgroundColor: "#000066",
			borderWidth: 1,
			borderRadius: 10
	}
	});

DrawerScreen.propTypes = {
	navigation: PropTypes.object
};

export default DrawerScreen;