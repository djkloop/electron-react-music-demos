// @flow
import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import LeftMain from '../../components/LeftMain';
import RightMain from '../../components/RightMain';
// import { Link } from 'react-router-dom';
import styles from './Home.scss';

export default class HomePage extends Component {
  render() {
    return (
      <div className={styles.elec_main_container_content}>
        <div data-tid="container">
          <section className="s-c" style={{ marginTop: '50px' }}>
            <Carousel />
          </section>
          <div className="main-container-detail">
            <section className="s-l-m s-item">
              <LeftMain />
            </section>
            <section className="s-r-m s-item">
              <RightMain />
            </section>
          </div>
        </div>
      </div>
    );
  }
}
