import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './index.less'

@inject('stores')
@observer
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  add() {
    this.props.stores.indexStore.add();
  }

  toTest(){
    Taro.navigateTo({
      url:'/pages/test/test',
    })
  }

  render() {
    const { indexStore: { pageName, num } } = this.props.stores;
    return (
      <View className='index'>
        <Text>{pageName}</Text>
        <Text>{num}</Text>
        <Button onClick={this.add}>ADD</Button>
        <Button onClick={this.toTest}>toTest</Button>
      </View>
    )
  }
}

