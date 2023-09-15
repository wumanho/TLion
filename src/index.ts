import ServerFactory from './factory/ServerFactory'
import 'reflect-metadata'
import { scanDirectory } from './utils/index'
import path from 'path'

/**
 * TLion 主类
 */
export default class TLion {
  /**
   * 创建服务器，启动项目
   * @param httpServer
   */
  public async create(httpServer: ServerFactory) {
    await this.settleAllBeans()
    httpServer.start(3000)
  }

  private async settleAllBeans() {
    const providers = scanDirectory(path.join(process.cwd()))
    for (let provider of providers) {
      await import(provider)
    }
  }
}
