import React, { Component } from 'react';
import { View, Text, ScrollView, Navigator } from 'react-native';
import { Content, Button } from 'native-base';

export default class Welcome extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Content>
        <Text>Welcome page</Text>
      </Content>
    )
  }
}
