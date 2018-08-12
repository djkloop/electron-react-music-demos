import React, { Component } from 'react'
import Icon from '@material-ui/core/Icon'
import style from './Left.scss'

const PREFIX = "elec_left_container"

const musicData = [
  {
    id: '1',
    name: 'Take Me To Infini ',
    author: 'Consoul Trainin'
  },
  {
    id: '2',
    name: 'Trip',
    author: 'Axero'
  },
  {
    id: '3',
    name: 'Intro',
    author: 'The xx'
  },
  {
    id: '4',
    name: 'Wild',
    author: 'Monogem'
  },
  {
    id: '15',
    name: 'Life',
    author: 'Tobu'
  },
  {
    id: '11',
    name: 'I Am You',
    author: 'Kim Taylor'
  },
  {
    id: '12',
    name: 'Alone',
    author: 'Alan Walker'
  },
  {
    id: '21',
    name: 'You',
    author: 'Approaching Nirvana'
  },
  {
    id: '27',
    name: 'She',
    author: 'Groove Coverage'
  },
  {
    id: '271',
    name: 'Energy Drink',
    author: 'Virtual Riot'
  }
]

export default class LeftMain extends Component {
  render() {
    return (
      <div className={style[PREFIX]}>
        <div className={style[`${PREFIX}_head`]}>
          <h3>猜您喜欢</h3>
        </div>
        <div className={style[`${PREFIX}_list`]}>
          {
            musicData.length
            ?
              <ul>
                {
                  musicData.map((music, index) => (
                    <li key={music.id} className={style[`${PREFIX}_item`]}>
                      <div className={style[`${PREFIX}_line_title`]}>{index + 1}.{music.name} <span className={style[`${PREFIX}_item_autor`]}> - {music.author}</span></div>
                      <Icon style={{ fontSize: 18, color: `${index > 3 ? 'white' : 'red'}` }}>{index > 3 ? `favorite_border` : `favorite`}</Icon>
                    </li>
                  ))
                }
              </ul>
            :
              <div className="no-data-for-list">
                <Icon style={{fontSize: 26}}>favorite</Icon>
                <h5>暂无喜欢列表</h5>
              </div>
          }
        </div>
      </div>
    )
  }
}
