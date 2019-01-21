import React, { Component } from 'react';
import {createStackNavigator, createDrawerNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

import Home from '../Components/Home';
import DrawerScreen from './DrawerScreen';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import ModulePlace from '../Components/ModulePlace';
import HomeModule from '../Components/HomeModule';
import Calendar from '../Components/Calendar';
import Statistic from '../Components/Statistic';
import Export from '../Components/Export';
import Note from '../Components/Note';
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-paper';

const HomeModuleStackNavigator = createStackNavigator({
	HomeModule: {
	  screen: HomeModule,
	}

})

const NoteStackNavigator = createStackNavigator({
	Note: {
	  screen: Note,
	}
})

const CalendarStackNavigator = createStackNavigator({
	Calendar: {
	  screen: Calendar,
	},
	test: {
		screen: Export
	}
},{
	headerMode: 'none'
} )

const StatisticStackNavigator = createStackNavigator({
	Statistic: {
		screen: Statistic,
	}
})

const ExportStackNavigator = createStackNavigator({
	Export: {
	  screen: Export,
	}
})

const Tabs = createBottomTabNavigator({
	Home: HomeModule,
	Note: Note,
	Calendar: CalendarStackNavigator,
	Statistic: Statistic,
	Export: Export
},{
	headerMode: 'none'
});


const MenuImage = ({navigation}) => {
	if(!navigation.state.isDrawerOpen){
		return <Icon color="white" name="menu" size={30} />
	}else{
		return <Icon color="white" name="arrow-back" size={30} />
	}

}

const DrawerNavigator = createDrawerNavigator({
		Home: {
			screen: Home
		},
		HomeModule: {
			screen: Tabs
		},
	},{
		contentComponent: DrawerScreen,
		headerMode: 'none',
		drawerWidth: 300,
		navigationOptions: ({ navigation }) => ({
				title : 'Home',
				  // Title to appear in status bar
				headerLeft: 
				<TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
					<MenuImage navigation={navigation}/>
				</TouchableOpacity>,
				headerStyle: {
					backgroundColor: '#58b57d',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
				  fontWeight: 'bold',
				},
		
			})
	});

	const StackNavigtorWhithoutModule = createStackNavigator({
		Drawer: {
			screen: DrawerNavigator
		},
		Stack: {
			screen: ModulePlace, navigationOptions: { title:'ModulPlace' }
		}
	})

	const LoginStack = createStackNavigator({
		SignIn: { screen: SignIn },
		SignUp: { screen: SignUp }
	})

	const StackNavigator = createStackNavigator({
		LoginStack: {
			screen: LoginStack, headerMode : 'none'
		},
		Drawer: {
			screen: StackNavigtorWhithoutModule
		},
	},{
		initialRouteName : 'LoginStack',
		headerMode: 'none'
	});
	  
export default createAppContainer(StackNavigator);