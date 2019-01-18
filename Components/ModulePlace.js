// Components/ModulePlace.js

import React from 'react'
import { View, Text, Button} from 'react-native'

class ModulePlace extends React.Component {
  render() {
	let { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ flex: 1 }} >JE SUIS LE MODULPLACE</Text>
        <Button 
		style={{ flex: 1 }} 
		onPress={() => navigate('AddModule')} 
		title="OHLALAL J4ADD LE MODULE DIABETE"
	/>
      </View>
    )
  }
}

export default ModulePlace;