import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <footer className={style.elec_footer_container}>
        <div className={`${style.elec_footer_container_item} ${style.elec_footer_container_hue}`}>
          <FontAwesomeIcon className={style.elec_footer_container_icon} icon="heart" />
        </div>
        <div className={style.elec_footer_container_item}>
          <span className={style.elec_footer_container_hue}>Copyright</span>
          <FontAwesomeIcon size="xs" inverse icon="copyright" />
          <span>2018 djkloop出品</span>
        </div>
      </footer>
    )
  }
}
