const baseUrl = 'http://10.41.160.84:3000'

export function APIAddModule (token, id) {
	console.log('id ' + id, ' tpken ' + token)
	return fetch(baseUrl + '/api/patient/add_module/' + id, {
		method: 'POST',
		headers: {
	    'Authorization': token
		}
	})
	.then((response) => response)
	.catch((error) => error)
}

export function APIGetModules(token) {
	return fetch(baseUrl + '/api/modules', {
	  method: 'GET',
	  headers: {
	    Accept: 'application/json',
	    'Authorization': token,
	  },
	})
	.then((response) => response.json())
	.catch((error) => error)
}

export function APIGetPatientModules(token) {
	return fetch(baseUrl + '/api/patient/modules', {
	  method: 'GET',
	  headers: {
	    Accept: 'application/json',
	    'Authorization': token,
	  },
	})
	.then((response) => response)
	.catch((error) => error)
}