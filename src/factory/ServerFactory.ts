/**
 * ServerFactory 抽象类，用于对底层 web 服务的封装
 */
export default abstract class ServerFactory {
  protected middlewareList: Array<any> = []
  public abstract setMiddleware(middleware: any): void
  public abstract start(port: number): void
}
