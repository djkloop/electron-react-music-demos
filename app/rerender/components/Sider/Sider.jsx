import React, { Component } from 'react'
import { ulid } from 'ulid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import QueueAnim from 'rc-queue-anim'
import SiderList from './SiderList'
import style from './Sider.scss'

const PREFIX = 'elec_sider_container'

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
      name: 'Lowfi Chill51'
    },
    {
      uuid: ulid(),
      date: '1999-12-31',
      icon: 'list',
      name: 'Lowfi Chill52'
    },
    {
      uuid: ulid(),
      date: '1999-12-31',
      icon: 'list',
      name: 'Lowfi Chill5333'
    },
    {
      uuid: ulid(),
      date: '1999-12-31',
      icon: 'list',
      name: 'Lowfi Chill534433333'
    },
    {
      uuid: ulid(),
      date: '1999-12-31',
      name: 'Lowfi Chill4qqqqq',
      icon: 'list'
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
      name: 'Lowfi 2112ll4',
      icon: 'list'
    },
    {
      uuid: ulid(),
      date: '1999-12-31',
      name: 'L342ll4',
      icon: 'list'
    },
    {
      uuid: ulid(),
      date: '1999-12-31',
      name: 'Lo543534ll4',
      icon: 'list'
    },
    {
      uuid: ulid(),
      date: '1999-12-31',
      name: 'L123213ill1',
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
  constructor() {
    super();
    this.state = {
      isPersonal: false
    };
    this.toggleInfo = this.toggleInfo.bind(this)
  }

  toggleInfo() {
    this.setState({
      isPersonal: !this.state.isPersonal
    })
  }

  render() {
    const { isPersonal } = this.state;
    return (
      <div className={style.elec_sider_container}>
        <div className={style.elec_sider_container_sider}>
          <div className={style[`${PREFIX}_head`]}>
            <div className={style[`${PREFIX}_pulse`]}>
              <FontAwesomeIcon
                onClick={this.toggleInfo}
                size="lg"
                className={style.elec_sider_container_sider_back}
                icon={`${isPersonal ? 'headphones' : 'user'}`}
              />
              <div className={style[`${PREFIX}_ring`]} />
            </div>
            <div className={style[`${PREFIX}_tip`]}>
              {
                isPersonal
                ?
                  <span>个人中心</span>
                :
                  <span>歌曲列表</span>
              }
            </div>
          </div>
          <QueueAnim
            type="bottom"
          >
            {
                isPersonal
                ?
                  <QueueAnim
                    type="bottom"
                  >
                    <div className={style[`${PREFIX}_personal`]} key="a">
                      个人信息页面,
                      暂无数据
                    </div>
                  </QueueAnim>
                :
                  [
                    <div key="b">
                      <h5>djkloop</h5>
                      <div className={style[`${PREFIX}_list_content`]}>
                        <SiderList style={style} silderList={SiderListData} />
                      </div>
                      <div className={style[`${PREFIX}_btn-container`]}>
                        <button type="button" className={style[`${PREFIX}_create_btn`]}>创建歌单</button>
                      </div>
                    </div>
                  ]
            }
          </QueueAnim>
        </div>
      </div>
    )
  }
}
