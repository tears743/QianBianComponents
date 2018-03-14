import React,{Component} from 'react'
import {View,TouchableOpacity,Text,StyleSheet,Dimensions,Platform} from 'react-native'
import {WhiteSpace,WingBlank} from 'antd-mobile'
import {Actions} from "react-native-router-flux";
import _const from '../../const/_Const'
import {widthRatio,heightRatio} from '../../tools/ScreenTools'
import StatusBar from '../common/StatusBar'
export default class CustomNavBar extends Component{

  constructor(props){
    super(props)
    this.state={}

  }
  backHandler=(action)=>{
    Actions.pop()
    if(action&&action.refreshing){
      setTimeout(() => {
        Actions.refresh({refreshing:true});
      }, 10);
    }

  }
    render(){
        const rightComp=this.props.rightComp?
          <View style={{backgroundColor:_const.Color.primary,width:50,flexDirection:'row',justifyContent:'center',alignSelf:'center'}}>{this.props.rightComp}</View>:[]
        const titleIcon = this.props.titleIcon?this.props.titleIcon:[]
        const hiddenBackButton = this.props.hideBack||false
        const backButton=hiddenBackButton?[]: <TouchableOpacity style={{paddingLeft:5,paddingRight:10,backgroundColor:'rgba(0,0,0,0)',justifyContent:'space-around',alignItems:'center'}} onPress={this.backHandler}>
            <Text  style={[styles.iconfont,{paddingLeft:5,paddingRight:5,textAlign:'center'}]}>&#xe600;
              <Text style={{fontSize:17,textAlign:'center'}}>返 回</Text>
            </Text>

        </TouchableOpacity>
      const leftComp=this.props.leftComp? <View style={{backgroundColor:'rgba(0,0,0,0)',alignSelf:'flex-end',marginRight:5}}>{this.props.leftComp}</View>
        :backButton
        const backgroundColor=this.props.bgColor?{backgroundColor:this.props.bgColor}:{}
        const titleComp = this.props.titleComp? this.props.titleComp:
          <View style={{zIndex:-1,position:'absolute',backgroundColor:'rgba(0,0,0,0)',width:widthRatio(1),justifyContent:'center',alignItems:'center'}}>

          <Text style={{backgroundColor:'rgba(0,0,0,0)',paddingTop:0,width:widthRatio(0.5),textAlign:'center',fontSize:16,color:'#fff'}} numberOfLines={1}>
            {this.props.title}
          </Text>

        </View>
        return(
            <View style={{backgroundColor:'rgba(0,0,0,0)'}} needsOffscreenAlphaCompositing>
            <StatusBar bgColor={this.props.bgColor} barStyle={'light-content'}/>
            <View style={[styles.header,backgroundColor,{...this.props.style}]}>
              {leftComp}
              {titleComp}
              {rightComp}


            </View>

            </View>
        )
    }
}
const styles=StyleSheet.create({
    header:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,0)',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:_const.Color.primary,
        paddingTop:10,
        paddingBottom:10,

        width:Dimensions.get('window').width,
    },
    iconfont:{
        fontFamily:'iconfont',
        fontSize: 20,
        color:'#fff',
    },
})
