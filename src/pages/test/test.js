import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './test.less'

@inject('stores')
@observer
export default class Test extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  add() {
    this.props.stores.testStore.add();
  }

  render () {
    const { testStore: { pageName, num } } = this.props.stores;
    return (
      <View className='index'>
        <Text>{pageName}</Text>
        <Text>{num}</Text>
        <Button onClick={this.add}>ADD</Button>
      </View>
    )
  }
}

