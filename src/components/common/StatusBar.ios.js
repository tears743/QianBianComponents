import React, {Component} from 'react';
import {View,StatusBar} from "react-native";
import {SearchBar} from 'antd-mobile';
import _Const from '../../const/_Const';
import globalStyles from '../../css/Global.css';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        const backgroundColor=this.props.bgColor?this.props.bgColor:_Const.Color.primary
        return (
            <View>
                <StatusBar
                    {...this.props}
                    backgroundColor={backgroundColor}
                    translucent = {true}
                />
                <View style={[globalStyles.statusBarView,{backgroundColor:backgroundColor}]}>

                </View>
            </View>
        );
    }
}