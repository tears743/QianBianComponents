export default {
  attendanceProjectSummary: {
    data: {
      "workerCount": 9,
      "sgManagerCount": 0,
      "jlCount": 0,
      "jsManagerCount": 0,
      "totalCount": 9,
    },

    code: '0'
  },
  task:{
    UNDONE:{
      "code":'0',
      "message":"",
      "data": [
        {
          "id": "79a4f874-8535-4e64-9664-ac4789f6be24",
          "sourceType": "1",//来源类型 见下面的说明
          "createdAt": "2017-11-21T13:27:41.000+08:00",
          "updatedAt": "2017-11-21T13:27:41.000+08:00",
          "status": "UNDONE",//处理状态 见下面的说明
          "title": "噪音预警",
          "sourceId": "c72bcea7-bd1d-4ae2-b8e6-9473d23e19a6",
          "sender": null,
          "sendTime": "2017-01-01T00:00:00.000+08:00",
          "lastDealer": null,
          "lastDealTime": null,
          "dealUsers": [
            {
              "id": "F1D11DB0-27D0-4330-B6DD-4E7950EE199D",
              "username": "admin",
              "mobile": "mobile@aaa",
              "realName": "默认管理员"
            }
          ],},],

      "page": 0,//当前页码
      "size": 10,//每页显示的数量
      "totalElement": 15//符合查询条件的数据总数


    },
    PROCESSING:{
      "code":'0',
      "message":"",
      "data": [
        {
          "id": "79a4f874-8535-4e64-9664-ac4789f6be24",
          "sourceType": "1",//来源类型 见下面的说明
          "createdAt": "2017-11-21T13:27:41.000+08:00",
          "updatedAt": "2017-11-21T13:27:41.000+08:00",
          "status": "PROCESSING",//处理状态 见下面的说明
          "title": "噪音预警",
          "sourceId": "c72bcea7-bd1d-4ae2-b8e6-9473d23e19a6",
          "sender": null,
          "sendTime": "2017-01-01T00:00:00.000+08:00",
          "lastDealer": null,
          "lastDealTime": null,
          "dealUsers": [
            {
              "id": "F1D11DB0-27D0-4330-B6DD-4E7950EE199D",
              "username": "admin",
              "mobile": "mobile@aaa",
              "realName": "默认管理员"
            }
          ],
          "page": 0,//当前页码
          "size": 10,//每页显示的数量
          "totalElement": 15//符合查询条件的数据总数
        }
      ]
    },
    COMPLETED:{
      "code":'0',
      "message":"",
      "data": [
        {
          "id": "79a4f874-8535-4e64-9664-ac4789f6be24",
          "sourceType": "1",//来源类型 见下面的说明
          "createdAt": "2017-11-21T13:27:41.000+08:00",
          "updatedAt": "2017-11-21T13:27:41.000+08:00",
          "status": "COMPLETED",//处理状态 见下面的说明
          "title": "噪音预警",
          "sourceId": "c72bcea7-bd1d-4ae2-b8e6-9473d23e19a6",
          "sender": null,
          "sendTime": "2017-01-01T00:00:00.000+08:00",
          "lastDealer": null,
          "lastDealTime": null,
          "dealUsers": [
            {
              "id": "F1D11DB0-27D0-4330-B6DD-4E7950EE199D",
              "username": "admin",
              "mobile": "mobile@aaa",
              "realName": "默认管理员"
            }
          ],},],

          "page": 0,//当前页码
          "size": 10,//每页显示的数量
          "totalElement": 15//符合查询条件的数据总数


    },
    CLOSE:{},
  },
  environment:{
    "code": "0",
    "message": "操作成功",
    "data": {
      "id": "eddfcc52-c1be-4a4e-beb9-4185574408df",
      "supplierName": "斯尔达",
      "supplierId": "21049bd9-e702-4b35-af85-3c7dbb3a4341",
      "project": null,
      "projectId": "0013B424-6418-4E92-AE69-2A6A025A769A",
      "projectCode": "P001",
      "area": null,
      "areaId": null,
      "sourceId": "0001",
      "serialNo": "0001",
      "temperature": 25.5,
      "humidity": 10,
      "pm2p5": 183,
      "pm10": 200,
      "noise": 63,
      "windSpeed": 8,
      "windDirection": 241,
      "recordTime": "2017-08-01T11:55:22.000+08:00",
      "createdAt": null,
      "updatedAt": "2017-08-31T11:04:53.263+08:00"
    }

  },
  workerDetail: {
    "code": "0",
    "message": "操作成功",
    "data": {
      "id": "D72B4D36-14EF-4EC3-B1E8-0F655777693E",
      "name": "邱元淑",
      "idno": "512322197110145541",
      "sex": "1",
      "areaId": "500123",
      "area": null,
      "degree": null,
      "islocal": false,
      "tel": "18580758158",
      "birthAt": "1971-10-14T00:00:00.000+08:00",
      "age": null,
      "createdAt": "2017-08-10T15:18:11.480+08:00",
      "updatedAt": null
    }
  },
  workerList:{
    "code": "0",
    "message": "操作成功",
    "data": [
      {
        "id": "2423040917",
        "projectId": "A27501AA-006F-4A25-AD7B-13968AF91AD3",
        "srcProjectId": "1dd4cb50470646f380c244d8ee8e905d",
        "cardNo": "LJ16070089",
        "cardType": "Green",
        "physicalNo": "2423040917",
        "sex": "Female",
        "issuingDate": "2016-07-28T00:00:00.000+08:00",
        "idNo": "512322197110145541",
        "workerName": "邱元淑",
        "birthAt": "1971-10-14T00:00:00.000+08:00",
        "tel": "18580758158",
        "address": "重庆市垫江县五洞镇龙滩村4组"
      },{
        "id": "2423040916",
        "projectId": "A27501AA-006F-4A25-AD7B-13968AF91AD3",
        "srcProjectId": "1dd4cb50470646f380c244d8ee8e905d",
        "cardNo": "LJ16070089",
        "cardType": "Green",
        "physicalNo": "2423040917",
        "sex": "Female",
        "issuingDate": "2016-07-28T00:00:00.000+08:00",
        "idNo": "512322197110145541",
        "workerName": "邱元淑",
        "birthAt": "1971-10-14T00:00:00.000+08:00",
        "tel": "18580758158",
        "address": "重庆市垫江县五洞镇龙滩村4组"
      },{
        "id": "2423040915",
        "projectId": "A27501AA-006F-4A25-AD7B-13968AF91AD3",
        "srcProjectId": "1dd4cb50470646f380c244d8ee8e905d",
        "cardNo": "LJ16070089",
        "cardType": "Green",
        "physicalNo": "2423040917",
        "sex": "Female",
        "issuingDate": "2016-07-28T00:00:00.000+08:00",
        "idNo": "512322197110145541",
        "workerName": "邱元淑",
        "birthAt": "1971-10-14T00:00:00.000+08:00",
        "tel": "18580758158",
        "address": "重庆市垫江县五洞镇龙滩村4组"
      },{
        "id": "2423040914",
        "projectId": "A27501AA-006F-4A25-AD7B-13968AF91AD3",
        "srcProjectId": "1dd4cb50470646f380c244d8ee8e905d",
        "cardNo": "LJ16070089",
        "cardType": "Green",
        "physicalNo": "2423040917",
        "sex": "Female",
        "issuingDate": "2016-07-28T00:00:00.000+08:00",
        "idNo": "512322197110145541",
        "workerName": "邱元淑",
        "birthAt": "1971-10-14T00:00:00.000+08:00",
        "tel": "18580758158",
        "address": "重庆市垫江县五洞镇龙滩村4组"
      },{
        "id": "2423040913",
        "projectId": "A27501AA-006F-4A25-AD7B-13968AF91AD3",
        "srcProjectId": "1dd4cb50470646f380c244d8ee8e905d",
        "cardNo": "LJ16070089",
        "cardType": "Green",
        "physicalNo": "2423040917",
        "sex": "Female",
        "issuingDate": "2016-07-28T00:00:00.000+08:00",
        "idNo": "512322197110145541",
        "workerName": "邱元淑",
        "birthAt": "1971-10-14T00:00:00.000+08:00",
        "tel": "18580758158",
        "address": "重庆市垫江县五洞镇龙滩村4组"
      },{
        "id": "2423040912",
        "projectId": "A27501AA-006F-4A25-AD7B-13968AF91AD3",
        "srcProjectId": "1dd4cb50470646f380c244d8ee8e905d",
        "cardNo": "LJ16070089",
        "cardType": "Green",
        "physicalNo": "2423040917",
        "sex": "Female",
        "issuingDate": "2016-07-28T00:00:00.000+08:00",
        "idNo": "512322197110145541",
        "workerName": "邱元淑",
        "birthAt": "1971-10-14T00:00:00.000+08:00",
        "tel": "18580758158",
        "address": "重庆市垫江县五洞镇龙滩村4组"
      },{
        "id": "2423040911",
        "projectId": "A27501AA-006F-4A25-AD7B-13968AF91AD3",
        "srcProjectId": "1dd4cb50470646f380c244d8ee8e905d",
        "cardNo": "LJ16070089",
        "cardType": "Green",
        "physicalNo": "2423040917",
        "sex": "Female",
        "issuingDate": "2016-07-28T00:00:00.000+08:00",
        "idNo": "512322197110145541",
        "workerName": "邱元淑",
        "birthAt": "1971-10-14T00:00:00.000+08:00",
        "tel": "18580758158",
        "address": "重庆市垫江县五洞镇龙滩村4组"
      },{
        "id": "2423040910",
        "projectId": "A27501AA-006F-4A25-AD7B-13968AF91AD3",
        "srcProjectId": "1dd4cb50470646f380c244d8ee8e905d",
        "cardNo": "LJ16070089",
        "cardType": "Green",
        "physicalNo": "2423040917",
        "sex": "Female",
        "issuingDate": "2016-07-28T00:00:00.000+08:00",
        "idNo": "512322197110145541",
        "workerName": "邱元淑",
        "birthAt": "1971-10-14T00:00:00.000+08:00",
        "tel": "18580758158",
        "address": "重庆市垫江县五洞镇龙滩村4组"
      },
    ],
    "page": {
      "size": 1,
      "totalElements": 59,
      "totalPages": 59,
      "number": 0
    }

  },
  workerAttendanceDaily:{
    code:'0',
    data: {
      "projectId": "A27501AA-006F-4A25-AD7B-13968AF91AD3",
      "project": {
        "id": "A27501AA-006F-4A25-AD7B-13968AF91AD3",
        "srcid": "1dd4cb50470646f380c244d8ee8e905d",
        "code": "PROJ2017052300012",
        "name": "重庆儿童医疗中心住院医技综合楼",
        "projecttypeId": "C76E622C-B8B9-47D1-809A-FC8997C6DCD0",
        "projectStatus": "0",
        "address": "金渝大道",
        "areaId": "500123",
        "area": {
          "@class": "com.sun.proxy.$Proxy229",
          "name": "两江新区",
          "id": "500123",
          "code": "500123",
          "lat": 29.643077,
          "lng": 106.565013
        },
        "status": "0",
        "lng": 106.491361,
        "lat": 29.664624,
        "constructAmount": 325148910.94,
        "constructArea": 0,
        "managerId": "BBF800F2-705A-45EA-B3FB-1F7B274DE056",
        "jsUnitId": "73F87294-9742-4A64-AF23-00C566FAF41C",
        "sgUnitId": "DAEBE4CB-92F0-4DB9-B2A0-47CC6955205B",
        "jlUnitId": null,
        "sjUnitId": null,
        "kcUnitId": null,
        "jsUnit": {
          "@class": "com.sun.proxy.$Proxy228",
          "name": "重庆医科大学附属儿童医院",
          "id": "73F87294-9742-4A64-AF23-00C566FAF41C",
          "code": null
        },
        "sgUnit": {
          "@class": "com.sun.proxy.$Proxy228",
          "name": "重庆建工第三建设有限责任公司",
          "id": "DAEBE4CB-92F0-4DB9-B2A0-47CC6955205B",
          "code": "915000007339743120"
        },
        "jlUnit": null,
        "sjUnit": null,
        "kcUnit": null,
        "startAt": null,
        "finishAt": null,
        "createdAt": "2017-08-10T15:44:53.240+08:00",
        "updatedAt": "2017-09-03T00:27:06.037+08:00"
      },
      "idNo": "512322197110145541",
      "name": "邱元淑",
      "cardType": "Green",
      "attendenceDate": "2017-10-31T00:00:00.000+08:00",
      "firstTime": "2017-10-31T07:25:57.000+08:00",
      "lastTime": "2017-10-31T07:25:57.000+08:00"
    }


  },

  attendanceList: {
    data: [
      {
        "id": '1',
        "projectId": "2D990C07-346A-4E70-AD8F-C8F34A0E7088",
        "projectName": '测试',
        "srcProjectId": '22',
        "areaId": '11',
        "cardNo": null,
        "cardType": "Yellow",
        "physicalNo": '2',
        "attendanceType": 1,
        "terminalNo": '2',
        "workerIdNo": "510203196412290815",
        "workerName": "李定彬",
        "created_at": null,
        "recordTime": null,
        "recordDate": null,
        "attendanceTime": null,
        "attendenceDate": "2017-08-09T00:00:00.000+08:00"
      },
      {
        "id": '2',
        "projectId": "2D990C07-346A-4E70-AD8F-C8F34A0E7088",
        "projectName": '测试',
        "srcProjectId": '22',
        "areaId": '11',
        "cardNo": null,
        "cardType": "Yellow",
        "physicalNo": '2',
        "attendanceType": 1,
        "terminalNo": '2',
        "workerIdNo": "510203196412290815",
        "workerName": "李定彬",
        "created_at": null,
        "recordTime": null,
        "recordDate": null,
        "attendanceTime": null,
        "attendenceDate": "2017-08-09T00:00:00.000+08:00"
      },
      {
        "id": '3',
        "projectId": "2D990C07-346A-4E70-AD8F-C8F34A0E7088",
        "projectName": '测试',
        "srcProjectId": '22',
        "areaId": '11',
        "cardNo": null,
        "cardType": "Yellow",
        "physicalNo": '2',
        "attendanceType": 1,
        "terminalNo": '2',
        "workerIdNo": "510203196412290815",
        "workerName": "李定彬",
        "created_at": null,
        "recordTime": null,
        "recordDate": null,
        "attendanceTime": null,
        "attendenceDate": "2017-08-09T00:00:00.000+08:00"
      },
      {
        "id": '1',
        "projectId": "2D990C07-346A-4E70-AD8F-C8F34A0E7088",
        "projectName": '测试',
        "srcProjectId": '22',
        "areaId": '11',
        "cardNo": null,
        "cardType": "Yellow",
        "physicalNo": '2',
        "attendanceType": 1,
        "terminalNo": '2',
        "workerIdNo": "510203196412290815",
        "workerName": "李定彬",
        "created_at": null,
        "recordTime": null,
        "recordDate": null,
        "attendanceTime": null,
        "attendenceDate": "2017-08-09T00:00:00.000+08:00"
      },
      {
        "id": '1',
        "projectId": "2D990C07-346A-4E70-AD8F-C8F34A0E7088",
        "projectName": '测试',
        "srcProjectId": '22',
        "areaId": '11',
        "cardNo": null,
        "cardType": "Yellow",
        "physicalNo": '2',
        "attendanceType": 1,
        "terminalNo": '2',
        "workerIdNo": "510203196412290815",
        "workerName": "李定彬",
        "created_at": null,
        "recordTime": null,
        "recordDate": null,
        "attendanceTime": null,
        "attendenceDate": "2017-08-09T00:00:00.000+08:00"
      },
      {
        "id": '1',
        "projectId": "2D990C07-346A-4E70-AD8F-C8F34A0E7088",
        "projectName": '测试',
        "srcProjectId": '22',
        "areaId": '11',
        "cardNo": null,
        "cardType": "Yellow",
        "physicalNo": '2',
        "attendanceType": 1,
        "terminalNo": '2',
        "workerIdNo": "510203196412290815",
        "workerName": "李定彬",
        "created_at": null,
        "recordTime": null,
        "recordDate": null,
        "attendanceTime": null,
        "attendenceDate": "2017-08-09T00:00:00.000+08:00"
      },
      {
        "id": '1',
        "projectId": "2D990C07-346A-4E70-AD8F-C8F34A0E7088",
        "projectName": '测试',
        "srcProjectId": '22',
        "areaId": '11',
        "cardNo": null,
        "cardType": "Yellow",
        "physicalNo": '2',
        "attendanceType": 1,
        "terminalNo": '2',
        "workerIdNo": "510203196412290815",
        "workerName": "李定彬",
        "created_at": null,
        "recordTime": null,
        "recordDate": null,
        "attendanceTime": null,
        "attendenceDate": "2017-08-09T00:00:00.000+08:00"
      },
      {
        "id": '1',
        "projectId": "2D990C07-346A-4E70-AD8F-C8F34A0E7088",
        "projectName": '测试',
        "srcProjectId": '22',
        "areaId": '11',
        "cardNo": null,
        "cardType": "Yellow",
        "physicalNo": '2',
        "attendanceType": 1,
        "terminalNo": '2',
        "workerIdNo": "510203196412290815",
        "workerName": "李定彬",
        "created_at": null,
        "recordTime": null,
        "recordDate": null,
        "attendanceTime": null,
        "attendenceDate": "2017-08-09T00:00:00.000+08:00"
      },
      {
        "id": '1',
        "projectId": "2D990C07-346A-4E70-AD8F-C8F34A0E7088",
        "projectName": '测试',
        "srcProjectId": '22',
        "areaId": '11',
        "cardNo": null,
        "cardType": "Yellow",
        "physicalNo": '2',
        "attendanceType": 1,
        "terminalNo": '2',
        "workerIdNo": "510203196412290815",
        "workerName": "李定彬",
        "created_at": null,
        "recordTime": null,
        "recordDate": null,
        "attendanceTime": null,
        "attendenceDate": "2017-08-09T00:00:00.000+08:00"
      },
      {
        "id": '1',
        "projectId": "2D990C07-346A-4E70-AD8F-C8F34A0E7088",
        "projectName": '测试',
        "srcProjectId": '22',
        "areaId": '11',
        "cardNo": null,
        "cardType": "Yellow",
        "physicalNo": '2',
        "attendanceType": 1,
        "terminalNo": '2',
        "workerIdNo": "510203196412290815",
        "workerName": "李定彬",
        "created_at": null,
        "recordTime": null,
        "recordDate": null,
        "attendanceTime": null,
        "attendenceDate": "2017-08-09T00:00:00.000+08:00"
      },


    ],
    page: {
      "size": 20,
      "totalElements": 3,
      "totalPages": 1,
      "number": 0
    }
  }
}
