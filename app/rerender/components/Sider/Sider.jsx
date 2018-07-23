import React, { Component } from 'react'
import { ulid } from 'ulid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SiderList from './SiderList'
import style from './Sider.scss'

const SiderListData = [
  {
   title: '推荐',
   result: [{
      icon: 'music',
      name: '歌曲'
    },
    {
      icon: 'dot-circle',
      name: '专辑'
    },
    {
      icon: 'user-circle',
      name: '艺术家'
    },
    {
      icon: 'folder',
      name: '本地文件'
    }]
  },
  {
    title: '创建的歌单',
    result: [{
      uuid: ulid(),
      date: '1999-12-31',
      icon: 'list',
      name: 'Lowfi Chill6'
    },
    {
      uuid: ulid(),
      date: '1999-12-31',
      icon: 'list',
      name: 'Lowfi Chill5'
    },
    {
      uuid: ulid(),
      date: '1999-12-31',
      name: 'Lowfi Chill4',
      icon: 'list'
    },
    {
      uuid: ulid(),
      date: '1999-12-31',
      name: 'Lowfi Chill1',
      icon: 'list'
    },
    {
      uuid: ulid(),
      date: '1999-12-31',
      name: 'Lowfi Chill2',
      icon: 'list'
    },
    {
      uuid: ulid(),
      date: '1999-12-31',
      name: 'Lowfi Chill3',
      icon: 'list'
  }]
  }
]

export default class Nav extends Component {
  render() {
    return (
      <div className={style.elec_sider_container}>
        <div className={style.elec_sider_container_sider}>
          <FontAwesomeIcon className={style.elec_sider_container_sider_back} icon="chevron-right" />
          <h5>djkloop</h5>
          <SiderList style={style} silderList={SiderListData} />
        </div>
      </div>
    )
  }
}
