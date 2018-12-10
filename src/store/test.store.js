import { observable, action } from 'mobx'

class TextStore {
  @observable pageName = '小程序测试页';
  @observable num = 0;
  @action add(){
    this.num++
  }
}

export default new TextStore();
