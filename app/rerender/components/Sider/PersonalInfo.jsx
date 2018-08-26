/* eslint-disable global-require */
import React, {Component, Fragment} from 'react'
import style from './PersonalInfo.scss'

const PREFIX = 'elec_personal_container'
const NUMBER_ACTIVE = 999999

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      name: '',
      pass: ''
    }
    this.showLogin = this
      .showLogin
      .bind(this)
    this.login = this
      .login
      .bind(this)
  }

  showLogin() {
    this.setState({isShow: !this.state.isShow})
  }

  login() {
    this.setState({isShow: !this.state.isShow})
    console.log(this.state)
  }

  render() {
    const { isShow } = this.state;
    return (
      <Fragment>
        <div className={style[`${PREFIX}`]}>
          <div className={style[`${PREFIX}_avator`]}>
            <img src={require('../../static/imgs/avator.png')} alt="avator" title="avator"/>
          </div>
          <div className={style[`${PREFIX}_info`]}>
            <div className={style[`${PREFIX}_header`]}>
              <span>个人详情</span>
            </div>
            <div className={style[`${PREFIX}_scroll`]}>
              <div className={style[`${PREFIX}_col`]}>
                <ul>
                  <li className={style[`${PREFIX}_inf`]}>
                    <a href="#">
                      <strong>{Math.floor(NUMBER_ACTIVE >= 1000
                          ? NUMBER_ACTIVE / 1000
                          : NUMBER_ACTIVE)}k</strong>
                      <span>动态</span>
                    </a>
                  </li>
                  <li className={style[`${PREFIX}_inf`]}>
                    <a href="#">
                      <strong>{Math.floor(NUMBER_ACTIVE >= 1000
                          ? NUMBER_ACTIVE / 1000
                          : NUMBER_ACTIVE)}k</strong>
                      <span>关注</span>
                    </a>
                  </li>
                  <li className={style[`${PREFIX}_inf`]}>
                    <a href="#">
                      <strong>{Math.floor(NUMBER_ACTIVE >= 1000
                          ? NUMBER_ACTIVE / 1000
                          : NUMBER_ACTIVE)}k</strong>
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
                      人世间的奋斗莫过于最幸福与最不幸福之间。因为结果永远迷幻着我们。 人世间的奋斗莫过于最幸福与最不幸福之间。因为结果永远迷幻着我们。
                    </p>
                  </li>
                  <li>
                    <span>年龄</span>
                    <p>25</p>
                  </li>
                  <li>
                    <span>所在地区</span>
                    <p>
                      新疆,伊犁哈萨克自治州,伊犁哈萨克自治州
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style[`${PREFIX}_login`]}>
            {isShow
              ?
                <div>
                  name：<input type="text" onChange={(e) => this.setState({name: e.target.value})} />
                  password:
                  <input type="password" name="" id="" onChange={(e) => this.setState({pass: e.target.value})}/>
                  <button onClick={this.login}>登陆</button>
                </div>
              :
                <div className={style[`${PREFIX}_login_btn`]}>
                  <button onClick={this.showLogin}>登陆</button>
                  <button>注销</button>
                </div>
}
          </div>
        </div>
      </Fragment>
    )
  }
}
