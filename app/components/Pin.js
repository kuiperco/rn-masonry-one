import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native'

import UtilityNavButton from './UtilityNavButton'
import Button from './Button'
import LocalImage from './LocalImage'

let windowWidth = Dimensions.get('window').width

export default class Pin extends Component {

  render(){
    return (
      <View style={[styles.PinContainer, {width: windowWidth/this.props.columns}]}>

        <View style={styles.PinHeader}>
          <View style={styles.UtilityNav}>
            <UtilityNavButton icon="Back"/>
            <UtilityNavButton icon="Heart"/>
            <UtilityNavButton icon="Share"/>
            <UtilityNavButton icon="More"/>
          </View>
          <View style={styles.PinButtonContainer}>
            <Button red icon text="Save"/>
          </View>
        </View>

        <View style={styles.PinContent}>
          <LocalImage
            source={this.props.pinsource.imagesource}
            originalWidth={this.props.pinsource.originalWidth}
            originalHeight={this.props.pinsource.originalHeight}
            columns={this.props.columns}
            />
        </View>

        <View style={styles.PinMeta}>
          <View style={styles.PinMetaTextContainer}>
            <Text style={styles.PinMetaText}>Saved from</Text>
            <Text style={[styles.PinMetaText, styles.TextBold]}>website.com</Text>
          </View>
          <View style={styles.PinButtonContainer}>
            <Button text="Watch"/>
          </View>
        </View>

        <View style={styles.PinUser}>
          <View style={styles.PinUserAvatar}>

          </View>
          <View style={styles.PinUserContainer}>
            <Text style={styles.PinUserText}>
              <Text style={styles.TextBold}>User Name </Text>saved to<Text style={styles.TextBold}> Space</Text>
            </Text>
            <Text style={styles.PinUserText}>Description Lorem Ipsum</Text>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  PinContainer: {
    //flex: 1,
    //alignSelf: 'stretch',

  },
  PinHeader: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flex: 1,
    minHeight: 50, //minWidth, maxWidth, maxHeight rnv.29
    padding: 8
  },
  UtilityNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  PinButton: {
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 6,
    justifyContent: 'space-between',
    width: 60
  },
  PinButtonText: {
    color: 'white'
  },
  PinButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  PinContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  ImagePlaceholder: {
    backgroundColor: '#1e1e1e',
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 6,
  },
  PinMeta: {
    flex: 1,
    minHeight: 70,
    flexDirection: 'row',
    paddingTop: 16,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,
  },
  PinMetaTextContainer: {

  },
  UtilityButton: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    justifyContent: 'center'
  },
  UtilityButtonText: {
    color: 'black',
    fontWeight: 'bold'
  },
  PinUserContainer: {

  },
  PinUser: {
    flex: 5,
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8
  },
  PinUserAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    marginRight: 8
  },
  TextBold: {
    fontWeight: 'bold'
  }
})
