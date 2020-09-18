'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const movieApi = require('./api')
const movieUi = require('./ui')

const onAddMovie = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  movieApi.addMovie(data)
    .then(movieUi.onAddMovieSuccess)
    .catch(movieUi.onAddMovieFailure)
}
const onShowMovies = function () {
  event.preventDefault()
  movieApi.showMovies()
    .then(movieUi.onShowMoviesSuccess)
    .catch(movieUi.onShowMoviesFailure)
}

module.exports = {
  onAddMovie: onAddMovie,
  onShowMovies: onShowMovies
}
