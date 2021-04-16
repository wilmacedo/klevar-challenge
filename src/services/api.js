const {
  REACT_APP_API_URL
} = process.env;

const balance = id => fetch(
  `${REACT_APP_API_URL}/balance/${id}`,
  {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json()
    .then(data => ({ status: response.status, data })))
  .catch(error => ({ error: error.message }))

const api = {
  balance
}

export default api;