/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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

export default class AllWidgets extends Component {

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
          <Title>Header</Title>
        </Header>
        <Content>
          <Text>Badges</Text>
          <Badge>2</Badge>
          <Badge primary>2</Badge>
          <Badge success>2</Badge>
          <Badge info>2</Badge>
          <Badge warning>2</Badge>
          <Badge danger>2</Badge>

          <Text>Normal Buttons</Text>
          <Button primary> Primary </Button>
          <Button success> Success </Button>
          <Button info> Info </Button>
          <Button warning> Warning </Button>
          <Button danger> Danger </Button>

          <Text>Block Buttons</Text>
          <Button block> Primary </Button>
          <Button block success> Success </Button>
          <Button block info> Info </Button>
          <Button block warning> Warning </Button>
          <Button block danger> Danger </Button>

          <Text>Rounded Buttons</Text>
          <Button rounded> Primary </Button>
          <Button rounded success> Success </Button>
          <Button rounded info> Info </Button>
          <Button rounded warning> Warning </Button>
          <Button rounded danger> Danger </Button>

          <Text>Icon Buttons</Text>
          <Button primary>
            <Icon name='ios-home' />
            Home
          </Button>
          <Button success iconRight>
            Next
            <Icon name='ios-arrow-forward' />
          </Button>
          <Button info>
            Previous
            <Icon name='ios-arrow-back' />
          </Button>
          <Button warning>
            <Icon name='ios-star' />
          </Button>
          <Button danger>
            <Icon name='ios-close-circle' />
          </Button>
          <Button style={{backgroundColor: '#384850'}} >
            <Icon name='ios-search' style={{color: '#00c497'}}/>
          </Button>

          <Text>Outline Buttons</Text>
          <Button bordered> Primary </Button>
          <Button bordered success> Success </Button>
          <Button bordered info> Info </Button>
          <Button bordered warning> Warning </Button>
          <Button bordered danger> Danger </Button>

          <Text>Transparent Buttons</Text>
          <Button transparent> Primary </Button>
          <Button transparent>
            <Icon name='ios-home' style={{fontSize: 20, color: '#00c497'}} />
          </Button>

          <Text>Cards</Text>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Text>I love cards</Text>
            </CardItem>
            <CardItem header>
              <Icon name="logo-googleplus" style={{ color: '#DD5044' }} />
              <Text>Google Plus</Text>
            </CardItem>
          </Card>

          <Text>FABs(Floating Action Buttons)</Text>
          <Fab
            active={this.state.active}
            direction="right"
            containerStyle={{ marginLeft: 10 }}
            style={{ backgroundColor: '#5067FF' }}
            position="topLeft"
            onPress={() => this.setState({ active: !this.state.active })} >
            <Icon name="md-share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="ios-mail" />
            </Button>
          </Fab>
        </Content>
        <Footer>
          <FooterTab>
            <Button transparent>
              <Icon name='ios-calendar' />
            </Button>
          </FooterTab>
        </Footer>
      </Container>);
  };
}
