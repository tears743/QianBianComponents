export default {
  appLastVersion:'1.0.2',
  appBinaryDownloadUrlIOS:'itms-apps://itunes.apple.com/us/app/apple-store/id_MY_APP_ID',
  appBinaryDownloadUrl:'https://static.z023.cn/pub/app/app-release.apk',
  defaultImage: 'https://static.z023.cn/pub/noImages.jpg',
  defaultErrorImage:'https://static.z023.cn/pub/noImages.jpg',
  taskStatus:{
    FREE:{key:'FREE',name:'未发布',color:'#aaaaaa'},
    UNDONE:{key:'UNDONE',name:'未处理',color:'#ec6459'},
    PROCESSING:{key:'PROCESSING',name:'处理中',color:'#8175c7'},
    COMPLETED:{key:'COMPLETED',name:'已完成',color:'#5cb85c'},
    CLOSE:{key:'CLOSE',name:'已关闭',color:'#108ee9'},
    UNACK:{key:'UNACK',name:'已关闭',color:'#108ee9'},
  },
  measureName:{
    'temperature':{code:'temperature',name:'温度'},
    'pm2p5':{code:'pm2p5',name:'PM2.5'},
    'pm10':{code:'pm10',name:'PM10'},
    'noise':{code:'noise',name:'噪音'},
    'windSpeed':{code:'windSpeed',name:'风速'}
  },
  interval:{
    'HOUR':{code:'HOUR',name:'时'},
    'DAY':{code:'DAY',name:'日'},

  },
  projectStatus: [
     '项目在建',
      '项目竣工',
    '项目停工',
  ],
  sourceType:{
    WARNING:{key:"WARNING"},
  },
  SelectMod: {
    single: "single",
    multi: "multi",
  },
  Sex: {'Femal':'女', 'Male':'男','MALE':'男','FEMALE':'女'},

  cardTypeColor:{
    Green: '#5cb85c',
    Yellow: '#f0ad4e',
    Blue: '#108ee9',
    Red: '#ec6459',
    defaultType: '',
  },
  cardType: {
    Green: '作业工人',
    Yellow: '施工管理员',
    Blue: '监理',
    Red: '建设单位管理人员',
    defaultType: '',
  },
  userType: {
    GOV: 'GOV',
    PROJECT: 'PRORJECT',
    SYSTEM: 'SYSTEM',
    LEADER: 'LEADER',
    ADMIN:'super_admin'
  },
  userTypeName: {
    GOV: '政府',
    PROJECT: '项目',
    SYSTEM: '系统',
    LEADER: '领导',
  },
  // 预警类型
  WarningType: {
    safety: {code: 'safety', name: '安全',},
    env: {code: 'env', name: '环境',},
    equipment: {code: 'equipment', name: '设备',},
    attendance: {code: 'attendance', name: '考勤',},
    qc: {code: 'qc', name: '质量',},
    video: {code: 'video', name: '监控',},
    quality: {code: 'quality', name: '质量',},
    schedule: {code: 'schedule', name: '进度',},

  },
  WarningTypeIcon:{
    NOISE:'\ue843',
    PM2P5:'\ue641',
    PM10:'\ue641',
    TEMPERATURE:'\ue641',

  },
  // 预警子类型
  WarningSubType: {
    safety: {code: 'safety', name: '安全',},
    attendance: {code: 'attendance', name: '考勤',},
    envWind: {code: 'envWind', name: '风速',},
    envNoise: {code: 'envNoise', name: '噪音',},
    envTemperature: {code: 'envTemperature', name: '气温',},
    envPm2p5: {code: 'envPm2p5', name: 'PM2.5',},
    envPm10: {code: 'envPm10', name: 'PM10',},
    equipment: {code: 'equipment', name: '设备',},
    video: {code: 'video', name: '视频监控',},
    safeBelt: {code: 'safeBelt', name: '安全带',},
    loadingPlatform: {code: 'loadingPlatform', name: '卸料平台',},
    crane: {code: 'crane', name: '塔式起重机',},
    elevator: {code: 'elevator', name: '施工升降机',},
  },
  Color: {
    primary: "#108ee9",
    info: "#8175c7",
    success: "#5cb85c",
    warning: "#f0ad4e",
    danger: "#ec6459",
    grey: "#aaaaaa",
    dark: "#3a3f51",
    white: "#fff",
    teal: "#009688",
    container: "#efeff4",

  },
  // 预警类型
  WarningLevel: [
     {code: '1', name: '蓝色', background: '#108ee9', color: '#fff'},
    {code: '2', name: '黄色', background: 'rgb(233,194,0)', color: '#fff'},
     {code: '3', name: '橙色', background: 'rgb(255,142,0)', color: '#fff'},
     {code: '4', name: '红色', background: '#ec6459', color: '#fff'},
  ],
 WarningStatus:{
   UNDONE:{name:'未处理',background:'#ec6459'},
   COMPLETED:{name:'已完成',background:'#5cb85c'},
   UNACK:{name:'未响应',background:'#f0ad4e'}
 },
  projectResourcesMap: new Map([['env', {name: '环境监测', icon:'\ue6e3',isIgnore: true,isPersonGroup:false,isDevGroup:true,isDangerGroup:false}],
    ['equipment', {name: '机械', icon:'\ue612', isIgnore: true,isPersonGroup:false,isDevGroup:true,isDangerGroup:false}], ['danger', {name: '危大工程', icon:'\ue6a8', isIgnore: false,isPersonGroup:false,isDevGroup:false,isDangerGroup:true}],
    ['video', {name: '视频监控', icon:'\ue621',isIgnore: true,isPersonGroup:false,isDevGroup:true,isDangerGroup:false}], ['attendance', {name: '考    勤', icon:'\ue65b', isIgnore: true,isPersonGroup:true,isDevGroup:false,isDangerGroup:false}],
    ['worker_js', {name: '建设人员', isIgnore: true}], ['worker_jl', {name: '监理人员', isIgnore: true}],
    ['lifter', {name: '施工升降机', icon:'\ue612', isIgnore: true,isPersonGroup:false,isDevGroup:true,isDangerGroup:false}],
    ['salary', {name: '农民工工资', icon:'\ue612', isIgnore: true,isPersonGroup:true,isDevGroup:false,isDangerGroup:false}],
    ['projectWarnings', {name: '预警消息', icon:'\ue651', isIgore: false,isPersonGroup:false,isDevGroup:false,isDangerGroup:true}],
    ['worker_sg', {name: '施工人员', isIgnore: true}], ['worker', {name: '项目人员',icon:'\ue62b', isIgnore: false,isPersonGroup:true,isDevGroup:false,isDangerGroup:false}],
  ]),
  projectResourceGridMap:[
    'video','env','equipment','danger'
  ],
  projectResourceListMap:[
    'worker','attendance'
  ],
  resourcesIcon: {
    projectWarnings: '\ue651',
    env: '\ue63c',
    equipment: '\ue6a8',
    danger: '\ue651',
    video: '\ue621',
    attendance: '\ue65b',
    worker: '\ue62b',
    worker_js: '\ue617',
    worker_sg: '\ue62b',
    worker_jl: '\ue61e'
  },
  resourceColor: {
    env: '#24f4b9',
    equipment: '#b29505',
    danger: "#ec6459",
    video: "#8175c7",
    attendance: "#5cb85c",
    worker: "#009688",
    worker_js: "#009688",
    worker_sg: "#009688",
    worker_jl: "#009688"
  }
};
