package se.alkohest.client.model

case class Error(
  code: Int,
  message: String,
  fields: String)
