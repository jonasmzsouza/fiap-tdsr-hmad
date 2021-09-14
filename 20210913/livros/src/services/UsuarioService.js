const axios = require('axios')

export const login = (usuario, senha) => {
  return axios({
    method: 'post',
    url: 'http://10.0.2.2:3000/login',
    data: { usuario, senha }
  })
}