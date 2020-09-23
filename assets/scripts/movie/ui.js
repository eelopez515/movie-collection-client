'use strict'
const store = require('./../store')

const onAddMovieSuccess = function (response) {
  store.movie = response.movie
  $('#message').text('Movie was added to your colection, ' + store.user.email)
  $('#add-movie-form').trigger('reset')
  $('#add-movie-form').on('submit', () => {
    $('#add-movie-form').hide()
  })
}
const onAddMovieFailure = function () {
  $('#message').text('Movie was not add, try again.')
}
const onShowMoviesSuccess = function (response) {
  $('#collection-view-size').text('You have ' + response.movies.length + ' movie(s) in your collection')
  $('#collection-view').text('')
  $('#message').text('Here is your movie collection, ' + store.user.email)

  const collection = response.movies
  for (let i = 0; i < collection.length; i++) {
    const heading = document.createElement('h5')
    const title = document.createElement('p')
    const director = document.createElement('p')
    const releaseYear = document.createElement('p')
    const genre = document.createElement('p')
    const rating = document.createElement('p')
    const reviews = document.createElement('p')
    const update = document.createElement('Button')
    const remove = document.createElement('Button')
    update.setAttribute('id', 'update-button')
    remove.setAttribute('id', 'delete-button')
    remove.value = collection[i]._id
    update.value = collection[i]._id

    heading.textContent = `Movie #${i + 1}`
    title.textContent = 'Title: ' + collection[i].title.toUpperCase()
    director.textContent = 'Director: ' + collection[i].director.toUpperCase()
    releaseYear.textContent = 'Release Year: ' + collection[i].releaseYear
    genre.textContent = 'Genre: ' + collection[i].genre.toUpperCase()
    rating.textContent = 'Rating: ' + collection[i].rating
    reviews.textContent = 'Review: ' + collection[i].reviews
    update.textContent = 'Update'
    remove.textContent = 'Delete'

    document.getElementById('collection-view').appendChild(heading)
    document.getElementById('collection-view').appendChild(title)
    document.getElementById('collection-view').appendChild(director)
    document.getElementById('collection-view').appendChild(releaseYear)
    document.getElementById('collection-view').appendChild(genre)
    document.getElementById('collection-view').appendChild(rating)
    document.getElementById('collection-view').appendChild(reviews)
    document.getElementById('collection-view').appendChild(update)
    document.getElementById('collection-view').appendChild(remove)
    $('#collection-view').append(`
      <form id="${collection[i]._id}" class='movie-update'>
          <input name='title' type="text" value='${collection[i].title}' placeholder='Title'/>
          <input name='director' type="text" value='${collection[i].director}' placeholder='Director'/>
          <input name='release year' type='text' value='${collection[i].releaseYear}' placeholder='Release Year'/>
          <input name='genre' type="text" value='${collection[i].genre}' placeholder='Genre'/>
          <input name='rating' type="number" class='collection-view-rating' value='${collection[i].rating}' placeholder='Rating' min='0' max='5'/>
          <input name='review' type="text" value='${collection[i].reviews}' placeholder='Review'/>
          <input  class='save-button' type='submit' value='Save'/>
          <button class='cancel-button'>Cancel</button>

      </form>`)
  }
  $('.movie-update').hide()
}
$('#collection-view').on('click', '#update-button', (event) => {
  const movieId = event.target.value
  $('#' + movieId).show(300, 'linear')
  $('#message').text('Please update your movie')
})
const onShowMoviesFailure = function () {
  $('#message').text('Unable to retrieve your collection, try again.')
}
const onUpdateMovieSuccess = function (response) {
  $('#message').text('Your movie has been updated')
}
const onUpdateMovieFailure = function () {

}
const onDeleteMovieSuccess = function (response) {
  $('#message').html('Movie was successfully deleted from your collection ' + store.user.email)
}
const onDeleteMovieFailure = function () {

}
module.exports = {
  onAddMovieSuccess: onAddMovieSuccess,
  onAddMovieFailure: onAddMovieFailure,
  onShowMoviesSuccess: onShowMoviesSuccess,
  onShowMoviesFailure: onShowMoviesFailure,
  onUpdateMovieSuccess: onUpdateMovieSuccess,
  onUpdateMovieFailure: onUpdateMovieFailure,
  onDeleteMovieSuccess: onDeleteMovieSuccess,
  onDeleteMovieFailure: onDeleteMovieFailure
}
