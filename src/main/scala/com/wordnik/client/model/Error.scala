package com.wordnik.client.model



case class Error (
  code: Int,
  message: String,
  fields: String
)
