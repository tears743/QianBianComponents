// import React, {Component} from 'react';
// import {FlatList, RefreshControl, Text, View,TouchableHighlight} from "react-native";
// import {Button, WingBlank} from 'antd-mobile';
// import _Const from '../../const/_Const';
// import Divider from './Divider';
// import _ from 'lodash';
// import {Toast} from 'antd-mobile';
// import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';
//
//
// export default class SmartList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             initLoading: true,
//             refreshing:false,
//             upLoadMore: false,
//             pageNum: -1,
//             totalPage: 0
//         };
//         this.loadMore = this.loadMore.bind(this);
//         this.refresh = this.refresh.bind(this);
//     }
//
//     componentDidMount() {
//         this.init()
//     }
//
//     init() {
//         if (_.isFunction(this.props.queryFunc)) {
//             this.setState({initLoading: true, upLoadMore: false,refreshing:false});
//             this.props.queryFunc({pageNum: this.state.pageNum + 1}, (err, result) => {
//                 if (err) {
//                     Toast.fail("查询数据失败!", 3);
//                     this.setState({initLoading: false});
//                 } else {
//                     let data = this.state.data || [];
//                     data = _.union(data, result);
//                     console.log("data:", data);
//                     this.setState({data, pageNum: this.state.pageNum + 1, initLoading: false,totalPage:20});
//                 }
//             });
//         } else {
//             this.setState({initLoading: false});
//         }
//     }
//
//     refresh() {
//         if (_.isFunction(this.props.queryFunc)) {
//             this.setState({refreshing:true,initLoading: false, upLoadMore: false});
//             this.props.queryFunc({pageNum: 0}, (err, result) => {
//                 if (err) {
//                     Toast.fail("查询数据失败!", 3);
//                     this.setState({refreshing: false});
//                 } else {
//                     this.setState({data:result, pageNum: 0, initLoading: false,refreshing:false,totalPage:20});
//                 }
//             });
//         } else {
//             this.setState({initLoading: false});
//         }
//     }
//
//     loadMore() {
//         if (_.isFunction(this.props.queryFunc)) {
//             this.setState({initLoading: false, upLoadMore: true});
//             this.props.queryFunc({pageNum: this.state.pageNum + 1}, (err, result) => {
//                 if (err) {
//                     this.setState({initLoading: false, upLoadMore: false});
//                     Toast.fail("查询数据失败!", 3);
//                 } else {
//                     let data = this.state.data || [];
//                     data = _.union(data, result);
//                     console.log("data:", data);
//                     this.setState({data, pageNum: this.state.pageNum + 1, upLoadMore: false});
//                 }
//             });
//         }
//     }
//
//     handlePress(data) {
//         if(_.isFunction(this.props.onPress)){
//             this.props.onPress(data)
//         }
//     }
//
//     render() {
//         const self = this;
//         let emptyComponent = (
//             <View style={{height: 40,justifyContent: 'center'}}>
//                 <Text style={{ color: _Const.Color.grey, textAlign: 'center'}}>没有加载到数据</Text>
//             </View>
//         );
//         if (this.state.initLoading) {
//             emptyComponent = (
//                 <View style={{alignItems: 'center',height: 40,justifyContent: 'center'}}>
//                     <Bubbles size={10} color={_Const.Color.primary}/>
//                 </View>
//             )
//         }
//         let footerComponent = null;
//         if (this.state.upLoadMore) {
//             footerComponent = (
//                 <View style={{alignItems: 'center',height: 40,justifyContent: 'center'}}>
//                     <Bubbles size={10} color={_Const.Color.primary}/>
//                 </View>
//             );
//         } else if (this.state.data) {
//             footerComponent = (
//                 <View style={{height: 40,alignItems: 'center',justifyContent: 'center'}}>
//                     <Text style={{marginTop: 10, color: _Const.Color.grey, textAlign: 'center'}}>没有更多数据了</Text>
//                 </View>
//             );
//             if (this.state.pageNum + 1 < this.state.totalPage) {
//                 footerComponent = (
//                     <View style={{height: 50, marginTop: 10}}>
//                         <Button onClick={this.loadMore}>
//                             <Text style={{color: _Const.Color.grey}}>点击加载更多</Text>
//                         </Button>
//                     </View>);
//             }
//         }
//         return (
//             <FlatList
//                 ListEmptyComponent={emptyComponent}
//                 data={this.state.data}
//                 extraData={this.state}
//                 keyExtractor={(item, index) => {
//                     return item.id;
//                 }}
//                 renderItem={({item}) => {return <TouchableHighlight style={{backgroundColor:'white'}} onPress={()=>this.handlePress(item)}><View style={{marginLeft:10,marginRight:10,backgroundColor:'white'}}>{React.cloneElement(this.props.renderItem, item)}</View></TouchableHighlight>}}
//                 ItemSeparatorComponent={Divider}
//                 refreshing={this.state.initLoading}
//                 refreshControl={
//                     <RefreshControl
//                         refreshing={this.state.refreshing}
//                         onRefresh={() => this.refresh()}
//                         tintColor={_Const.Color.primary}
//                         title="数据刷新中..."
//                         titleColor={_Const.Color.primary}
//                         colors={[_Const.Color.primary]}
//                         progressBackgroundColor="#ffff00"
//                     />
//                 }
//
//                 ListFooterComponent={footerComponent}
//
//             />
//         );
//     }
// }