'use strict'

const authEvents = require('./auth/events')
const movieEvents = require('./movie/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#sign-out-button').hide()
  $('#add-movie-form').hide()
  $('#change-password-button').hide()
  $('#add-movie-button').hide()
  $('#show-movie-button').hide()
  $('#change-password-form').hide()
  $('#sign-up-button').on('click', () => {
    $('#sign-up-form').toggle()
    $('#sign-in-form').hide()
    $('#change-password-form').hide()
  })
  $('#sign-in-button').on('click', () => {
    $('#sign-in-form').toggle()
    $('#sign-up-form').hide()
    $('#change-password-form').hide()
  })
  $('#change-password-button').on('click', () => {
    $('#change-password-form').toggle()
    $('#add-movie-form').hide()
    $('#collection-view').text('')
  })
  $('#add-movie-button').on('click', () => {
    $('#add-movie-form').toggle()
    $('#change-password-form').hide()
  })
  $('#add-movie-button').on('click', () => { $('#message').empty() })
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#add-movie-form').on('submit', movieEvents.onAddMovie)
  $('#show-movie-button').on('click', movieEvents.onShowMovies)
  $('#collection-view').on('submit', '.movie-update', movieEvents.onUpdateMovie)
  $('#collection-view').on('click', '#delete-button', movieEvents.onDeleteMovie)
  $('#collection-view').on('click', '#update-button', () => {
    $('.movie-update').show()
    $('#message').text('Please update your movie')
  })
  $('#collection-view').on('click', '#cancel-button', () => { $('.movie-update').hide() })
})
