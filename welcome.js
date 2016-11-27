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

export default class Welcome extends Component {

  constructor() {
    super();
  }

  render() {

    rows = [
      <Col><Txt>Another One</Txt></Col>
    ]

    return (
      <Content>
        <List>
          <ListItem>
            <Col>
              <Txt>Simon Mignolet</Txt>
            </Col>
            <Col>
              <Txt>Simon Mignolet</Txt>
            </Col>
            <Col>
              <Txt>Simon Mignolet</Txt>
            </Col>
          </ListItem>
        </List>
      </Content>
    )
  }
}
