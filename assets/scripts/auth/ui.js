'use strict'
const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('You have successfully signed up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}
const onSignUpFailure = function () {
  $('#message').text('Sign up failed, please try again')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}
const onSignInSuccess = function (response) {
  store.user = response.user
  console.log(store.user)
  $('#message').text('You have successfully signed in ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
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
  $('#message').text('You have successfully signed out ' + store.user.email)
  $('#sign-out-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
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
