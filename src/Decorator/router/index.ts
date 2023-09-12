type CallbackMapper = {
  method: string
  cb: Function
}

// 路由 & callback 映射关系
const routerMap = new Map<string, CallbackMapper>()

// 实现请求方法装饰器逻辑
function settleRouterDecorators(path: string, method: string) {
  return (target: any, propertyKey: string) => {
    routerMap.set(path, {
      method,
      cb: target[propertyKey]
    })
  }
}

function get(path: string) {
  return settleRouterDecorators(path, 'get')
}

function post(path: string) {
  return settleRouterDecorators(path, 'post')
}

function put(path: string) {
  return settleRouterDecorators(path, 'put')
}

function del(path: string) {
  return settleRouterDecorators(path, 'delete')
}

export { get, post, put, del }
