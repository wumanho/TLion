import { Module } from '../../decorator'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'

@Module({
  imports: [FirstPage, SecondPage]
})
export default class AppModule {}
