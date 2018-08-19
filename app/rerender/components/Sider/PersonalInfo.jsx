/* eslint-disable global-require */
import React, { Component, Fragment } from 'react'
import style from './PersonalInfo.scss'

const PREFIX = 'elec_personal_container'
const NUMBER_ACTIVE = 999999

export default class PersonalInfo extends Component {
  render() {
    return (
      <Fragment>
        <div className={style[`${PREFIX}`]}>
          <div className={style[`${PREFIX}_avator`]}>
            <img src={require('../../static/imgs/avator.png')} alt="avator" title="avator" />
          </div>
          <div className={style[`${PREFIX}_info`]}>
            <div className={style[`${PREFIX}_header`]}>
                <span>个人详情</span>
              </div>
            <div className={style[`${PREFIX}_scroll`]}>
              <div className={style[`${PREFIX}_col`]}>
              <ul>
                <li className={style[`${PREFIX}_inf`]}>
                  <a href="javascript:;">
                    <strong>{Math.floor(NUMBER_ACTIVE >= 1000 ? NUMBER_ACTIVE / 1000 : NUMBER_ACTIVE)}k</strong>
                    <span>动态</span>
                  </a>
                </li>
                <li className={style[`${PREFIX}_inf`]}>
                  <a href="javascript:;">
                    <strong>{Math.floor(NUMBER_ACTIVE >= 1000 ? NUMBER_ACTIVE / 1000 : NUMBER_ACTIVE)}k</strong>
                    <span>关注</span>
                  </a>
                </li>
                <li className={style[`${PREFIX}_inf`]}>
                  <a href="javascript:;">
                    <strong>{Math.floor(NUMBER_ACTIVE >= 1000 ? NUMBER_ACTIVE / 1000 : NUMBER_ACTIVE)}k</strong>
                    <span>粉丝</span>
                  </a>
                </li>
              </ul>
            </div>
              <div className={style[`${PREFIX}_content`]}>
              <ul>
                <li>
                  <span>个人介绍</span>
                  <p>
                    人世间的奋斗莫过于最幸福与最不幸福之间。因为结果永远迷幻着我们。
                    人世间的奋斗莫过于最幸福与最不幸福之间。因为结果永远迷幻着我们。
                  </p>
                </li>
                <li>
                  <span>年龄</span>
                  <p>25</p>
                </li>
                <li>
                  <span>所在地区</span>
                  <p>
                    新疆,伊犁哈萨克自治州
                  </p>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
