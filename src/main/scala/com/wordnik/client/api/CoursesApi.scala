package com.wordnik.client.api

import com.wordnik.client.model.Error
import com.wordnik.client.model.Course

import java.io.File

import org.scalatra.{ TypedParamSupport, ScalatraServlet }
import org.scalatra.swagger._
import org.json4s._
import org.json4s.JsonDSL._
import org.scalatra.json.{ JValueResult, JacksonJsonSupport }
import org.scalatra.servlet.{FileUploadSupport, MultipartConfig, SizeConstraintExceededException}

import scala.collection.JavaConverters._

class CoursesApi (implicit val swagger: Swagger) extends ScalatraServlet 
    with FileUploadSupport
    with JacksonJsonSupport
    with SwaggerSupport {
  protected implicit val jsonFormats: Formats = DefaultFormats

  protected val applicationDescription: String = "CoursesApi"
  override protected val applicationName: Option[String] = Some("Courses")

  before() {
    contentType = formats("json")
    response.headers += ("Access-Control-Allow-Origin" -> "*")
  }
  

  val courseGetOperation = (apiOperation[List[Course]]("courseGet")
      summary "Get all courses"
      parameters(
        )
  )

  get("/course",operation(courseGetOperation)) {
    
  }

  

  val coursePostOperation = (apiOperation[Course]("coursePost")
      summary "Create a new course"
      parameters(
        
        
        headerParam[String]("xApiKey").description("")
        
        
        
        ,
        queryParam[String]("courseCode").description("")
        
        
        
        
        
        ,
        queryParam[String]("courseName").description("")
        
        
        
        
        
        ,
        queryParam[String]("courseHomepage").description("")
        
        
        
        
        
        ,
        queryParam[String]("fireUrl").description("").optional
        
        
        
        
        
        
        )
  )

  post("/course",operation(coursePostOperation)) {
    
    
    
    

    

    
      val xApiKey = request.getHeader("xApiKey")
    

    

    
    
    println("xApiKey: " + xApiKey)
  
    
    
    

    
      
      val courseCode = params.getAs[String]("courseCode")
      
    

    

    

    
    
    println("courseCode: " + courseCode)
  
    
    
    

    
      
      val courseName = params.getAs[String]("courseName")
      
    

    

    

    
    
    println("courseName: " + courseName)
  
    
    
    

    
      
      val courseHomepage = params.getAs[String]("courseHomepage")
      
    

    

    

    
    
    println("courseHomepage: " + courseHomepage)
  
    
    
    

    
      
      val fireUrl = params.getAs[String]("fireUrl")
      
    

    

    

    
    
    println("fireUrl: " + fireUrl)
  
  }

  

  val courseIdGetOperation = (apiOperation[Course]("courseIdGet")
      summary "Get a specific course"
      parameters(
        
        pathParam[String]("id").description("")
        
        
        
        
        
        )
  )

  get("/course/{id}",operation(courseIdGetOperation)) {
    
    
    
    
      val id = params.getOrElse("id", halt(400))
    

    

    

    

    
    
    println("id: " + id)
  
  }

  

  val courseIdPostOperation = (apiOperation[Unit]("courseIdPost")
      summary "Change course details"
      parameters(
        
        
        headerParam[String]("xApiKey").description("")
        
        
        
        ,
        
        pathParam[String]("id").description("")
        
        
        
        
        ,
        queryParam[String]("courseCode").description("")
        
        
        
        
        
        ,
        queryParam[String]("courseName").description("")
        
        
        
        
        
        ,
        queryParam[String]("courseHomepage").description("")
        
        
        
        
        
        ,
        queryParam[String]("fireUrl").description("").optional
        
        
        
        
        
        
        )
  )

  post("/course/{id}",operation(courseIdPostOperation)) {
    
    
    
    

    

    
      val xApiKey = request.getHeader("xApiKey")
    

    

    
    
    println("xApiKey: " + xApiKey)
  
    
    
    
      val id = params.getOrElse("id", halt(400))
    

    

    

    

    
    
    println("id: " + id)
  
    
    
    

    
      
      val courseCode = params.getAs[String]("courseCode")
      
    

    

    

    
    
    println("courseCode: " + courseCode)
  
    
    
    

    
      
      val courseName = params.getAs[String]("courseName")
      
    

    

    

    
    
    println("courseName: " + courseName)
  
    
    
    

    
      
      val courseHomepage = params.getAs[String]("courseHomepage")
      
    

    

    

    
    
    println("courseHomepage: " + courseHomepage)
  
    
    
    

    
      
      val fireUrl = params.getAs[String]("fireUrl")
      
    

    

    

    
    
    println("fireUrl: " + fireUrl)
  
  }

  

  val courseIdDeleteOperation = (apiOperation[Unit]("courseIdDelete")
      summary "Delete course!"
      parameters(
        
        
        headerParam[String]("xApiKey").description("")
        
        
        
        ,
        
        pathParam[String]("id").description("")
        
        
        
        
        
        )
  )

  delete("/course/{id}",operation(courseIdDeleteOperation)) {
    
    
    
    

    

    
      val xApiKey = request.getHeader("xApiKey")
    

    

    
    
    println("xApiKey: " + xApiKey)
  
    
    
    
      val id = params.getOrElse("id", halt(400))
    

    

    

    

    
    
    println("id: " + id)
  
  }

}