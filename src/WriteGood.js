import React from 'react';
import writeGood from 'write-good';
import styled from 'styled-components';




class WriteGood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text } = this.props;
    return <div>{writeGood(text).map(({ suggestion }) => suggestion)}</div>;
  }
}


export default WriteGood;
