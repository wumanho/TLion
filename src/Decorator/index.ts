/**
 * 实现所有装饰器
 */
import 'reflect-metadata'
import BeanFactory from '../factory/BeanFactory'
export * from './router'

// @autoware 用于自动注入对象
export function autoware(target: any, propertyName: string): void {
  const type = Reflect.getMetadata('design:type', target, propertyName)
  // 从容器中返回 bean 实例
  Object.defineProperty(target, propertyName, {
    get: () => BeanFactory.getBean(type.name)
  })
}

// @Injectable 用于初始化应用程序
export function Injectable(target: any): void {
  BeanFactory.addBean(target.name, new target())
}
