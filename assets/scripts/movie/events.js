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
    .then(onShowMovies())
    .catch(movieUi.onAddMovieFailure)
}
const onShowMovies = function () {
  // event.preventDefault()
  movieApi.showMovies()
    .then(movieUi.onShowMoviesSuccess)
    .catch(movieUi.onShowMoviesFailure)
}
const onUpdateMovie = function (event) {
  event.preventDefault()
  const selectMovie = event.target
  const data = getFormFields(selectMovie)
  const movieId = $(selectMovie).attr('id')
  movieApi.updateMovie(data, movieId)
    .then(movieUi.onUpdateMovieSuccess)
    .then(onShowMovies)
    .catch(movieUi.onUpdateMovieFailure)
}
const onDeleteMovie = function (event) {
  event.preventDefault()
  const selectMovie = event.target
  const movieId = $(selectMovie).attr('value')
  movieApi.deleteMovie(movieId)
    .then(movieUi.onDeleteMovieSuccess)
    .then(onShowMovies)
    .catch(movieUi.onDeleteMovieFailure)
}

module.exports = {
  onAddMovie: onAddMovie,
  onShowMovies: onShowMovies,
  onDeleteMovie: onDeleteMovie,
  onUpdateMovie: onUpdateMovie
}
