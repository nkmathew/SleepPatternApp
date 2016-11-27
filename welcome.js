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

  constructor() {
    super();
    this.sleepData = new SleepData();
    this.state = {
      buttonText: 'Going to Sleep'
    }
  }

  buttonPress() {
    this.sleepData.startSleeping(this);
    this.sleepData.renderData(this);
    // this.setState({joke: 'Another joke'});
    // console.log('Sleep Joke: ', this.state.joke);
  }

  render() {
    return (
      <Content>
        <Button success rounded onPress={this.buttonPress.bind(this)}>
          <Icon name='md-timer'/>
          {this.state.buttonText}
        </Button>
      </Content>
    )
  }
}
