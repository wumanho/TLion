/**
 * 实现所有装饰器
 */
import 'reflect-metadata'
import BeanFactory from '../factory/BeanFactory'
export * from './router'

interface ModuleMetadata {
  imports?: Array<any>
}

// @autoware 用于自动注入对象
export function autoware(target: any, propertyName: string): void {
  const type = Reflect.getMetadata('design:type', target, propertyName)
  // 从容器中返回 bean 实例
  Object.defineProperty(target, propertyName, {
    get: () => BeanFactory.getBean(type.name)
  })
}

// @Module 用于初始化应用程序
export function Module(metadata: ModuleMetadata) {
  return (target: Function) => {
    for (const property in metadata) {
      if (metadata.hasOwnProperty(property)) {
        Reflect.defineMetadata(property, (metadata as any)[property], target)
      }
    }
  }
}
