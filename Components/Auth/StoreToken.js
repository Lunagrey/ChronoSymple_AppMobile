import { AsyncStorage } from 'react-native'

export async function getToken() {
	try {
		
		let value = await AsyncStorage.getItem('token').then((data) => {console.log(data)});
		console.log(value)

		return value
	} catch (error) {
		return 'C\'est UNE ERREUR' + error.message;
	}
}

export async function setToken(token) {
	try {
		await AsyncStorage.setItem('token', token);
	} catch (error) {
		return error.message;
	}
}