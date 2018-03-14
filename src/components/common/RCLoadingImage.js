import React, {Component} from 'react';
import Spinner from 'react-native-spinkit'
import {View, Image} from 'react-native'
import _const from '../../const/_Const'

export default class RCLoadingImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loadSuccess:false,
      defaultImage:{},
    }
  }

  onLoadStart = () => {
    this.setState({loading: true})
  }
  onLoad=()=>{
    this.setState({loadSuccess:true})
  }
  onLoadEnd = () => {
    if (this.state.loadSuccess) {
      this.setState({loading: false})
    }else{
      console.warn('loadImageError,load defaultImage')
      this.setState({loading:true,defaultImage:{source:{uri:_const.defaultImage}}})
    }

  }

  render() {
    const source=this.props.source?{source:{uri:_const.defaultImage}}:this.props.source
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image {...this.props} onLoad={this.onLoad} onLoadStart={this.onLoadStart} onLoadEnd={this.onLoadEnd} {...this.state.defaultImage}/>
        <Spinner type={'FadingCircleAlt'} style={{position: 'absolute'}} isVisible={this.state.loading}
                 color={_const.Color.primary}/>
      </View>
    )

  }
}
