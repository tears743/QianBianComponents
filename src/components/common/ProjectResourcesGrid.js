//
// import React,{Component} from 'react'
// import {View,Text,StyleSheet,TouchableOpacity,PixelRatio,Dimensions} from 'react-native'
// import {Grid} from 'antd-mobile'
// import {Actions} from "react-native-router-flux";
// import _const from '../../const/_Const'
// import Spinner from 'react-native-spinkit'
// import {localStorage} from "../../tools/_RestTools";
// import ProjectServices from "../../services/projectServices";
// const {projectResourcesMap,resourcesIcon,resourceColor} = _const
// export default class ProjectResourcesGrid extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             backgroundColor:'#fff',
//             data:[],
//             item:props.project,
//             resources:props.resourcesMap,
//           loading:false,
//         }
//     }
//
//   componentDidMount() {
//
//   }
//     getGridData(){
//         const data=[]
//         for(let key of this.props.resourcesMap.keys()){
//             const ele = projectResourcesMap.get(key)
//             let icon=''
//             if(ele&&!ele.isIgnore&&ele.isGrid){
//                 icon = resourcesIcon[key]
//                 data.push({key:key,icon:icon,name:ele.name})
//             }
//
//
//         }
//         // data.push({key:'projectWarnings',icon:resourcesIcon['projectWarnings'],name:'预警'})
//         console.log(data)
//         return data.sort((a,b)=>{
//             if(a.key>b.key) return 1
//             if(a.key<b.key) return -1
//             return 0
//         })
//     }
//     _onPress=(data)=>{
//         console.log(data)
//         Actions.push(data.key,{project:data.project})
//
//     }
//     renderItem=(item)=>{
//         // backgroundColor:resourceColor[item.key]
//
//         return (
//           <View key={item.key} style={{height:100,flex:1,justifyContent:'center',alignItems:'center'}}>
//             <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',paddingTop:10}} onPress={()=>{this._onPress({key:item.key,project:this.props.project})}}>
//               <View style={{height:60,padding:10,paddingBottom:10,borderRadius:50,backgroundColor:_const.Color.primary}}>
//                 <Text style={[styles.iconfont]}>{item.icon}</Text>
//               </View>
//               <View  style={{flexDirection:'row',flexGrow:1,justifyContent:'space-around',alignItems:'flex-start',marginTop:5}}>
//                 <Text style={styles.name}>{item.name}</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         )
//
//
//
//     }
//     render(){
//         let component=[]
//
//         if(this.props.resourcesMap.size>0){
//             const data=this.getGridData()
//             component=<Grid data={data} style={{flex:1,borderRadius:5,backgroundColor:'rgba(250,250,250,0.8)'}} itemStyles={{ height: '150px',}}  hasLine={false} columnNum={4} renderItem={this.renderItem} />
//         }
//         return(
//             <View style={{marginTop:10,borderRadius:5,backgroundColor:this.props.loading?'rgba(250,250,250,0)':'rgba(255,255,255,1)',justifyContent:'center',alignItems:'center',paddingBottom:10}}>
//                 <Spinner type={'Wave'} size={30} isVisible={this.state.loading}  color={_const.Color.primary}/>
//                 {component}
//             </View>
//         )
//     }
// }
//
// const styles=StyleSheet.create({
//     grid:{
//
//     },
//     iconfont:{
//         fontFamily:'iconfont',
//         fontSize:38,
//         color:_const.Color.white
//     },
//     name:{
//         fontSize:15,
//         color:_const.Color.primary,
//         flex:1,
//         textAlign:'center'
//     }
// })
