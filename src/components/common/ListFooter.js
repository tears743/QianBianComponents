import React, {PureComponent} from 'react';
import {View, Text,StyleSheet,TouchableOpacity,PixelRatio,Platform } from "react-native";
import Spinner from 'react-native-spinkit'
import _const from'../../const/_Const'
import {setSpText} from '../../tools/ScreenTools'

/*
* @Author ; Tears
* @Params : lostFooterType:load:loadmore,loading:loading,end:nomMreData
*
* */
export default class ListFooter extends PureComponent {
    _onPress = () => {
        this.props.onPress()
    }
    render() {
        const specialIos = Platform.OS==='ios'?this.props.listFooterStyle:{}
        switch (this.props.listFooterType) {
            case 'load':
                return (
                    <TouchableOpacity style={[styles.footer,specialIos]} onPress={this._onPress}>
                        <Text style={styles.footerText}> 点击加载更多 </Text>
                    </TouchableOpacity>
                )
            case 'loading':
                return (
                    <View style={styles.footer}>
                        <Spinner type={'ThreeBounce'}   isVisible={true}  color='#a8a8a8'/>
                    </View>
                )
            case 'end':
                return (
                    <TouchableOpacity style={styles.footer}>
                        <Text style={styles.footerText}> 没有更多数据 </Text>
                    </TouchableOpacity>
                )
            default: return <View/>
        }
    }
}

const styles = StyleSheet.create({

    footer:{

        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth:1/PixelRatio.get(),
        borderBottomColor:'#e9e9e9',
      padding:10,

    },
    footerText:{
        marginTop:5,
        marginBottom:5,
        fontSize:16,
        color:'#a8a8a8',


    }
})
