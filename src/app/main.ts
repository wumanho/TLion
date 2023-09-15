import TLion from '../index'
import ExpressServer from '../server/ExpressServer'

function start() {
  const app = new TLion()
  app.create(new ExpressServer())
}

start()
