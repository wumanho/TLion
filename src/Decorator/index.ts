/**
 * 实现所有装饰器
 */
import 'reflect-metadata'
import BeanFactory from '../factory/BeanFactory'

// @bean 用于初始化对象到容器中
export function bean(target: any, propertyName: string, desc: PropertyDescriptor) {
  const returnType = Reflect.getMetadata('design:returntype', target, propertyName)
  BeanFactory.addBean(returnType, target[propertyName])
}

// @autoware 用于自动注入对象
export function autoware(target: any, propertyName: string): void {
  const type = Reflect.getMetadata('design:type', target, propertyName)
  // 从容器中返回 bean 实例
  Object.defineProperty(target, propertyName, {
    get: () => {
      const beanConstructor = BeanFactory.getBean(type)
      return beanConstructor()
    }
  })
}

// @lion 用于初始化应用程序
export function lion<T extends { new (...args: any[]): {} }>(constructor: T) {
  ;(async function () {
    // app 入口
    const main = new constructor()
    main['main']()
  })()
}
