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
  View
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class SleepPatternApp extends Component {
  render() {
    return (
      <ScrollableTabView renderTabBar={() => <DefaultTabBar />}>
        <Text tabLabel='Home'>Home page has a button and timer that shows
        the time spent asleep and the interruption time during sleep</Text>
        <Text tabLabel='Analytics'>Shows basic stats like the number of hours
        slept per day and the total number of interruptions encountered</Text>
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
