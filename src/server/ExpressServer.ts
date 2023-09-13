import express from 'express'
import ServerFactory from '../factory/ServerFactory'
import { initRouters } from '../router/index'

/**
 * Express 类实现，继承自抽象类 ServerFactiry
 */
export default class ExpressServer extends ServerFactory {
  protected middlewareList: Array<any> = []

  public setMiddleware(middleware: any) {
    this.middlewareList.push(middleware)
  }

  public start(port: number = 3000) {
    const app: express.Application = express()
    // 注册中间件
    this.middlewareList.forEach((middleware) => {
      app.use(middleware)
    })
    // 注册路由
    initRouters(app)
    // 启动服务
    app.listen(port, () => {
      console.log(`server is running at http://localhost:${port}`)
    })
  }
}
