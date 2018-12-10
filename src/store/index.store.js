import { observable, action } from 'mobx'

class IndexStore {
  @observable pageName = '小程序首页';
  @observable num = 0;
  @action add(){
    this.num++
  }
}

export default new IndexStore();
