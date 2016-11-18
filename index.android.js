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

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import HomePage from './homepage.js';
import AnalyticsPage from './analytics.js';

export default class SleepPatternApp extends Component {
  render() {
    return (
      <ScrollableTabView renderTabBar={() => <DefaultTabBar />}>
        <HomePage tabLabel="HOMEPAGE"/>
        <AnalyticsPage tabLabel="ANALYTICS"/>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SleepPatternApp', () => SleepPatternApp);
