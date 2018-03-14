import React,{Component} from 'react'
import {View, Animated, Dimensions,Image,Platform} from 'react-native'
import _const from "../../const/_Const"
import CustomNavBar from './CustomNavBar'
import PropTypes from 'prop-types'

export default class ScrollAnimatedImageHeader extends Component{

  constructor(props){
    super(props);
    this.state={
      scrollY:props.scrollY||new Animated.Value(0),
      rightNavComp:props.rightNavComp||[],
      title:props.title||'',
      imageComp:props.imageComp||[],
      infoPanel:props.infoPanel||[],
      maxRange:Platform.OS==='ios'?100:200
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.infoPanel!==this.state.infoPanel){
      this.setState({infoPanel:nextProps.infoPanel})
    }
    if(nextProps.title!==this.state.title){
      this.setState({title:nextProps.title})
    }
  }

  render(){
    const bgColor = this.state.scrollY.interpolate({
      inputRange:[-1,0,100,101],
      outputRange:[_const.Color.primary,_const.Color.primary,_const.Color.primary,_const.Color.primary]
    })
    return (
      <Animated.View style={{zIndex:-3,backgroundColor:bgColor,
       }}>
        <Animated.View style={{position:'absolute',
          top:this.state.scrollY.interpolate({
            inputRange:[-1,0,this.state.maxRange,this.state.maxRange+1],
            outputRange:[-20,-20,-261,-261]
          }),
          opacity:this.state.scrollY.interpolate({
            inputRange:[0,this.state.maxRange,this.state.maxRange+1],
            outputRange:[0,0,0],
          })
        }}>
          {this.state.imageComp}
        </Animated.View>
        <CustomNavBar bgColor={_const.Color.primary}  title={this.state.title} rightComp={this.state.rightNavComp}/>
        <Animated.View style={{backgroundColor:_const.Color.primary,alignItems:'center',justifyContent:'flex-start',
          top: this.state.scrollY.interpolate({
            inputRange: [-1,0, this.state.maxRange,this.state.maxRange+1],
            outputRange: [0,0, -180,-180]
          }),
          height:this.state.scrollY.interpolate({
            inputRange: [-1,0, this.state.maxRange,this.state.maxRange+1],
            outputRange: [100,100, 0,0]
          }),
          opacity:this.state.scrollY.interpolate({
            inputRange:[0,this.state.maxRange,this.state.maxRange+1],
            outputRange:[1,0,0],
          })

        }}>
          {this.state.infoPanel}
        </Animated.View>
      </Animated.View>
    )
  }
}
// ScrollAnimatedImageHeader.propTypes={
//   scrollY:PropTypes.instanceOf(Animated.AnimatedValue).isRequired,
//   rightNavComp:PropTypes.element,
//   title:PropTypes.string,
//   imageComp:PropTypes.instanceOf(Image),
//   infoPanel:PropTypes.array,
// }
