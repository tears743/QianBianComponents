import {StyleSheet} from "react-native";
import _Const from '../const/_Const';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: _Const.Color.white,
        // flexDirection: 'column',
        // justifyContent: 'flex-start',
    },
    statusBarView:{
        justifyContent:'center',
        alignItems:'center',
        height:28,

        backgroundColor: _Const.Color.primary,
    },
    colorDanger: {
        color: _Const.Color.danger
    }

});
export default globalStyles;