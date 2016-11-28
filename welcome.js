import React, { Component } from 'react';
import { View, Text, ScrollView, Navigator } from 'react-native';

import {
  Container,
  Content,
  Header,
  Title,
  H1,
  Spinner,
  Footer,
  FooterTab,
  Badge,
  Button,
  Icon,
  List,
  ListItem,
  Card,
  CardItem,
  Image,
  Thumbnail,
  Fab,
  Col
} from 'native-base';

import Txt from './Txt';
import SleepData from './SleepData';

export default class Welcome extends Component {

  constructor(props) {
    super(props);
    this.sleepData = new SleepData();
    this.state = {
      status: this.props.status
    }
  }

  buttonPress() {
    this.sleepData.startSleeping(this);
    this.sleepData.renderData(this);
  }

  changeStatus(status) {
    // console.log('Changing status: ', status);
    this.state.status = status;
    this.props.buttonStatus(status);
  }

  render() {
    var buttonText = 'Waking up';
    var buttonColor = '#e52c0b';
    var buttonIcon = <Icon name='ios-stopwatch'/>;
    if (this.state.status == 'awake') {
      buttonText = 'Going to Sleep...';
      buttonColor = 'green';
      buttonIcon = <Icon name='ios-time'/>;
    }
    return (
      <Content>
        <Button style={{backgroundColor:buttonColor}}
          rounded onPress={this.buttonPress.bind(this)}>
          {buttonIcon}
          {buttonText}
        </Button>
      </Content>
    )
  }
}
