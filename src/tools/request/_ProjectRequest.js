import moment from 'moment'
import _ from 'lodash'
import Base64Url from 'base64url'

import _Cache from '../_Cache'
import _Tools from '../_Tools'
import _RestTools from '../_RestTools'
import _TestData from '../../const/_TestData'

export default {
    findList(queryParams, callback) {
        _RestTools.httpGet('/project', queryParams, callback)
    },

    findOne(projectId, callback) {
        _RestTools.httpGet('/project/'+projectId, null, callback)
    },

    findProjects(pageNumber, pageSize, where, callback) {
        pageNumber = pageNumber || 0;
        pageSize = pageSize || 20;
        where = where || {};
        let whereString = Base64Url.encode(JSON.stringify(where));

        _RestTools.httpGet("/projects", { page: pageNumber, size: pageSize, where: whereString }, (err, res)=> {
            if(err) {
                console.error(err);
                callback(err)
            } else {
                let results = _.get(res, 'body.content')||[];
                let page = _.get(res, 'body.page')||{};

                // 设置图片
                results.map((tempData)=> {
                    tempData.headerImage = _Tools.random(_TestData.ProjectImages)
                });

                callback(null, {
                    refreshMoment: moment(),
                    dataList: results,
                    page: page||{},
                    hasMore: (page.totalPages-1)>page.number,
                })
            }
        });
    },

    findOneProject(projectId, callback) {
        _RestTools.httpGet("/projects/"+projectId, null, (err, res)=> {
            if(err) {
                console.error(err);
                callback(err)
            } else {
                callback(null, _.get(res, 'body.content'))
            }
        });
    },

    findProjectWorkers(projectId, pageNumber, pageSize, where, callback) {
        pageNumber = pageNumber || 0;
        pageSize = pageSize || 20;
        where = where || {};
        let whereString = Base64Url.encode(JSON.stringify(where));

        _RestTools.httpGet(
            "/projects/"+projectId+"/workers",
            { page: pageNumber, size: pageSize, where: whereString },
            (err, res)=> {
                if(err) {
                    console.error(err);
                    callback(err)
                } else {
                    let results = _.get(res, 'body.content')||[];
                    let page = _.get(res, 'body.page')||{};

                    // 设置图片
                    results.map((tempData)=> {
                        tempData.worker = tempData.worker||{};
                        tempData.worker.headerImage = _Tools.random(_TestData.UserImages)
                    });

                    callback(null, {
                        refreshMoment: moment(),
                        dataList: results,
                        page: page||{},
                        hasMore: (page.totalPages-1)>page.number,
                    })
                }
        });
    },

    findOneProjectWorker(projectId, workerId, callback) {
        _RestTools.httpGet("/projects/"+projectId+"/workers/"+workerId, null, (err, res)=> {
            if(err) {
                console.error(err);
                callback(err)
            } else {
                let result = _.get(res, 'body.content')||{};

                // 设置图片
                // result.worker = result.worker||{};
                // result.worker.headerImage = _Tools.random(_TestData.UserImages);

                callback(null, result)
            }
        });
    },

    findWorkerGroups(projectId, pageNumber, pageSize, callback) {
        pageNumber = pageNumber || 0;
        pageSize = pageSize || 20;
        let whereString = Base64Url.encode(JSON.stringify({
            project: projectId
        }));

        _RestTools.httpGet(
            "/workerGroups",
            { page: pageNumber, size: pageSize, where: whereString },
            (err, res)=> {
                if(err) {
                    console.error(err);
                    callback(err)
                } else {
                    let results = _.get(res, 'body.content')||[];
                    let page = _.get(res, 'body.page')||{};
                    callback(null, {
                        refreshMoment: moment(),
                        dataList: results,
                        page: page||{},
                        hasMore: (page.totalPages-1)>page.number,
                    })
                }
        });
    },

    findOneWorkerGroup(workerGroupId, callback) {
        _RestTools.httpGet("/workerGroups/"+workerGroupId, null, (err, res)=> {
            if(err) {
                console.error(err);
                callback(err)
            } else {
                callback(null, _.get(res, 'body.content'))
            }
        });
    },

    saveWorkerGroup(saveData, callback) {
        if(saveData.id) {
            _RestTools.httpPut("/workerGroups/"+saveData.id, saveData, (err, res)=> {
                if(err) {
                    console.error(err);
                    callback(err)
                } else {
                    callback(null, _.get(res, 'body.content'));
                }
            });
        } else {
            _RestTools.httpPost("/workerGroups", saveData, (err, res)=> {
                if(err) {
                    console.error(err);
                    callback(err)
                } else {
                    callback(null, _.get(res, 'body.content'));
                }
            });
        }
    },

    addWorkerGroupMember(groupId, workerIDs, callback) {
        _RestTools.httpPost("/workerGroups/"+groupId+"/addWorkers", workerIDs, (err, res)=> {
            if(err) {
                console.error(err);
                callback(err)
            } else {
                callback(null);
            }
        });
    },

    findProjectRoles(callback) {
        _RestTools.httpGet("/projectRoles", { page: 0, size: 999, }, (err, res)=> {
            if(err) {
                console.error(err);
                callback(err)
            } else {
                let results = _.get(res, 'body.content')||[];
                let page = _.get(res, 'body.page')||{};

                callback(null, {
                    refreshMoment: moment(),
                    dataList: results,
                    page: page||{},
                    hasMore: (page.totalPages-1)>page.number,
                })
            }
        });
    },

    setProject(projectId, setData, callback) {
        _RestTools.httpPut("/projects/"+projectId+"/set", setData, (err, res)=> {
            if(err) {
                console.error("err", err);
                console.error("res", res);
                callback(_.get(res, 'body')||err)
            } else {
                let resultData = _.get(res, 'body.content');

                // 设置缓存
                _Cache.put(resultData.id, resultData);

                // 重设localStoge中的project信息
                let localProject = localStorage.getItem('project')||{};
                if(localProject.id===res.id) localStorage.setItem('project', JSON.stringify(resultData));

                callback(null, resultData);
            }
        });
    },

    setProjectWorkerRoles(projectId, workerId, roleIDs, callback) {
        _RestTools.httpPost(
            "/workers/"+workerId+"/bindRoles",
            {
                project: projectId,
                roles: roleIDs,
            },
            (err, res)=> {
                if(err) {
                    console.error(err);
                    callback(_.get(res, 'body')||err);
                } else {
                    let resultData = _.get(res, 'body.content')||[];
                    console.log("setProjectWorkerRoles", resultData);
                    callback(null);
                }
            }
        )
    },






};

