import _ from 'lodash';
import _RestTools from './_RestTools';
import _Tools from './_Tools';
import {Platform} from "react-native";
import request from 'superagent';

export const tokenTools={
  generateUpToken: async function (){
    return await new Promise((resolve,reject)=>{
      _RestTools.httpGet("/analysis/oss/upToken", {prefix:''}, ((err,res)=>{
        console.log(res)
        if(err){reject(err)}
        resolve(res.body.content)
      }));
    })

  },
  dataURItoBlob(dataURI,type) {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    console.log(ab)
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
  }
}
export default {
  /*
  * options:
  * file, watch,
  * */
  uploadImageWithProcess: async function(options){
    const token =await tokenTools.generateUpToken()
    console.log(token)
    return new Promise((resolve,reject)=> {
      if (options && options.file && _.isFunction(options.watch)) {
        const {file, watch} = options
        let fileData = {uri: file.uri, type: 'image/jpeg', name: file.fileName};
        if(Platform.OS==='ios'){
          request
            .post(token.host)
            .set('Content-Type','multipart/form-data;boundary=6ff49e0b6b5148d984f148b6542e5a5d')
            .on("progress", function (evt) {
              if (evt.lengthComputable) {
                if (_.isFunction(watch)) watch(
                  Math.round(evt.loaded * 100 / evt.total)
                );
              }
            }, false)
            .field('name', file.fileName)
            .field('key', token.prefix + file.fileName)
            .field('policy', token.policy)
            .field('OSSAccessKeyId', token.accessId)
            .field('success_action_status', '200')
            .field('signature', token.signature)
            .attach('file',fileData)
            .end((err, res) => {
              if (err) {
                console.warn("aliyunErr:", res);
                reject(err)
              } else {
                console.log("aliyunRes:", res);
                resolve(token.host+'/'+token.prefix+file.fileName)
              }
            });
        }else{
          request
            .post(token.host)
            .on("progress", function (evt) {
              if (evt.lengthComputable) {
                if (_.isFunction(watch)) watch(
                  Math.round(evt.loaded * 100 / evt.total)
                );
              }
            }, false)
            .field('name', file.fileName)
            .field('key', token.prefix + file.fileName)
            .field('policy', token.policy)
            .field('OSSAccessKeyId', token.accessId)
            .field('success_action_status', '200')
            .field('signature', token.signature)
            .attach('file',fileData)
            .end((err, res) => {
              if (err) {
                console.warn("aliyunErr:", res);
                reject(err)
              } else {
                console.log("aliyunRes:", res);
                resolve(token.host+'/'+token.prefix+file.fileName)
              }
            });
        }

      }else{
        reject('error')
      }

    })


  },
  uploadImage:async function(options){
    const token =await tokenTools.generateUpToken()
    console.log(token)
    return new Promise((resolve,reject)=>{
      if(options&&options.file&&_.isFunction(options.watch)){
        const {file,watch} =options
        let formData = new FormData();
        // const fileData ='data:image/jpeg;base64,' + file.data
        // const blob =tokenTools.dataURItoBlob(fileData)

        formData.append('name', file.fileName);
        formData.append('key', token.prefix+file.fileName);
        formData.append('policy', token.policy);
        formData.append('OSSAccessKeyId', token.accessId);
        formData.append('success_action_status', '200');
        //formData.append('callback', token.callback);
        formData.append('signature', token.signature);
        let fileData = {uri: file.uri, type: 'image/jpeg', name: file.fileName};
        formData.append('file', fileData);
        console.log(fileData)
        const os=Platform.OS
        let request={}
        if(os==='ios'){
          request = new Request(token.host,{
            method:'POST',
            headers:({'Content-Type':'multipart/form-data;boundary=6ff46e0b6b5148d984f148b6542e5a5d',
              Accept:'application/json'}),
            body: formData,
          })
        }else{
          request = new Request(token.host,{
            method:'POST',
            body: formData,
          })
        }


        fetch(request).then(res=>{
          console.log(res)
          if(res.status===200){

            resolve(res.url+token.prefix+file.fileName)
          }else{
            throw 'upload fail'
          }

        }).catch(err=>{
          console.warn(err)
          reject(err)
        })

      }else{
        reject('error')
      }

    })

    //     request
    //       .post(token.host.replace('https','http'))
    //       .on("progress", function(evt) {
    //         if (evt.lengthComputable) {
    //           if(_.isFunction(watch)) watch(
    //             {percent:Math.round(evt.loaded*100  / evt.total)}
    //           );
    //         }
    //       }, false)
    //       .send()
    //       .end((err, res)=> {
    //         if(err){
    //           console.warn("aliyunErr:",res);
    //           reject(err)
    //         }else{
    //           console.log("aliyunRes:",res);
    //           resolve(res)
    //         }
    //       });
    //   }
    //   reject('error')

  },

  getFileBase64(file, callback) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      callback(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  },


};

