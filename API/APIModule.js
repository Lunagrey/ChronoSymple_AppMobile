const baseUrl = 'http://10.41.160.84:3000'

export function APIAddModule (token, id) {
	return fetch(baseUrl + '/api/patient/add_module', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			token: token,
			id: id,
		}),
	})
	.then((response) => response.json())
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
	.catch((error) => 'error' + error)
}