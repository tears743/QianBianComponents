import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import PropTypes from 'prop-types'
import {WingBlank} from 'antd-mobile'
import CustomListItem from './CustomListItem'
import {widthRatio} from '../../tools/ScreenTools'
import _const from "../../const/_Const";

export default class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftComp: props.leftComp || [],
      title: props.title || '',
      subTitle: props.subTitle || '',
      rightComp: props.rightComp || [],
      onPress: props.onPress || [],
      subTitleStyle:props.subTitleStyle||{},

    }
  }

  render() {
    const arrowComp = this.props.arrow ?
      <View style={{alignSelf: 'center'}}><Text style={[styles.iconfont,{color:'#a8a8a8',paddingRight:30}]}>&#xe6a3;</Text></View> : []
    const rightComp = <View style={{flexDirection: 'row', justifyContent: 'space-between',paddingRight:5}}>
      <Text style={[{fontSize: 16, width: widthRatio(0.5)},this.props.titleTextStyle]}  numberOfLines={1}>{this.state.title}</Text>
    </View>
    const leftComp =this.props.leftComp? <View style={[styles.leftComp,{backgroundColor:this.props.leftCompBg,...this.props.leftCompStyles}]}>
      {this.props.leftComp}
    </View>:[]
    const subTitleComp=this.props.subTitleComp?this.props.subTitleComp: <Text style={{color: '#a8a8a8', width: widthRatio(0.5),...this.state.subTitleStyle}} numberOfLines={1}>
      {this.props.subTitle}
    </Text>
    return (

      <TouchableOpacity style={styles.wrapper} onPress={this.state.onPress}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            {leftComp}
            <View style={this.props.rightTitleCompStyle?this.props.rightTitleCompStyle:{height: 45, justifyContent: 'space-between', marginLeft: 10}}>
              {rightComp}
              <View>
                {subTitleComp}
              </View>
            </View>
            <View style={[{height:45},this.props.rightCompStyle]}>
              {this.props.rightComp}
            </View>
          </View>
          {arrowComp}
        </View>
      </TouchableOpacity>

    )
  }
}

Item.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,

}

const styles = StyleSheet.create({
  iconfont: {
    fontFamily: 'iconfont',
    fontSize: 20,

  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 1,
    marginLeft: 10,
  },
  leftComp: {
    borderRadius: 10,
    backgroundColor: _const.Color.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#eeeeee',
    height: 45,
    width: 45,

  }
})
