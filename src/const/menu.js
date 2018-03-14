import _const from './_Const'

export default {

  items: [
    {
      title: '预警消息',
      key: 'warnings',
      iconCode: '\ue651',
      backgroundColor: _const.Color.danger,
      describe: '预警信息从这里查看',
      hidden: false

    },
    {
      title: '待办事务',
      key: 'task',
      iconCode: '\ue651',
      backgroundColor: _const.Color.warning,
      describe: '待办事务，为您快捷处理工作',
      hidden: false
    }, {
      title: '行业新闻',
      key: 'news',
      iconCode: '\ue651',
      backgroundColor: _const.Color.primary,
      describe: '全部新闻从这里查看',
      hidden: false
    }, {
      title: '通知公告',
      key: 'notice',
      iconCode: '\ue651',
      backgroundColor: _const.Color.success,
      describe: '通知信息从这里查看',
      hidden: true
    },  {
      title: '交流中心',
      key: 'communication',
      iconCode: '\ue651',
      backgroundColor: _const.Color.info,
      describe: '所有交流消息从这里查看',
      hidden:true
    }


  ],
}
