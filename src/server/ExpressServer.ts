import express from 'express'
import ServerFactory from '../factory/ServerFactory'
import { bean } from '../decorator/index'

/**
 * Express 类实现，继承自抽象类 ServerFactiry
 */
export default class ExpressServer extends ServerFactory {
  protected middlewareList: Array<any> = []

  @bean
  public getServer(): ExpressServer {
    return new ExpressServer()
  }

  public setMiddleware(middleware: any) {
    this.middlewareList.push(middleware)
  }

  public start(port: number) {
    const app: express.Application = express()
    this.middlewareList.forEach((middleware) => {
      app.use(middleware)
    })
    app.listen(port, () => {
      console.log(`server is running at http://localhost:${port}`)
    })
  }
}
