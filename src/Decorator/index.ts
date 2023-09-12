/**
 * 实现所有装饰器
 */
import 'reflect-metadata'
import BeanFactory from 'src/factory/BeanFactory'

// @bean 用于初始化对象到容器中
export function bean(target: any, propertyName: string, desc: PropertyDescriptor) {
  const returnType = Reflect.getMetadata('design:returntype', target, propertyName)
  BeanFactory.addBean(returnType, target[propertyName])
}

// @lion 用于初始化应用程序
export function lion<T extends { new (...args: any[]): {} }>(constructor: T) {
  ;(async function () {
    // app 入口
    const main = new constructor()
    main['main']()
  })()
}
