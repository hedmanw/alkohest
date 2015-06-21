package se.alkohest.client.model

import org.squeryl.PrimitiveTypeMode._

class Course(val id: Long, val code: String, val name: String, val url: String, val fire: Option[String]) extends ScalatraRecord {
  def this() = this(0, "ABC123", "Testkurs", "http://internets.com", None)
}

object Course {
  def create(course: Course): Boolean = {
    inTransaction {
      val result = CourseData.courses.insert(course)
      result.isPersisted
    }
  }
}