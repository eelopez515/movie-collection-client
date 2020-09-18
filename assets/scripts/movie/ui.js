'use strict'
const store = require('./../store')

const onAddMovieSuccess = function (response) {
  store.movie = response.movie
  console.log(store.movie)
  $('#message').text('Movie was added to your colection, ' + store.user.email)
  $('#add-movie-form').trigger('reset')
}
const onAddMovieFailure = function () {
  $('#message').text('Movie was not add, try again.')
}
const onShowMoviesSuccess = function (response) {
  console.log(response)
  $('#message').text('Here is your movie collection, ' + store.user.email)
  $('#collection-view').text(response.movie)
}
const onShowMoviesFailure = function (response) {
  $('#message').text('Unable to retrieve your collection, try again.')
}
module.exports = {
  onAddMovieSuccess: onAddMovieSuccess,
  onAddMovieFailure: onAddMovieFailure,
  onShowMoviesSuccess: onShowMoviesSuccess,
  onShowMoviesFailure: onShowMoviesFailure
}
