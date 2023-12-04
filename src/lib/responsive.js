/*
 * responsive Higher Order Component For easy-reveal
 *
 * Copyright © Chetraj Gautam 2023
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withReveal from './withReveal';

function responsive(WrappedComponent, { effect, breakpoint = '768px', ...rest } = { breakpoint: '768px' }) {

  const RevealedComponent = withReveal(WrappedComponent, effect);

  return class extends React.Component {

    constructor(props) {
      super(props);
      this.mql = false;
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        match: true,
        isClicked: false,
      };
    }

    handleChange(e) {
      this.setState({ match: e.matches, isClicked: false });
    }

    handleClick() {
      this.setState({ isClicked: !this.state.isClicked });
    }

    newQuery(query) {
      this.unlisten();
      if ('matchMedia' in window) {
        this.mql = window.matchMedia(`(min-width: ${breakpoint})`);
        this.handleChange(this.mql);
        this.mql.addListener(this.handleChange);
      }
    }

    unlisten() {
      if (this.mql)
        this.mql.removeListener(this.handleChange);
    }

    componentWillUnmount() {
      this.unlisten();
    }

    componentDidMount() {
      this.newQuery(this.props.query);
    }

    componentDidUpdate(prevProps) {
      if (this.props.query !== prevProps.query) {
        this.newQuery(this.props.query);
      }
    }

    // UNSAFE_componentWillReceiveProps({ query }) {
    //   this.newQuery(query);
    // }  //  depreciated in 10th releases of this package


    render() {
      return (
        <RevealedComponent
          {...this.props}
          belowBreakpoint={!this.state.match}
          toggle={this.handleClick}
          isToggled={this.state.isClicked}
          collapse={!this.state.match}
          disabled={this.props.disableAboveBreakpoint && this.state.match}
          when={this.state.match || this.state.isClicked}
          collapseOnly={!this.state.match}
        />
      );
    }

  };
}

export default responsive;
