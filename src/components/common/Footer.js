// import React, {Component} from 'react';
// import {View,StatusBar,Text,TextInput,Image,StyleSheet,TouchableOpacity} from "react-native";
// import {TabBar, Icon,SearchBar,Popover} from 'antd-mobile';
// import {Actions} from 'react-native-router-flux'
// import Menu from 'react-native-menu';
// import CustomNavBar from './CustomNavBar'
// import _const from "../../const/_Const";
// import {widthRatio} from "../../tools/ScreenTools";
//
// const { MenuContext, MenuOptions, MenuOption, MenuTrigger } = Menu
// const Item=Popover.Item
// export default class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedTab: 'projects',
//             footerHeight: 0,
//             selectedTabCache:new Map(),
//         };
//     }
//
//     onPressTabHandle = (key) => {
//
//         const selectedCache=this.state.selectedTabCache
//         if(!selectedCache.has(key)){
//             selectedCache.set(key,key)
//         }
//         this.setState({selectedTab: key,selectedCache:selectedCache})
//     }
//
//     componentDidMount() {
//
//     }
//     _getHomeFooterHeight=({layout:layout})=>{
//
//         this.setState({footerHeight:layout.height})
//         console.log('homeFooter:'+layout.height)
//     }
//
//   onSearchFocus=()=>{
//     Actions.push('searchPage')
//   }
//
//     render() {
//
//         const noticeComponent=this.state.selectedTab==='main'?<Main homeFooterHeight={this.state.footerHeight}/>:[]
//         const projectComponent = this.state.selectedTab==='projects'?<Projects/>:[]
//         const personalComponent = this.state.selectedTab === 'personal'?<Personal/>:[]
//         const warningComponent = this.state.selectedTab === 'warning'?<Warnings/>:[]
//         const applicationComponent =this.state.selectedTab==='application'?<Application/>:[]
//
//         const navTitle={main:'搜索',projects:'搜索',personal:'搜索'}
//         // const newSearchBarStyle = {
//         //   ...SearchBarStyle,
//         //   wrapper:{backgroundColor: 'rgba(0,0,0,0.1)',
//         //     height: variables.search_bar_input_height,
//         //     paddingLeft: variables.h_spacing_md,
//         //     paddingRight: variables.h_spacing_md,
//         //     flexDirection: 'row',
//         //     alignItems: 'center'},
//         //   search: {
//         //     tintColor: variables.input_color_icon,
//         //     position: 'absolute',
//         //     left: variables.h_spacing_md + 8,
//         //     top: (variables.search_bar_input_height - variables.icon_size_xxs) / 2,
//         //     width: variables.icon_size_xxs,
//         //     height: variables.icon_size_xxs
//         //   }
//         // }
//       const titleComp=<TouchableOpacity  onPress={this.onSearchFocus}
//         style={{backgroundColor:'rgba(0,0,0,0.1)',borderRadius:10,padding:5, width:widthRatio(0.9),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
//
//         <Text style={{color:_const.Color.white,width:widthRatio(0.8),fontSize:16}}
//                    selectionColor={_const.Color.white}
//                    placeholderTextColor={_const.Color.white}
//
//
//
//         >搜索</Text>
//         <Text style={{ fontFamily:'iconfont',
//           fontSize:18,
//           backgroundColor:'rgba(0,0,0,0)',
//           paddingRight:10,
//           color:_const.Color.white}}>
//           &#xe693;
//         </Text>
//
//
//       </TouchableOpacity>
//       const menuItems=[
//         (<Item key='0' value={'扫一扫' }><Text>扫一扫</Text></Item>)
//       ]
//       const renderTouchable = () => <TouchableOpacity/>;
//       const rightComp=<Menu onSelect={(value) => console.log(`User selected the number ${value}`)}>
//         <MenuTrigger renderTouchable={renderTouchable}>
//           <Text style={{ fontSize: 20 ,fontFamily:'iconfont',color:'#fff'}}>&#xe6da;</Text>
//         </MenuTrigger>
//         <MenuOptions>
//           <MenuOption value={1}>
//             <Text>One</Text>
//           </MenuOption>
//           <MenuOption value={2}>
//             <Text>Two</Text>
//           </MenuOption>
//         </MenuOptions>
//       </Menu>
//         return (
//           // titleComp = {titleComp}
//             <MenuContext style={{flex:1}} >
//
//               {this.state.selectedTab === 'personal'?[]:<CustomNavBar leftComp={<Text style={{fontSize:18,color:'#fff',paddingLeft:20}}>智慧工地</Text>} hideBack={true}/>}
//
//             <TabBar  onLayout={({nativeEvernt:e})=>{this._getHomeFooterHeight(e)}} unselectedTintColor="#888" tintColor="#33A3F4" barTintColor="#f5f5f5" >
//                 {/*<TabBar.Item title="首  页"*/}
//
//                              {/*key="notice"*/}
//                              {/*icon={require('../../images/png/home.png')}*/}
//                              {/*selectedIcon={require('../../images/png/homeSelected.png')}*/}
//                              {/*selected={this.state.selectedTab === 'main'}*/}
//                              {/*iconStyle={[this.state.selectedTab === 'main' ? {tintColor: '#33A3F4'} : {},{height:24,width:24}]}*/}
//                              {/*onPress={() => {*/}
//                                  {/*this.onPressTabHandle('main')*/}
//                              {/*}}*/}
//                 {/*>*/}
//                     {/*{this.state.selectedTabCache.has(this.state.selectedTab)?<Main homeFooterHeight={this.state.footerHeight}/>:noticeComponent}*/}
//                 {/*</TabBar.Item>*/}
//
//                 <TabBar.Item title="项  目"
//                              key="projects"
//                              icon={require('../../images/png/project.png')}
//                              selectedIcon={require('../../images/png/projectSelect.png')}
//                              selected={this.state.selectedTab === 'projects'}
//                              iconStyle={[this.state.selectedTab === 'projects' ? {tintColor: '#33A3F4'} : {},{height:24,width:24}]}
//                              onPress={() => {
//                                  this.onPressTabHandle('projects')
//                              }}
//                 >
//                     {this.state.selectedTabCache.has(this.state.selectedTab)?<Projects/>:projectComponent}
//                 </TabBar.Item>
//               <TabBar.Item title="应  用"
//                            key="warning"
//                            icon={require('../../images/png/application.png')}
//                            selectedIcon={require('../../images/png/applicationSelected.png')}
//                            selected={this.state.selectedTab === 'application'}
//                            iconStyle={[this.state.selectedTab === 'application' ? {tintColor: '#33A3F4'} :{},{height:24,width:24}]}
//                            onPress={() => {
//                              this.onPressTabHandle('application')
//                            }}
//               >
//                 {this.state.selectedTabCache.has(this.state.selectedTab)?<Application/>:applicationComponent}
//               </TabBar.Item>
//                 <TabBar.Item title="我  的"
//                              key="personal"
//                              icon={require('../../images/png/self.png')}
//                              selectedIcon={require('../../images/png/selfSelected.png')}
//                              selected={this.state.selectedTab === 'personal'}
//                              iconStyle={[this.state.selectedTab === 'personal' ? {tintColor: '#33A3F4'} : {},{height:24,width:24}]}
//                              onPress={() => {
//                                  this.onPressTabHandle('personal')
//                              }}
//                 >
//                     {this.state.selectedTabCache.has(this.state.selectedTab)?<Personal/>:personalComponent}
//                 </TabBar.Item>
//             </TabBar>
//             </MenuContext>
//         );
//     }
// }
