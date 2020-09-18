'use strict'

const config = require('./../config')
const store = require('./../store')

const addMovie = function (movie) {
  return $.ajax({
    url: config.apiUrl + '/movies',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: movie
  })
}
const showMovies = function (movie) {
  return $.ajax({
    url: config.apiUrl + '/movies',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

module.exports = {
  addMovie: addMovie,
  showMovies: showMovies
}
