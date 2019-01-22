const baseUrl = 'http://10.41.160.84:3000'

export function SiginAPatientWithApi (fname, lname, mail, password) {
  return fetch(baseUrl + '/api/patient/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: fname,
      last_name: lname,
      email: mail,
      password: password
    }),
  })
  .then((response) => response.json())
  .catch((error) => error)
}

export function LoginAPatientWithApi (mail, password) {
  return fetch(baseUrl + '/api/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: mail,
      password: password
    }),
  })
  .then((response) => response.json())
  .catch((error) => error)
}