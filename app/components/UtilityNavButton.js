import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import {
  Back,
  Heart,
  Share,
  More
} from '../util/icons'

export default class UtilityNavButton extends Component {
  render(){
    switch (this.props.icon){
      case "Back":
        return <Back />
      case "Heart":
        return <Heart />
      case "Share":
        return <Share />
      case "More":
        return <More />
      default:
        return "No Icon"
    }
  }
}
