const axios = require('axios')

const URL_LIVROS_API = 'http://10.0.2.2:3000/livros'

/**
 * Lista todos os livros da API
 * @param {string} jwt 
 * @returns {Promise}
 */
export const getLivros = async (jwt) => {
  return axios({
    url : URL_LIVROS_API,
    headers : {
      'Authorization' : jwt
    }
  })
}

/**
 * Cadastro de um novo livro via API
 * @param {string} jwt 
 * @param {string} titulo 
 * @param {string} descricao 
 * @param {string} editora 
 * @param {string} autor 
 * @param {int} paginas 
 * @returns {Promise}
 */
export const postLivro = (jwt, titulo, descricao, editora, autor, paginas) => {
  return axios({
    method : 'post',
    url : URL_LIVROS_API,
    headers : {
      'Authorization' : jwt
    },
    data : {
      titulo,
      descricao,
      editora,
      autor,
      paginas
    }
  })
}