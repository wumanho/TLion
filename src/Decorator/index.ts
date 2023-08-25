/**
 * 实现所有装饰器
 */
import 'reflect-metadata'
import BeanFactory from 'src/factory/BeanFactory'

// @bean 用于初始化对象到容器中
function bean(target: any, propertyName: string, desc: PropertyDescriptor) {
  const returnType = Reflect.getMetadata('design:returntype', target, propertyName)
  BeanFactory.addBean(returnType, target[propertyName])
}
