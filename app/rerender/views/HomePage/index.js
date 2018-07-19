// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import styles from './Home.css';
import {
  changeTitle,
  getInitList
} from '../../../store/actions/app/index.actions';

@connect(state => state.appState, { changeTitle, getInitList })
export default class HomePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.handlerTitle = this.handlerTitle.bind(this);
    // this.handlerStoreTitleChange = this.handlerStoreTitleChange.bind(this);
  }

  handlerTitle() {
    console.log(this);
    this.props.changeTitle('Change Title');
  }

  // handlerStoreTitleChange() {
  //   // this.setState(store.getState());
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          {/* {this.state.appState.list.map(v => <div key={v}>{v}</div>)} */}
          <button onClick={this.handlerTitle}>修改标题</button>
          <h3>{this.props.title}</h3>
        </div>
      </div>
    );
  }
}
