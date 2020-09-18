'use strict'

const events = require('./events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password-form').hide()
  $('#sign-up-button').on('click', () => {
    $('#sign-up-form').show()
  })
  $('#sign-in-button').on('click', () => {
    $('#sign-in-form').show()
  })
  $('#change-password-button').on('click', () => {
    $('#change-password-form').show()
  })
})
