import React, {Component} from 'react';
import {View,StatusBar,Text} from "react-native";
import _const from '../../const/_Const';
import globalStyles from '../../css/Global.css';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        const backgroundColor=this.props.bgColor?this.props.bgColor:_const.Color.primary
        return (
            <View>
                <StatusBar  {...this.props} backgroundColor={backgroundColor} translucent = {true}/>
                <View style={{marginTop:20,justifyContent:'space-around',paddingBottom:5,alignItems:'center',backgroundColor:backgroundColor}}>
                    {/*<Text style={{fontSize:20,color:_const.Color.white}}>两江新区智慧工地平台</Text>*/}
                </View>
            </View>
        );
    }
}
