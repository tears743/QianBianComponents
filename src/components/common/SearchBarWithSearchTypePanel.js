import React, {Component} from 'react';
import {SearchBar} from 'antd-mobile'

import {View,StyleSheet,Dimensions,Text } from "react-native";
export default class SearchBarWithSearchTypePanel extends Component{

    constructor(props){
        super(props)
        this.state={
            visible:false,
            searchVal:'',
        }
    }
    onChange=(val)=>{
        this.setState({searchVal:val})
        this.props.onSearchChange(val)
    }
    onSubmit=()=>{
        // const params={where:[{name:this.state.searchKey,operator:'like',value:this.state.searchVal}]}
        this.props.onSubmit()
    }
    onCancel=()=>{
        this.setState({visible:false,searchVal:''})
        this.props.onCancel()
    }
    onFocus=()=>{
        this.props.onFocus()
        this.setState({visible:true})
    }

    render(){
        const seachType=this.state.visible?this.props.searchTypeComponent:[]
        return(
            <View style={{justifyContent: 'flex-start',
                alignItems: 'center',}}>
                <SearchBar  defaultValue={this.props.defaultValue} placeholder={'输入名称'}  value={this.state.searchVal||this.props.defaultValue} onFocus={this.onFocus} onSubmit={this.onSubmit} onChange={this.onChange} onCancel={this.onCancel}/>
                {seachType}
            </View>
        )
    }
}
