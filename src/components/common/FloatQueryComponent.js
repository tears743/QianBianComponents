import React, {Component} from 'react';
import {Text, View,TouchableHighlight} from "react-native";
import _ from 'lodash';
import _Const from '../../const/_Const';


export default class FloatQueryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }
    handlePress(data) {
        if(_.isFunction(this.props.onPress)){
            this.props.onPress(data)
        }
    }
    render() {
        return (
            <View style={{
                flex:0.00001,
                top: -100,
                alignSelf: 'flex-end',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableHighlight style={{ backgroundColor: _Const.Color.primary, width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', margin: 20}} onPress={()=>{console.log('touched');}}  >
                    <View>
                        <Text style={{fontFamily:"iconfont",color:_Const.Color.white,fontSize:20}}>&#xe6ac;</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}