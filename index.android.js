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

import SQLite from 'react-native-sqlite-storage';

export default class SleepPatternApp extends Component {
  constructor() {
    super();

    var db = SQLite.openDatabase(
      "test.db", "1.0", "Test Database", 200000,
      this.openCB, this.errorCB
    );
    db.transaction((tx) => {
      // Initialize table
      tx.executeSql(`
      CREATE TABLE IF NOT EXISTS sleeping_data (
        id INTEGER PRIMARY KEY,
        firstname text NOT NULL,
        lastname text NOT NULL
      )`);
      // Insert values
      tx.executeSql(`
      INSERT INTO sleeping_data (id, firstname, lastname) VALUES
      (12, 'Mathew', 'Kipkoech')
      `);
      tx.executeSql(`SELECT * FROM sleeping_data`, [], (tx, results) => {
        console.log("Db:", tx);
        // Get rows with Web SQL Database spec compliance.
        var len = results.rows.length;
        console.log('Values found: ', len);
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);
          console.log(`Employee name: ${row.firstname} ${row.lastname}`);
        }
      });
    });
  }

  errorCB(err) {
    console.log("SQL Error: " + err);
  }

  successCB() {
    console.log("SQL executed fine");
  }

  openCB() {
    console.log("Database OPENED");
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
          <Text style={css.baseText}>Some lovely text to boot</Text>
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
