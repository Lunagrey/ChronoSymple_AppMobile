// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class ModuleItem extends React.Component {
	render() {
    const { dModule, _addModule } = this.props
    console.log("OUIIIIIIIIIIIIIIiii")
		return (
			<TouchableOpacity
				style={{
					flex: 1,
					margin: 5,
					alignItems: 'center',
					justifyContent: 'center',
					borderWidth: 3,
					borderColor: dModule.color,
					backgroundColor : dModule.color,
					borderRadius: 0.5,
					padding: 30
				}}
				onPress={() => _addModule(dModule.id)}>
					<Text>{dModule.name}</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	content_container: {
		flex: 1,
		margin: 5,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 3,
		borderColor: '#62BE87',
		borderRadius: 0.5,
		padding: 30
	},
	main_container: {
		height: 190,
		flexDirection: 'row'
	},
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  },
  favorite_image: {
    width: 25,
    height: 25,
    marginRight: 5
  }
})

export default ModuleItem