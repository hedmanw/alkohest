import akka.actor.ActorSystem
import javax.servlet.ServletContext
import org.scalatra.LifeCycle
import se.alkohest.client.api.CoursesApi

class ScalatraBootstrap extends LifeCycle with DatabaseInit {
  //  implicit val swagger = new SwaggerApp

  override def init(context: ServletContext) {
    implicit val system = ActorSystem("appActorSystem")

    configureDb()

    try {
      context mount (new CoursesApi, "/course/*")

      //      context mount (new ResourcesApp, "/api-docs/*")
    } catch {
      case e: Throwable => e.printStackTrace()
    }
  }

  override def destroy(context: ServletContext): Unit = {
    closeDbConnection()
  }
}