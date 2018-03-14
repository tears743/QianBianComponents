import React,{Component} from 'react'
import {View, StyleSheet, Dimensions, PixelRatio} from 'react-native'

export default class CustomListItem extends Component{

  constructor(props){
    super(props)
  }
    render(){
        return(<View style={[styles.item,{...this.props.styles}]}>
            {this.props.children}
        </View>)
    }
}

const styles=StyleSheet.create({
    item:{
        backgroundColor:'#fff',
        marginTop:10,
        padding:10,
        borderBottomWidth:1/PixelRatio.get(),
        borderBottomColor:'rgba(0,0,0,0.2)',
        borderTopWidth:1/PixelRatio.get(),
        borderTopColor:'rgba(0,0,0,0.2)',
        width:Dimensions.get('window').width
    },
})
