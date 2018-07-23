import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Header.scss'

const {ipcRenderer: ipc} =require('electron')


const HEADER_PREFIX = 'elec_header_container'

export default class Header extends Component {
  constructor(props) {

    super(props);
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick(type) {
    console.log(this);
    console.log(type, ipc)
    ipc.send(type);
  }

  render() {
    return (
      <header className={style.elec_header_container}>
        <div className={style[`${HEADER_PREFIX}_right`]}>
          <ul className={style[`${HEADER_PREFIX}_dot_container`]}>
            <FontAwesomeIcon onClick={() => this.HandleClick('close')} className={style[`${HEADER_PREFIX}_dot`]} size="xs" icon="times-circle" />
            <FontAwesomeIcon onClick={() => this.HandleClick('min')} className={style[`${HEADER_PREFIX}_dot`]} size="xs" icon="minus-circle" />
            <FontAwesomeIcon onClick={() => this.HandleClick('max')} className={style[`${HEADER_PREFIX}_dot`]} size="xs" icon="plus-circle" />
          </ul>
        </div>
      </header>
    )
  }
}
