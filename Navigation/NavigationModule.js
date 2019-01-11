import React from 'react' // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image ! 
import { createStackNavigator, createAppContainer, createBottomTabNavigator, SwitchNavigator } from 'react-navigation'

import HomeModule from '../Components/HomeModule.js'
import Export from '../Components/Export.js'
import Statistic from '../Components/Statistic.js'
import Note from '../Components/Note.js'
import Calendar from '../Components/Calendar.js'

const HomeModuleStackNavigator = createStackNavigator({
	HomeModule: {
	  screen: HomeModule,
	},
	Export: {
	  screen: Export
	},
	Note: {
	      screen: Note
	},
	Calendar: {
	      screen: Calendar
	},
	Statistic: {
	      screen: Statistic
	}
})

const CalendarStackNavigator = createStackNavigator({
	Calendar: {
	  screen: Calendar,
	}
})

const ModuleTabNavigator = createBottomTabNavigator(
{
          Home: {
            screen: HomeModuleStackNavigator

          },
          Note: {
            screen: Note
        },
        Calendar: {
                screen: CalendarStackNavigator
        },
        Statistic: {
                screen: Statistic
        },
        Export: {
                screen: Export
        },
})
        
export default createAppContainer(ModuleTabNavigator)