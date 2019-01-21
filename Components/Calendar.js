// Components/Calendar.js

import React from 'react'
import { View, Text, Button} from 'react-native'

class Calendar extends React.Component {
  render() {
		let { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ flex: 1 }} >JE SUIS CALENDRIER</Text>
        <Button 
          color="#62BE87"
		      onPress={() => navigate('test')} 
		      title="ALLEZ SUR LE MODULE PLACE"
	      />
      </View>
    )
  }
}

export default Calendar;