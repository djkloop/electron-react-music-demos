// @flow
import * as React from 'react';
import DevTools from 'mobx-react-devtools';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <DevTools
          position={{
            bottom: 0,
            right: 20
          }}
        />
        {this.props.children}
      </div>
    );
  }
}
