import React, { Component } from 'react'
import Icon from '@material-ui/core/Icon'
import style from './Right.scss'

const PREFIX = "elec_right_container"

const waitPlayData = [
  {
    id: 2,
    imgUrl: 'http://p3.music.126.net/t-AMCXgdN807G0OJxgvdng==/17781302044549931.jpg?param=120y120',
    name: '野猫',
    author: '藤乐队',
    isFav: true
  },
  {
    id: 1,
    imgUrl: 'http://p3.music.126.net/YGkMrDa6gmK8NHwxF5ILPw==/2540971374738594.jpg?param=120y120',
    name: 'Fade',
    author: 'Alan Walker',
    isFav: true
  }

]

export default class LeftMain extends Component {
  render() {
    return (
      <div className={style[PREFIX]}>
        <div className={style[`${PREFIX}_head`]}>
          <h3>等待播放</h3>
        </div>
        <div className={style[`${PREFIX}_list`]}>
          {
            waitPlayData.length
            ?
              <ul>
                {
                  waitPlayData.map((play, index) => (
                    <li key={play.id} className={style[`${PREFIX}_item`]}>
                      <div className={style[`${PREFIX}_item_left`]}>
                        <img src={play.imgUrl} width="64" height="64"  alt={play.name} />
                        <div className={style[`${PREFIX}_right`]}>
                          <h2>{play.name}</h2>
                          <h3>{play.author}</h3>
                        </div>
                      </div>
                      <Icon style={{margin: '17px 24px 0',textShadow: '0 2px 2px rgba(0, 0, 0, .5)', fontSize: 18, color: `${index > 3 ? 'white' : 'red'}` }}>{index > 3 ? `favorite_border` : `favorite`}</Icon>
                    </li>
                  ))
                }
              </ul>
            :
              <div className="no-data-for-list">
                <Icon style={{fontSize: 26}}>disc_full</Icon>
                <h5>暂无播放列表</h5>
              </div>
          }
        </div>
      </div>
    )
  }
}
