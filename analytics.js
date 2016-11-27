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

import SleepData from './SleepData';
import Txt from './Txt';
import moment from 'moment';

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
    this.sleepData.startSleeping();
    this.sleepData.renderData(this);
    // this.setState({joke: 'Another joke'});
    // console.log('Sleep Joke: ', this.state.joke);
  }

  render() {
    // this.state.records = [<Txt key='1'>From the list</Txt>];
    let fmt = 'YYYY-MM-DD h:m:s';
    this.state.records = this.state.records.map((record, i) => {
      let curr_date = moment(record.curr_date, fmt);
      let sleep_time = moment(record.sleep_time, fmt);
      let wake_time = record.wake_time;
      let hours_slept = 0;
      let sleep_debt = 0;
      if (wake_time == null) {
        wake_time = '----';
      } else {
        wake_time = moment(wake_time, fmt).format('HH:mm');
        hours_slept = moment(wake_time, fmt).diff(sleep_time);
      }
      return (
        <ListItem key={i}>
          <Col>
            <Txt>{curr_date.format('D/M')}</Txt>
          </Col>
          <Col>
            <Txt>{sleep_time.format('HH:mm')}</Txt>
          </Col>
          <Col>
            <Txt>{wake_time}</Txt>
          </Col>
          <Col>
            <Txt>{hours_slept}</Txt>
          </Col>
        </ListItem>
      );
    });
    var t=12;
    // if (this.state.isLoading) {
    //   return (
    //     <Content>
    //       <Txt>Loading...</Txt>
    //     <Content>
    //   );
    // }
    return (
      <Content>
        <Txt>Found {this.state.records.length} Records</Txt>
        <ListItem>
          <Col>
            <Txt>Date</Txt>
          </Col>
          <Col>
            <Txt>Sleep Time</Txt>
          </Col>
          <Col>
            <Txt>Wake Time</Txt>
          </Col>
          <Col>
            <Txt>Hours Slept</Txt>
          </Col>
        </ListItem>
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
