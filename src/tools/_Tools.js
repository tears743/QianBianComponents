import React from 'react';
import Base64Url from 'base64url';
import _ from 'lodash';
import { Base64 } from 'js-base64';
const _Tools = {
    isDialog: false,
    closeHandle: null,
    random(list) {
        if (!_.isArray(list)) return null;
        if (list.length <= 0) return null;
        return list[_.random(0, list.length - 1)]
    },

    getToken() {

    },

    getCurrUser() {
        let userString = {id:"122333",name:"测试",code:"001"};
        return {id:"122333",name:"测试",code:"001"};
        // if (!userString) return null;
        // return JSON.parse(userString);
    },
    getCurrUserId() {
        return (this.getCurrUser() || {}).id;
    },
    getBase64Url(paramData) {
        return Base64Url.encode(JSON.stringify(paramData));
    },
    getCurrProject() {
        return {id:"122333",name:"测试",code:"001"};
        // if (!projectString) return null;
        // return JSON.parse(projectString);
    },
    encodeBase64(where) {
        if(!where) return Base64.encode(JSON.stringify([]));
        return Base64.encodeURI(JSON.stringify(where))
    },
    makeBase64Params(params){
        const where=[]
        if(params){
            params.map(item=>{
                let field={}
                if(item.length){
                    item.map(field=>{
                        field = {operator:field.operator,value:field.value,fieldName:field.fieldName||field.name}
                        where.push(field)
                    })
                }else{
                    field = {operator:item.operator,value:item.value,fieldName:item.fieldName||item.name}
                    where.push(field)
                }

            })
            return this.encodeBase64(where)
        }
        return ''
    },
};

export default _Tools;
