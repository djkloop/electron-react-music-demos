// @flow
import * as React from 'react';
import DevTools from 'mobx-react-devtools';

const GLOBAL_ENV = process.env.NODE_ENV;
type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        {GLOBAL_ENV === 'development' ? (
          <DevTools
            position={{
              bottom: 0,
              right: 20
            }}
          />
        ) : null}
        {this.props.children}
      </div>
    );
  }
}
