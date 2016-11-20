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

// import HomePage from './homepage.js';
// import AnalyticsPage from './analytics.js';
// import AllWidgets from './all-widgets.js';
// import CountDown from './react-native-countdown.js';

export default class SleepPatternApp extends Component {

  constructor() {
    super();
    this.state = {
      active: 'true'
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Button transparent>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>Home</Title>
        </Header>
        <Content>
          <H1>Some lovely text to boot</H1>
        </Content>
        <Footer>
          <FooterTab>
            <Button active>
              Sleep
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
