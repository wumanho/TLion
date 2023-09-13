/**
 * IOC 容器对象
 * 初始化及注入等相关装饰器，都会以来这个静态工厂类
 */
export default class BeanFactory {
  private static beanMapper = new Map<string, any>()

  public static addBean(className: string, beanClass: any) {
    this.beanMapper.set(className, beanClass)
  }

  public static getBean(className: string): any {
    return this.beanMapper.get(className)
  }
}
