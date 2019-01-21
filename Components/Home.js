// Components/Home.js

import React from 'react'
import { View, Text, Button, BackHandler, StyleSheet, TouchableOpacity} from 'react-native'

const MenuImage = ({navigation}) => {
  if(!navigation.state.isDrawerOpen){
      return <Icon color="white" name="menu" size={30} />
}else{
      return <Icon color="white" name="arrow-back" size={30} />
}

}

class Home extends React.Component {
 
  //static navigationOptions = {
	//	title: 'Chat',
	//	headerStyle: { backgroundColor: 'red' },
	//	headerTitleStyle: { color: 'green' },
	//      }
  static navigationOptions = {
    headerStyle: {backgroundColor: '#58b57d'},
    headerTintColor: 'white',
    title: 'foẑekfg',  // Title to appear in status bar
    /*headerLeft: <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
        <MenuImage navigation={this}/>
    </TouchableOpacity>,*/
    //headerLeft: <Button onPress={() => props.navigation.navigate('DrawerOpen')} title= "=" />
  }

  render() {

        let { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom : 30, fontSize: 20 }}>Aucun module actif</Text>        
        <Button 
          color="#62BE87"
		      onPress={() => navigate('Stack')} 
		      title="ALLEZ SUR LE MODULE PLACE"
	      />
      </View>
    )
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    BackHandler.exitApp(); // works best when the goBack is async
    return true;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home;