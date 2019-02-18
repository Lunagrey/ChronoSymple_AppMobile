import React from 'react'
import {Text, TouchableOpacity } from 'react-native'

class ModuleItem extends React.Component {
	render() {
    const { dModule, _addModule } = this.props
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

export default ModuleItem