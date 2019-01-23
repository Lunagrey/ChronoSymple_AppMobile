import { AsyncStorage } from 'react-native'


export async function InAsyncStorage() {
	try {
		const value = await AsyncStorage.getItem('token');
		return value;
	} catch (error) {
		return error.message;
	}
}