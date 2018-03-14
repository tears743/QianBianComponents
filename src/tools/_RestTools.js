import request from 'superagent';
// import { Stomp } from 'stompjs/lib/stomp';
// import SockJS from 'sockjs-client';
import {AsyncStorage,Platform} from "react-native";

import _ from 'lodash';
import moment from 'moment';
// production
// const ServerApiUrl = "http://pm.z023.cn/api/project-endpoint";
// const AuthApiUrl = "http://api-test.z023.cn/ljxq/auth";
// const AuthApiUrl = "http://pm.z023.cn/api/project-endpoint";



const AuthApiUrl = "http://api-test.z023.cn/ljxq/auth";
const SocketiUrl = "http://pm.z023.cn/api/project-endpoint/ws";
const testApiUrl = 'https://rap2api.z023.cn/app/mock/6';
const ServerApiUrl = "http://api-test.z023.cn/ljxq";

// test
// const ServerApiUrl = "http://pm-test.z023.cn/api/project-endpoint";
// const AuthApiUrl = "http://pm-test.z023.cn/api/project-endpoint";
// const SocketiUrl = "http://pm-test.z023.cn/api/project-endpoint/ws";

// local
// const ServerApiUrl = "http://localhost:8081/api/project-endpoint";
// const AuthApiUrl = "http://localhost:8081/api/project-endpoint";
// const SocketiUrl = "http://localhost:8081/api/project-endpoint/ws";

// chenguogang
// const ServerApiUrl = "http://192.168.31.220:8081/api/project-endpoint";
// const AuthApiUrl = "http://192.168.31.220:8081/api/project-endpoint";
// const SocketiUrl = "http://192.168.31.220:8081/api/project-endpoint/ws";
import FileStorage from './FileStorage'


export const localStorage={
    currentUser:'',
    getAllKeys: async function (){return await AsyncStorage.getAllKeys()},
    getItem: async function (key){
            if(Platform.OS==='ios'){
              return await AsyncStorage.getItem(key)
            }else{
              return await FileStorage.getItem(key)
            }


    },
    setItem:(key,val)=>{

        AsyncStorage.setItem(key,val)
    }
};
export default {

  testHttpGet: async function (url, queryParams, callback) {
    let accessToken =''
    if(Platform.OS==='android'){
      accessToken=await FileStorage.getItem('accessToken')
    }else{
      accessToken=await localStorage.getItem("accessToken")
    }
    request
      .get(testApiUrl+url)
      .accept('application/json')
      .set('Authorization', "Bearer " +accessToken )
      .query(queryParams)
      .end((err, res)=> {callback(this.getError(err, res), res)});



  },
    httpGet: async function (url, queryParams, callback) {
      let accessToken =''
      if(Platform.OS==='android'){
        accessToken=await FileStorage.getItem('accessToken')
      }else{
        accessToken=await localStorage.getItem("accessToken")
      }
                request
                    .get(ServerApiUrl+url)
                    .accept('application/json')
                    .set('Authorization', "Bearer " +accessToken )
                    .query(queryParams)
                    .end((err, res)=> {callback(this.getError(err, res), res)});



    },

    httpPost:async function(url, postData, callback) {
      let accessToken =''
      if(Platform.OS==='android'){
        accessToken=await FileStorage.getItem('accessToken')
      }else{
        accessToken=await localStorage.getItem("accessToken")
      }

        request
            .post(ServerApiUrl + url)
            .set('Authorization', "Bearer " + accessToken)
            .send(postData)
            .end((err, res) => {
                callback(this.getError(err, res), res)
            });
    },

    httpPostNoToken(url, postData, callback) {
        request
            .post(ServerApiUrl + url)
            .send(postData)
            .end((err, res) => {
                callback(this.getError(err, res), res)
            });
    },

    httpPut:async function(url, postData, callback) {
      let accessToken =''
      if(Platform.OS==='android'){
        accessToken=await FileStorage.getItem('accessToken')
      }else{
        accessToken=await localStorage.getItem("accessToken")
      }
        request
            .put(ServerApiUrl + url)
            .set('Authorization', "Bearer " + accessToken)
            .send(postData)
            .end((err, res) => {
                callback(this.getError(err, res), res)
            });
    },

    httpDel:async function(url, delData, callback) {
      let accessToken =''
      if(Platform.OS==='android'){
        accessToken=await FileStorage.getItem('accessToken')
      }else{
        accessToken=await localStorage.getItem("accessToken")
      }
        request
            .del(ServerApiUrl + url)
            .set('Authorization', "Bearer " + accessToken)
            .send(delData)
            .end((err, res) => {
                callback(this.getError(err, res), res)
            });
    },

    // socketConnect(channelUrl, callback, fail) {
    //     let socket = new SockJS(SocketiUrl);
    //     let stompClient = Stomp.over(socket);
    //
    //     const authHeader = {'Authorization': 'Bearer ' + localStorage.getItem("accessToken")};
    //
    //     stompClient.connect(
    //         authHeader,
    //         (frame)=> {
    //             // console.log('socketConnect frame', frame);
    //             stompClient.subscribe(
    //                 channelUrl,
    //                 (result)=> {
    //                     // console.log("socketConnect result", result);
    //                     callback(result);
    //                 },
    //                 authHeader
    //             )
    //         },
    //         fail
    //     )
    // },

    get(url, params, callback) {
        request
            .get(url)
            .accept('application/json')
            .query(params)
            .end((err, res) => {
                callback(this.getError(err, res), res)
            });
    },

    getError(err, res) {
        // console.log("err", err);
        // console.log("res", res);

        if (_.get(res, 'status') === 200 || _.get(res, 'status') === 202) return;

        const errStatus = _.get(err, 'status');
        console.log("errStatus", errStatus);

        if (errStatus === 200) return;

        switch (errStatus) {
            case 400:
                return "发生错误:" + _.get(res, 'body.message');
            case 404:
                return "没有找到请求的资源";
            case 500:
                return "系统错误:" + _.get(res, 'body.message');
            case 503:
                return "服务器没有响应";
            case 401:
                return "认证错误";
            default:
                return "未知错误";
        }
    },

    login(loginParams, callback) {
        request
            .post(AuthApiUrl+"/login")
            .send(loginParams)
            .withCredentials()
            .end((err, res)=> {
                let errMsg = this.getError(err, res);
                if(errMsg) {
                    callback(errMsg);
                } else {
                    console.log(res.body)
                  const expireTime =  moment().add(_.get(res, 'body.expires_in'),'second')

                    localStorage.currentUser=res.body.userInfo
                    AsyncStorage.removeItem('project',err=>{console.log(err)});
                    AsyncStorage.setItem('username', loginParams.username,err=>{console.log(err)});
                    AsyncStorage.setItem('user', JSON.stringify(_.get(res, 'body.userInfo')),err=>{
                      console.log(err)});
                    AsyncStorage.setItem('accessToken', _.get(res, 'body.access_token'),err=>{console.log(err)});
                    AsyncStorage.setItem('refreshToken', _.get(res, 'body.refresh_token'),err=>{console.log(err)});
                    AsyncStorage.setItem('expireTime',JSON.stringify(expireTime),err=>{console.log(err)});
                    AsyncStorage.getAllKeys(res=>{console.log(res)})
                  if(Platform.OS==='android'){
                      FileStorage.setItem('username', loginParams.username).then(resP1=>{
                        FileStorage.setItem('user', JSON.stringify(_.get(res, 'body.userInfo'))).then(resP2=>{
                          FileStorage.setItem('accessToken', _.get(res, 'body.access_token')).then(resP3=>{
                            FileStorage.setItem('expireTime',expireTime)
                          })
                        })
                      })



                  }
                    callback(null, "success");

                }
            });
        // fetch(AuthApiUrl + "/login", {
        //     method: 'POST',
        //     headers: { //header
        //     },
        //     header:{
        //         'Content-Type' : 'text/plain;charset=UTF-8',
        //         'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;',
        //     },
        //     body: JSON.stringify({ //参数
        //         'username': 'admin',
        //         'password': '20',
        //     })
        // })
        //     .then((response) => response.json()) //把response转为json
        //     .then((responseData) => { // 上面的转好的json
        //         // console.log(responseData);
        //         console.log(responseData)
        //
        //     })
        //     .catch((error) => {
        //         console.error(error)
        //     })
    },

    register(registerData, callback) {
        request
            .post(AuthApiUrl + "/register")
            .send(registerData)
            .end((err, res) => {
                callback(this.getError(err, res), res)
            });
    },

    resetPassword(resetData, callback) {
        request
            .post(AuthApiUrl + "/resetPassword")
            .send(resetData)
            .end((err, res) => {
                callback(this.getError(err, res), res)
            });
    },

    logout(callback) {
        AsyncStorage.removeItem('user');
        AsyncStorage.removeItem('accessToken');
        AsyncStorage.removeItem('refreshToken');
        callback();
    },

};

