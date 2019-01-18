// Components/Note.js

import React from 'react'
import { View, Text} from 'react-native'

class Note extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ flex: 1 }} >JE SUIS NOTE</Text>
      </View>
    )
  }
}

export default Note;