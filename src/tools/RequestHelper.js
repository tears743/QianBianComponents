import {NetInfo, Platform} from 'react-native'
import _Tools from '../tools/_Tools'
import _RestTools from '../tools/_RestTools'
import {Toast} from 'antd-mobile'
 async function checkConnect() {
  const netInfo = await NetInfo.getConnectionInfo()
  return netInfo !== 'none' && netInfo !== 'NONE'
}


export default class RequestHelper {

  constructor(apiName,isDebuge) {
    this.state = {
      apiName: apiName,
      OS: Platform.OS,
      isConnected: true,
      testable:isDebuge||false,
    }
  }



  /*
  * option:{
  *   params:参数
  *
  * }
  *
  * */

  parseParams = (option) => {
    let params = option && option.params
    let parsedParams = {}
    if (params && params.where && params.where.length) {
      parsedParams = {where: _Tools.makeBase64Params(params.where)}
      delete params.where
      parsedParams = {...parsedParams, ...params}
    } else {
      if (params && params.where) {
        delete params.where
      }

      parsedParams = params
    }
    return parsedParams
  }

  async testUrl() {
    const isConnected = await checkConnect()
    return new Promise((resolve, reject) => {
      if (isConnected) {
        _RestTools.get(this.state.apiName, null, (err, res) => {
          console.log(res,err)
          if (!err) {
            resolve('success')
          } else {
            resolve(false)
          }
        })
      } else {
        reject('offline')
      }
    })
  }

  async del(options) {
    const isConnected = await checkConnect()
    return new Promise((resolve, reject) => {
      if (isConnected) {
        _RestTools.httpDel(this.state.apiName, this.parseParams(options), (err, res) => {
          console.log(res)
          if (err) reject(err)
          let result = {}
          if (!res || !res.body) reject('no body')
          const body = res.body

          if (body && body.code && body.code === '0') {
            result = {code: body.code, data: body.content, page: body.page}
            resolve(result)
          }

        })
      } else {
        resolve(null)
      }
    })
  }

  async put(options) {
    const isConnected = await checkConnect()
    return new Promise((resolve, reject) => {
      if (isConnected) {
        console.log(this.parseParams(options))
        _RestTools.httpPut(this.state.apiName, this.parseParams(options), (err, res) => {
          console.log(res)
          if (err) reject(err)
          let result = {}
          if (!res || !res.body) reject('no body')
          const body = res.body

          if (body && body.code && body.code === '0') {
            result = {code: body.code, data: body.content, page: body.page}
            resolve(result)
          }

        })
      } else {
        reject('offline')
      }
    })
  }

  async post(options) {
    const isConnected = await checkConnect()
    return new Promise((resolve, reject) => {
      if (isConnected) {
        _RestTools.httpPost(this.state.apiName, this.parseParams(options), (err, res) => {
          console.log(res)
          if (err) reject(err)
          let result = {}
          if (!res || !res.body) reject('no body')
          const body = res.body

          if (body && body.code && body.code === '0') {
            result = {code: body.code, data: body.content, page: body.page}
            resolve(result)
          }

        })
      } else {
        reject('offline')
      }
    })
  }

  async find(options) {

    const isConnected = await checkConnect()
    console.log(isConnected)
    return new Promise((resolve, reject) => {
      if (isConnected) {
        if (this.state.testable) {
          _RestTools.testHttpGet('/GET'+this.state.apiName, this.parseParams(options), (err, res) => {
            console.log(res)
            if (err) reject(err)
            let result = {}
            if (!res || !res.body) reject('no body')
            const body = res.body
            console.log(body)
            const content=body&&body.content?body.content:[]
            if (body &&body.page && body.code && body.code === '0') {
              result = {code:body.code,data: content, page: body.page}
              resolve(result)
            }
          })
        } else {
          _RestTools.httpGet(this.state.apiName, this.parseParams(options), (err, res) => {
            console.log(res)
            if (err) reject(err)
            let result = {}
            if (!res || !res.body) reject('no body')
            const body = res&&res.body

            console.log(body)
            const content=body&&body.content?body.content:[]
            const page=body&&body.page?body.page:{}
            if (body && body.code && body.code === '0') {
              result = {code:body.code,data: content, page: page}
              resolve(result)
            }
          })
        }

      } else {
        Toast.fail('无网络链接！',2)
        reject('offline')

      }
    })


  }
}
