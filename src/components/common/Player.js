'use strict'
import React, {Component} from 'react'
import {
  View, Text, StyleSheet, Dimensions,TouchableOpacity,Animated,StatusBar
} from 'react-native'
import ProjectServices from '../../services/projectServices'
import Video from 'react-native-video'
import Orientation from 'react-native-orientation';
// import VideoPlayer from 'react-native-video-controls'
import Spinner from 'react-native-spinkit'
import _const from '../../const/_Const'
import {Toast} from 'antd-mobile'
import {heightRatio, widthRatio} from "../../tools/ScreenTools";

const fullScreen = '\ue73c',smallScreen='\ue73d'
export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      uri: '',
      isValid: false,
      error: false,
      loaded: false,
      onErrorHandler:props.onErrorHandler,
      onBackHandler:props.backHandler,
      bottom:new Animated.Value(-30),
      top: new Animated.Value(-30),
      opacity:new Animated.Value(0),
      hideController:true,
      isFullScreen:false,
      videoHeight:300,
      videoWidth:widthRatio(0.98),
      fullScreenIcon:fullScreen,
    }
  }

  componentDidMount() {

    this.setState({
      loading: true
    })
    let isValid = false
    ProjectServices.testVideoUrl(this.props.uri, isValid, 0).then(isValid => {
      console.log(isValid)
      if (isValid === 'success') this.setState({isValid: isValid, uri: this.props.uri, loading: false,})
      // if(this.props.visible)this.state.onErrorHandler()
    })


  }

  onLoadStart = () => {
    console.log('loadStart')

  }
  onLoad = (data) => {
    // console.log(data)
    // this.setState({
    //   loading: false,
    //   uri: this.props.uri,
    // })
    console.log('load')
  }
  onError = (err) => {
    // this.setState({
    //   loading: false,
    //   error: true
    // })
    // this.state.onErrorHandler()
    console.log('error',err)
  }
  onEnd = (data) => {
    console.log(data)
  }
  onBuffer = (data) => {
    // console.log(data)
  }
  onTimedMetadata = (data) => {
    // console.log(data)
  }
  showController=()=>{
    if(this.state.hideController){
      Animated.timing(                            // 随时间变化而执行的动画类型
        this.state.bottom,                      // 动画中的变量值
        {
          toValue: -30,
          duration:500,
        }
      ).start();
      Animated.timing(                            // 随时间变化而执行的动画类型
        this.state.top,                      // 动画中的变量值
        {
          toValue: -30,
          duration:500,
        }
      ).start();
      Animated.timing(                            // 随时间变化而执行的动画类型
        this.state.opacity,                      // 动画中的变量值
        {
          toValue: 0,
          duration:500,
        }
      ).start();
    }else{
      Animated.timing(                            // 随时间变化而执行的动画类型
        this.state.bottom,                      // 动画中的变量值
        {
          toValue: 0,
          duration:500,
        }
      ).start();
      Animated.timing(                            // 随时间变化而执行的动画类型
        this.state.top,                      // 动画中的变量值
        {
          toValue: 0,
          duration:500,
        }
      ).start();
      Animated.timing(                            // 随时间变化而执行的动画类型
        this.state.opacity,                      // 动画中的变量值
        {
          toValue: 0.5,
          duration:500,
        }
      ).start();
    }

    this.setState({hideController:!this.state.hideController})
  }
  onClose=()=>{

    Orientation.lockToPortrait()
    this.props.onClose()

  }
  fullScreenChange=()=>{
    if(!this.state.isFullScreen){
      Orientation.lockToLandscape()
      this.props.onFullScreenChange(true)
      this.setState({fullScreenIcon:smallScreen,isFullScreen:true,videoHeight:widthRatio(0.96),videoWidth:heightRatio(1)})
    }else{
      Orientation.lockToPortrait()
      this.props.onFullScreenChange(false)
      this.setState({fullScreenIcon:fullScreen,videoHeight:300,isFullScreen:false,videoWidth:widthRatio(1)})
    }
  }
  render() {

    let component = []
    const statusBar =this.state.isFullScreen?<StatusBar hidden={true}/>:[]
    if (this.state.isValid && (!this.state.loaded)) {
      component = <TouchableOpacity activeOpacity={1} style={{flex:1}} onPress={this.showController}>
        <Video

        rate={1.0}
        paused={false}
        source={{uri: this.state.uri}}
        onLoadStart={this.onLoadStart}
        onLoad={this.onLoad}
        onError={this.onError}
        onEnd={this.onEnd}
        resizeMode={'cover'}
        style={[styles.backgroundVideo,{height:this.state.videoHeight,width:this.state.videoWidth}]}
        // onBack={ () => {this.state.onBackHandler()} }
        // disableTimer={true}
        // disableFullscreen={true}
        // disableSeekbar={true}
        // disableBack={true}
        // disableVolume={true}

      />
        <Animated.View style={{justifyContent:'flex-end',flexDirection:'row',zIndex:99,
          width:this.state.videoWidth,position:'absolute',height:30,padding:5,bottom:this.state.bottom,backgroundColor:'#000',opacity:this.state.opacity}}>
          <TouchableOpacity  onPress={this.fullScreenChange}>
        <Text style={{color:'#fff',fontFamily:'iconfont',fontSize:20}}>{this.state.fullScreenIcon}</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{justifyContent:'flex-start',flexDirection:'row',zIndex:99,
          width:this.state.videoWidth,position:'absolute',height:30,padding:5,top:this.state.top,backgroundColor:'#000',opacity:this.state.opacity}}>
          <TouchableOpacity  onPress={this.onClose} >
            <Text style={{color:'#fff',fontFamily:'iconfont',fontSize:20}}>&#xe647;</Text>
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    }
    let errorComponent = []
    if (this.state.error) {
      errorComponent = <View>
        <Text>加载失败，请重试</Text>
      </View>
    }

    // this.player.seek(0)
    return (
      <View style={[styles.container,{height:this.state.videoHeight,width:this.state.videoWidth}]}>
       {/* <TouchableOpacity style={{position:'absolute',bottom:5,right:5,zIndex:99}} onPress={()=>{
          this.refs.video&&this.refs.video.presentFullscreenPlayer()}}>
          <Text style={{color:'#fff'}}>全屏</Text>
        </TouchableOpacity>*/}
        {statusBar}
        <Spinner type={'Circle'} size={30} isVisible={this.state.loading} style={{backgroundColor: '#000'}}
                 color={_const.Color.primary}/>
        {component}

        {errorComponent}

      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',

  },
  backgroundVideo: {
    width: Dimensions.get('window').width,
    height: 300,
    backgroundColor: '#000',

  },
});
