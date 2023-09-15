import { Injectable, get, autoware } from '../../decorator/index'
import SecondPage from './SecondPage.provide'

@Injectable
export default class FirstPage {
  @autoware
  private second: SecondPage

  @get('/first')
  public firstPage(req: any, res: any) {
    console.log('FirstPage index running')
    this.second.print()
    res.send('FirstPage index running')
  }

  public print() {
    console.log('I am first Page')
  }
}
