import moment from 'moment'
import _ from 'lodash'
import Base64Url from 'base64url'
import _Tools from '../_Tools'
import _RestTools from '../_RestTools'
export default {
    findList(queryParams, callback) {
        let parsedParams={}
        if(queryParams&&queryParams.where){
            parsedParams={where:_Tools.makeBase64Params(queryParams.where)}
            delete queryParams.where
            parsedParams={...parsedParams,...queryParams}
        }else{
            parsedParams=queryParams
        }
        _RestTools.httpGet('/notice', {...parsedParams,sorted:'createdAt,desc'}, callback)
    },
}