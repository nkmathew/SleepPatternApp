import React, { Component } from 'react';
import { View, Text, ScrollView, Navigator } from 'react-native';

import {
  Content,
  Button,
  Icon
} from 'native-base';

import SleepData from './SleepData.js';

export default class Analytics extends Component {

  constructor() {
    super();
    this.sleepData = new SleepData();
  }

  buttonPress() {
    this.sleepData.startSleeping();
    this.sleepData.getAllRecords();
  }

  render() {
    return (
      <Content>
        <Text>Analytics page</Text>
          <Button success rounded onPress={this.buttonPress.bind(this)}>
            <Icon name='md-timer'/>
            Start Sleeping
          </Button>
      </Content>
    )
  }
}
