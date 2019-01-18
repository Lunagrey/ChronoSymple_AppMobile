// Components/HomeModule.js

import React from 'react'
import { View, Text} from 'react-native'

class HomeModule extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ flex: 1 }} >JE SUIS LA HOMEMODULE</Text>
      </View>
    )
  }
}

export default HomeModule;