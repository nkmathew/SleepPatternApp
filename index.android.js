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
import Welcome from './welcome.js';
import Analytics from './analytics.js';

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
    this.state = {
      tab1: false,
      tab2: true,
    };
  }

  renderSelectedTab () {
    if (this.state.tab1) {
        return (<Welcome/>);
    } else {
        return (<Analytics/>);
    }
  }

  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
    });
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
    });
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

        <Content backgroundColor='#1F2B40' padder>
          {this.renderSelectedTab()}
        </Content>

        <Footer backgroundColor='#020C1E'>
          <FooterTab>
            <Button
              active={this.state.tab1}
              onPress={() => this.toggleTab1()} >
              Welcome
              <Icon name='md-cloudy-night' />
            </Button>
            <Button
              active={this.state.tab2}
              onPress={() => this.toggleTab2()} >
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
