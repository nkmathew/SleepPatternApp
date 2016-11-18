import React, { Component } from 'react';
import { View, Text, ScrollView, Navigator } from 'react-native';

export default class AnalyticsPage extends Component {
  static get defaultProps() {
    return {
    };
  }

  render() {
    return (
      <ScrollView tabLabel="HOME">
        <Text>Shows basic stats like the number of hours
-        slept per day and the total number of interruptions encountered</Text>
      </ScrollView>
    )
  }
}
