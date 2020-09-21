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
  // const moviesString = JSON.stringify(movies)
  // console.log(movies.movies[0].title)
  // const title = movies.movies[0].title
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

    heading.textContent = 'Movie'
    title.textContent = 'Title: ' + collection[i].title
    director.textContent = 'Director: ' + collection[i].director
    releaseYear.textContent = 'Release Year: ' + collection[i].releaseYear
    genre.textContent = 'Genre: ' + collection[i].genre
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
  }
}
const onShowMoviesFailure = function (response) {
  console.log(response)
  $('#message').text('Unable to retrieve your collection, try again.')
}
module.exports = {
  onAddMovieSuccess: onAddMovieSuccess,
  onAddMovieFailure: onAddMovieFailure,
  onShowMoviesSuccess: onShowMoviesSuccess,
  onShowMoviesFailure: onShowMoviesFailure
}
