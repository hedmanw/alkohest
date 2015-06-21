package se.alkohest.client.api

import org.scalatra._
import org.json4s.{ DefaultFormats, Formats }
import org.scalatra.json._
import se.alkohest.client.DatabaseSessionSupport
import se.alkohest.client.model.{ Course, CourseData }
import org.squeryl.PrimitiveTypeMode._

class CoursesApi extends ScalatraServlet with NativeJsonSupport with DatabaseSessionSupport {
  protected implicit lazy val jsonFormats: Formats = DefaultFormats

  before() {
    contentType = formats("json")
    response.headers += ("Access-Control-Allow-Origin" -> "*")
  }

  get("/") {
    from(CourseData.courses)(select(_))
  }

  //  val coursePostOperation = (apiOperation[Course]("coursePost")
  //    summary "Create a new course"
  //    parameters (
  //      headerParam[String]("xApiKey").description(""),
  //      queryParam[String]("courseCode").description(""),
  //      queryParam[String]("courseName").description(""),
  //      queryParam[String]("courseHomepage").description(""),
  //      queryParam[String]("fireUrl").description("").optional
  //    )
  //  )

  post("/course") {
    val xApiKey = request.getHeader("xApiKey")
    println("xApiKey: " + xApiKey)

  }
  //
  //  val courseIdGetOperation = (apiOperation[Course]("courseIdGet")
  //    summary "Get a specific course"
  //    parameters (
  //      pathParam[String]("id").description("")
  //    )
  //  )

  //  get("/:id") {
  //    val id = params("id").toInt
  //    CourseData.all find (_.course_id == id) match {
  //      case Some(b) => b
  //      case None => halt(404)
  //    }
  //  }

  //  val courseIdPostOperation = (apiOperation[Unit]("courseIdPost")
  //    summary "Change course details"
  //    parameters (
  //      headerParam[String]("xApiKey").description(""),
  //      pathParam[String]("id").description(""),
  //      queryParam[String]("courseCode").description(""),
  //      queryParam[String]("courseName").description(""),
  //      queryParam[String]("courseHomepage").description(""),
  //      queryParam[String]("fireUrl").description("").optional
  //    )
  //  )
  //
  //  post("/course/{id}", operation(courseIdPostOperation)) {
  //    val xApiKey = request.getHeader("xApiKey")
  //    println("xApiKey: " + xApiKey)
  //    val id = params.getOrElse("id", halt(400))
  //    println("id: " + id)
  //    val courseCode = params.getAs[String]("courseCode")
  //    println("courseCode: " + courseCode)
  //    val courseName = params.getAs[String]("courseName")
  //    println("courseName: " + courseName)
  //    val courseHomepage = params.getAs[String]("courseHomepage")
  //    println("courseHomepage: " + courseHomepage)
  //    val fireUrl = params.getAs[String]("fireUrl")
  //    println("fireUrl: " + fireUrl)
  //  }
  //
  //  val courseIdDeleteOperation = (apiOperation[Unit]("courseIdDelete")
  //    summary "Delete course!"
  //    parameters (
  //      headerParam[String]("xApiKey").description(""),
  //      pathParam[String]("id").description("")
  //    )
  //  )
  //
  //  delete("/course/{id}", operation(courseIdDeleteOperation)) {
  //    val xApiKey = request.getHeader("xApiKey")
  //    println("xApiKey: " + xApiKey)
  //    val id = params.getOrElse("id", halt(400))
  //    println("id: " + id)
  //  }
}