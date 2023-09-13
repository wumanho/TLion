import TLion from '../index'
import AppModule from './modules/AppModule'
import ExpressServer from '../server/ExpressServer'

function start() {
  const app = new TLion()
  app.create(AppModule, new ExpressServer())
}

start()
