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
const showMovies = function () {
  return $.ajax({
    url: config.apiUrl + '/movies',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}
const updateMovie = function (data, movieId) {
  return $.ajax({
    url: config.apiUrl + '/movies/' + `${movieId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}
const deleteMovie = function (movieId) {
  return $.ajax({
    url: config.apiUrl + '/movies/' + `${movieId}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  addMovie: addMovie,
  showMovies: showMovies,
  deleteMovie: deleteMovie,
  updateMovie: updateMovie
}
