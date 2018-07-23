// @flow
import * as React from 'react';
import Header from './components/Header/Header';
import Sider from './components/Sider/Sider';
import Footer from './components/Footer/Footer';

// const GLOBAL_ENV = process.env.NODE_ENV;
type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <Sider />
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
