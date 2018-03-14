import moment from 'moment';
import _ from 'lodash';
import _Const from '../../const/_Const';
import _RestTools from '../_RestTools';
const warningType = _.map(_Const.WarningType,(type)=>{
    return type.code;
});
const warningSubType = _.map(_Const.WarningSubType,(type)=>{
    return type.code;
});
const warningLevel = _.map(_Const.WarningLevel,(type)=>{
    return type.code;
});
const projectName = ["项目1", "项目2", "名字超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级长的项目"];
const baseUrl = "/warning";
let datas = [];
export default {
    findList(queryParams, callback) {
        let pageNum = queryParams.pageNum;
        // _RestTools.httpGet(baseUrl,queryParams,callback);
        setTimeout(() => {
            let data = [];
            for (let i = pageNum*20; i < (pageNum+1)*20; i++) {
                data.push(
                    {
                        id: i+"_",
                        content: `content${i}`,
                        type: warningType[_.random(0, warningType.length-1)],
                        subType:warningSubType[_.random(0, warningSubType.length-1)],
                        level:warningLevel[_.random(0, warningLevel.length-1)],
                        projectName:projectName[_.random(0, projectName.length-1)],
                        warningTime:moment()
                    });
                datas = _.union(datas,data);
            }
            callback(null,data);
        }, 2000);
    },

    findOne(id, callback) {
        // _RestTools.httpGet('/project/'+projectId, null, callback)
        let _data = _.find(datas,{id:id});
        callback(null,_data);
    },
};

