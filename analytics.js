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

import SleepData from './SleepData.js';

export default class Analytics extends Component {

  constructor() {
    super();
    this.sleepData = new SleepData();
    this.state = {
      isLoading: false,
      records: []
    }
  }

  buttonPress() {
    // this.sleepData.startSleeping();
    this.sleepData.renderData(this);
    // this.setState({joke: 'Another joke'});
    // console.log('Sleep Joke: ', this.state.joke);
  }

  render() {
    // this.state.records = [<Text key='1'>From the list</Text>];
    this.state.records = this.state.records.map((record, i) => {
      return (
        <ListItem key={i}>
          <Col>
            <Text>{record.id}</Text>
          </Col>
          <Col>
            <Text>{record.curr_date}</Text>
          </Col>
          <Col>
            <Text>{record.sleep_time}</Text>
          </Col>
          <Col>
            <Text>{record.wake_time}</Text>
          </Col>
        </ListItem>
      );
    });
    var t=12;
    // if (this.state.isLoading) {
    //   return (
    //     <Content>
    //       <Text>Loading...</Text>
    //     <Content>
    //   );
    // }
    return (
      <Content>
        <List>
          {this.state.records}
        </List>
        <Button success rounded onPress={this.buttonPress.bind(this)}>
          <Icon name='md-timer'/>
          Start Sleeping
        </Button>
      </Content>
    )
  }
}
