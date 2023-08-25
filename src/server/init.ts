import { IncomingMessage, ServerResponse, createServer } from 'http'

const server = createServer((req: IncomingMessage, resp: ServerResponse) => {
  resp.end('Hello World')
})

export default server
