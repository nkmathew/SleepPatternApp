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
      buttonText: this.props.name,
      buttonColor: this.props.color
    }
  }

  buttonPress() {
    this.sleepData.startSleeping(this);
    this.sleepData.renderData(this);
  }

  changeName(newName, newColor) {
    this.state.buttonText = newName;
    this.state.buttonColor = newColor;
    this.props.buttonName(newName, newColor);
  }

  render() {
    return (
      <Content>
        <Button style={{backgroundColor:this.state.buttonColor}}
          rounded onPress={this.buttonPress.bind(this)}>
          <Icon name='ios-stopwatch'/>
          {this.state.buttonText}
        </Button>
      </Content>
    )
  }
}
