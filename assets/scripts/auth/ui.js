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
  $('#movie-collection-heading').text(`${userEmail[0].toUpperCase()}'s Movie Collection"`)
  $('#message').text('You have successfully signed in as ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
  $('#sign-in-form').hide()
  $('#change-password-button').show(300, 'linear')
  $('#add-movie-button').show(300, 'linear')
  $('#show-movie-button').show(300, 'linear')
  $('#sign-out-button').show(300, 'linear')
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
  $('#change-password-form').hide()
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
  $('#sign-up-button').show(300, 'linear')
  $('#sign-in-button').show(300, 'linear')
  $('#change-password-button').hide()
  $('#sign-out-button').hide()
  $('#add-movie-button').hide()
  $('#show-movie-button').hide()
  $('#collection-view').text('')
  $('#collection-view').hide()
  $('#collection-size').text('')
  $('#add-movie-form').hide()
  $('#change-password-form').hide()
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
