import React, { Component } from 'react';
import { View, Text, ScrollView, Navigator } from 'react-native';

export default class HomePage extends Component {
  static get defaultProps() {
    return {
    };
  }

  render() {
    return (
      <ScrollView tabLabel="HOME">
        <Text>Home page has a button and timer that shows
        the time spent asleep and the interruption time during sleep</Text>
      </ScrollView>
    )
  }
}
