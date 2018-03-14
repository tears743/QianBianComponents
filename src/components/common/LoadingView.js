import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Spinner from 'react-native-spinkit'
import _const from '../../const/_Const'
import CustomNavBar from '../common/CustomNavBar'

export default class LoadingView extends Component {
  render() {
    return (

      <View style={styles.loadingContainer}>

        <Spinner type={'Wave'} color={_const.Color.primary}/>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  iconfont: {
    fontFamily: 'iconfont',
    fontSize: 150
  },

  loadingContainer: {
    flex: 1,
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
