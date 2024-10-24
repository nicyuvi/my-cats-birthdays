// Application Start
import { RouteConfig } from './App_Start/RouteConfig.js'

class MvcApplication {
  public Application_Start(): void {
    // register routes
    const route_config = new RouteConfig()
    route_config.RegisterRoutes()
  }
}

const app = new MvcApplication()
app.Application_Start()
