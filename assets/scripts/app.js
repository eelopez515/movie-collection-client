'use strict'

const authEvents = require('./auth/events')
const movieEvents = require('./movie/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#add-movie-button').on('click', () => { $('#message').empty() })
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#add-movie-form').on('submit', movieEvents.onAddMovie)
  $('#show-movie-button').on('click', movieEvents.onShowMovies)
  $('#collection-view').on('click', '#update-button', movieEvents.onUpdateMovie)
  $('#collection-view').on('click', '#delete-button', movieEvents.onDeleteMovie)
})
