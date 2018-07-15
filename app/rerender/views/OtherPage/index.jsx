// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer  } from 'mobx-react'
import NativeElectronNotification from '../../native_electron_components/notification'
import otherStyle from './Other.scss'


@inject(root => ({app: root.combineStore.app}))
@observer
export default class OtherPage extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {};
    this.index = 0;
    this.nativeElectronNotification = new NativeElectronNotification();
  }

  async handleClick(e) {
    e.preventDefault();
    this.index += 1;
    this.nativeElectronNotification.notify(`这是第${this.index}条测试标题`, `${this.index > 3 ? `别鸡儿点了...` : `当前是第${this.index}条内容` }     这是内容内容内容这是内容内容内容这是内容内容内容`);
    this.btn.classList.remove('animate');
    this.btn.classList.add('animate');
    setTimeout(() => {
      this.btn.classList.remove('animate');
    }, 350);
  }



  render() {
    return (
      <div className={otherStyle['other-container']}>
        <Link to="/">
          <button className={otherStyle['other-container--btn']}>返回首页</button>
        </Link>
        {this.props.app.count}
        <button ref={btn => {this.btn = btn}} onClick={(e) => this.handleClick(e)} className={otherStyle['other-container-btn']}>
          Click Me!!
        </button>
      </div>
    )
  }
}
