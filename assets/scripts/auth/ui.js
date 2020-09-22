'use strict'
const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('You have successfully signed up as ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#sign-up-form').hide()
}
const onSignUpFailure = function () {
  $('#message').text('Sign up failed, please try again')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}
const onSignInSuccess = function (response) {
  store.user = response.user
  let userEmail = response.user.email
  userEmail = JSON.stringify(userEmail)
  userEmail = userEmail.split('@')
  console.log(userEmail)
  $('#movie-collection-heading').text(`${userEmail[0].toUpperCase()}'s Movie Collection"`)
  $('#message').text('You have successfully signed in as ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
  $('#sign-in-form').hide()
  $('#change-password-button').show()
  $('#add-movie-button').show()
  $('#show-movie-button').show()
  $('#sign-out-button').show()
}
const onSignInFailure = function () {
  $('#message').text('Sign up failed, please try again')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}
const onChangePasswordSuccess = function (response) {
  $('#message').text('You have successfully changed your password ' + store.user.email)
  $('#change-password-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#sign-out-form').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('#message').text('Failed to change password, try again please.')
  $('#change-password-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#sign-out-form').trigger('reset')
}
const onSignOutSuccess = function (response) {
  $('#movie-collection-heading').text('')
  $('#message').text('You have successfully signed out ' + store.user.email)
  $('#sign-out-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  $('#change-password-button').hide()
  $('#sign-out-button').hide()
}
const onSignOutFailure = function () {
  $('#message').text('Failed to sign out, try again')
  $('#sign-out-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFailure: onChangePasswordFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure
}
