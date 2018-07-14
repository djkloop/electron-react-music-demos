// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer  } from 'mobx-react'


@inject(root => ({app: root.combineStore.app}))
@observer
export default class OtherPage extends Component<Props> {

  render() {
    return (
      <div>
        {this.props.app.count}
        <Link to="/">返回首页</Link>
      </div>
    )
  }
}
