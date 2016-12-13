import React, { Component } from 'react';

import {
  View,
  Text,
  ScrollView,
  Navigator,
  StyleSheet
} from 'react-native';

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
    this.sleepData.renderData(this);
    this.state = {
      isLoading: true,
      records: []
    }
  }

  render() {
    // this.state.records = [<Txt key='1'>From the list</Txt>];
    let fmt = 'YYYY-MM-DD h:m:s';
    this.state.records = this.state.records.map((record, i) => {
      let curr_date = moment(record.curr_date, fmt);
      let sleep_time = moment(record.sleep_time, fmt);
      let wake_time = record.wake_time;
      let hours_slept = 0;
      let sleep_debt = 8; // Minimun recommended hours of sleep
      if (wake_time == null) {
        wake_time = '----';
      } else {
        hours_slept = moment(wake_time, fmt).diff(sleep_time, 'hours');
        wake_time = moment(wake_time, fmt).format('HH:mm');
      }
      sleep_debt = hours_slept - sleep_debt;
      if (sleep_debt > 0) {
        sleep_debt = `+${sleep_debt}`;
      }
      return (
        <ListItem key={i} style={css.data}>
          <Col style={css.data}>
            <Txt>{curr_date.format('D/M')}</Txt>
          </Col>
          <Col style={css.data}>
            <Txt>{sleep_time.format('HH:mm')}</Txt>
          </Col>
          <Col style={css.data}>
            <Txt>{wake_time}</Txt>
          </Col>
          <Col style={css.data}>
            <Txt>{hours_slept}</Txt>
          </Col>
          <Col style={css.data}>
            <Txt>{sleep_debt}</Txt>
          </Col>
        </ListItem>
      );
    });
    if (this.state.isLoading) {
      return (
        <Content>
          <Spinner color='#6AC0F1' />
        </Content>
      );
    }
    return (
      <Content>
        <Txt>Found {this.state.records.length} Records</Txt>
        <ListItem>
          <Col>
            <Text style={css.header}>Date</Text>
          </Col>
          <Col>
            <Text style={css.header}>Sleep Time</Text>
          </Col>
          <Col>
            <Text style={css.header}>Wake Time</Text>
          </Col>
          <Col>
            <Text style={css.header}>Hours Slept</Text>
          </Col>
          <Col>
            <Text style={css.header}>Sleep Dept</Text>
          </Col>
        </ListItem>
        <List>
          {this.state.records}
        </List>
      </Content>
    )
  }
}

const css = StyleSheet.create({
  header: {
    color: '#6AC0F1',
    fontWeight: 'bold'
  },
  data: {
    padding: 0,
    backgroundColor: '#020C1E',
    borderColor: '#1F2B40',
    borderWidth: 1
  }
});
