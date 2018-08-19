// @flow
import * as React from 'react'
import Sider from '../Sider/Sider'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import style from './Main.scss'

type Props = {
  children: React.ReactNode
};

export default class Main extends React.Component<Props> {

  render() {
    return (
      <div className={style.elec_container}>
        <Sider />
        <main className={style.elec_main_container}>
          <Header />
          {
            this.props.children
          }
          <Footer />
        </main>
      </div>
    )
  }
}
