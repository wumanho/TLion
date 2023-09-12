import { autoware, lion } from './decorator'
import ExpressServer from './server/ExpressServer'

@lion
class Main {
  
  @autoware
  public server: ExpressServer

  public main() {
    this.server.start(3000)
    console.log('server is running')
  }
}
