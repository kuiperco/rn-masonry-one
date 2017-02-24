import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Pin from './app/components/Pin'

export default class practicalFlexLayout extends Component {
  constructor(props){
    super(props)
    this.state = {
      columns: 2,
      pin: {
        harley: {
          imagesource: require('./app/assets/images/harley.jpg'),
          originalWidth: 800,
          originalHeight: 1199
        },
        ange: {
          imagesource: require('./app/assets/images/ange.png'),
          originalWidth: 1000,
          originalHeight: 667
        }
      }
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Pin pinsource={this.state.pin.harley} columns={this.state.columns}/>
        <Pin pinsource={this.state.pin.ange} columns={this.state.columns}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

AppRegistry.registerComponent('practicalFlexLayout', () => practicalFlexLayout);
