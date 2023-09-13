import express from 'express'
import { routerMap } from '../decorator/index'

// 获取所有路由装饰器的结果并注册到 express 中
export function initRouters(app: express.Application) {
  for (const [path, mapper] of routerMap) {
    const { method, cb } = mapper
    app[method](path, cb)
  }
}
