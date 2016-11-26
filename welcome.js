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

export default class Welcome extends Component {

  constructor() {
    super();
  }

  render() {

    rows = [
      <Col><Text>Another One</Text></Col>
    ]

    return (
      <Content>
        <List>
          <ListItem>
            <Col>
              <Text>Simon Mignolet</Text>
            </Col>
            <Col>
              <Text>Simon Mignolet</Text>
            </Col>
            <Col>
              <Text>Simon Mignolet</Text>
            </Col>
          </ListItem>
        </List>
      </Content>
    )
  }
}
