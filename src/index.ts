import ServerFactory from './factory/ServerFactory'
import BeanFactory from './factory/BeanFactory'
import 'reflect-metadata'

/**
 * TLion 主类
 */
export default class TLion {
  /**
   * 创建服务器，启动项目
   * 1、初始化 Modules
   * 2、启动 http 服务
   * @param module
   * @param httpServer
   */
  public create(module: any, httpServer: ServerFactory) {
    this.registerModules(module)
    httpServer.start(3000)
  }

  /**
   * 递归函数，用于初始化所有 Module
   * @param module 每一个被 @Module 修饰的类
   */
  private registerModules(module: any) {
    BeanFactory.addBean(module.name, new module())
    const modules = Reflect.getMetadata('imports', module)
    if (modules) {
      for (const innerModule of modules) {
        this.registerModules(innerModule)
      }
    }
  }
}
