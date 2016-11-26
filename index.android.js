/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView
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
  Card,
  CardItem,
  Image,
  Thumbnail,
  Fab
} from 'native-base';

import SleepData from './SleepData.js';

const css = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    color: 'white'
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'Arial',
  },
});

export default class SleepPatternApp extends Component {
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
      <Container>
        <Header backgroundColor='#020C1E'>
          <Button transparent>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title style={css.titleText}>Home</Title>
        </Header>

        <Content backgroundColor='#1F2B40'>
          <Button success rounded onPress={this.buttonPress.bind(this)}>
            <Icon name='md-timer'/>
            Start Sleeping
          </Button>
        </Content>

        <Footer backgroundColor='#020C1E'>
          <FooterTab>
            <Button active>
              Home
              <Icon name='md-cloudy-night' />
            </Button>
            <Button>
              Statistics
              <Icon name='ios-stats' />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  };
}


AppRegistry.registerComponent('SleepPatternApp', () => SleepPatternApp);
