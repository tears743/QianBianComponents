import React, {Component} from 'react';
import {View} from "react-native";
import globalStyles from '../../css/Global.css';
import _Const from '../../const/_Const';
export default class Divider extends Component{
    render() {
        return (
            <View style={{height:1,backgroundColor:_Const.Color.container}}/>
        );
    }
}