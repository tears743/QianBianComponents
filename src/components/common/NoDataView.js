import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import _const from '../../const/_Const'
import _ from 'lodash'
export default class NoDataView extends Component{

    _onPress=()=>{
      if(_.isFunction(this.props.refresh))this.props.refresh()
    }

    render(){
        return(
            <View style={styles.noDataPage}>

                    {this.props.header||[]}

                <View style={{flex:1,
                    alignItems: 'center',}}>
                    <Text style={styles.iconfont}>&#xe61b;</Text>
                    <Text style={{marginTop:18,fontSize:14,color:'#e8e8e8'}}>很遗憾，没有可以查看的数据...

                    </Text>
                    <TouchableOpacity onPress={this._onPress}>
                        <Text style={{marginTop:18,fontSize:14,color:_const.Color.primary}}>
                            重试
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    iconfont:{
        color:'#e8e8e8',
        fontFamily:'iconfont',
        fontSize: 100
    },
    noDataPage:{
      backgroundColor:'transparent',
        justifyContent: 'flex-start',


      flex:1
    },

})
