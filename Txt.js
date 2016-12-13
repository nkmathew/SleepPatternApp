import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Txt extends Component {
  render() {
    return (
      <Text style={{color:'#ddd'}}>
        {this.props.children}
      </Text>
    )
  }
}
