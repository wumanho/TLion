import { Module, get } from '../../decorator/index'

@Module({})
export default class SecondPage {
  @get('/second')
  public secondPage(req: any, res: any) {
    console.log('SecondPage index running')
    res.send('SecondPage index running')
  }
  public print() {
    console.log('I am second Page')
  }
}
