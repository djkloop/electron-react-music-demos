// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styles from './Home.scss';

export default class HomePage extends Component<Props> {
  render() {
    return (
      <div className={styles.elec_main_container_content}>
        <div data-tid="container">
          <h2>Home</h2>
        </div>
      </div>
    );
  }
}
