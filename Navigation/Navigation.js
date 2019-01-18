// Navigation/Navigation.js

import React from 'react' // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image ! 
import { createStackNavigator, createAppContainer} from 'react-navigation'
import SignIn from '../Components/SignIn.js'
import SignUp from '../Components/SignUp.js'
import ModulePlace from '../Components/ModulePlace.js'
import Home from '../Components/Home.js'
import AddModule from '../Components/AddModule.js'

const SignInStackNavigator = createStackNavigator({
	SignIn: {
		screen: SignIn
	},
	SignUp: {
		screen: SignUp
	},
	Home: {
	  screen: Home,
	  navigationOptions: {
	    title: 'Home'
	  }
	},
	ModulePlace: {
		screen: ModulePlace
	},
	AddModule: {
		screen: AddModule
	},
}, {
	headerMode:'none'
	
})
/*ù
const SignUpStackNavigator = createStackNavigator({
	SignUp: {
		screen: SignUp
	},
	SignIn: {
		screen: SignInStackNavigator
	}
})

const HomeStackNavigator = createStackNavigator({
	Home: {
	  screen: Home,
	  navigationOptions: {
	    title: 'Home'
	  }
	},
	ModulePlace: {
	      screen: ModulePlaceStackNavigator
	},
})

const ModulePlaceStackNavigator = createStackNavigator({
	ModulePlace: {
	  screen: ModulePlace,
	  navigationOptions: {
	    title: 'ModulePlace'
	  }
	},
	HomeModule: {
		screen: ModuleTabNavigator
	}
})
*/

export default createAppContainer(SignInStackNavigator)