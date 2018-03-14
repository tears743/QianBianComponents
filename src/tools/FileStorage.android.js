import RNFS from 'react-native-fs'
import { Base64 } from 'js-base64';
import Cache from './Cache'
const filepath=RNFS.DocumentDirectoryPath+'/ljxq/'
const fileName = 'data'
export default class FileStorage {

  static  setItem = async function (key, value) {
    try {
      const dirExist = await RNFS.exists(filepath)
      const fileExist = await RNFS.exists(filepath + fileName)
      if (!dirExist) {
        await RNFS.mkdir(filepath)
      }
      // Cache.set(key, Base64.encode(JSON.stringify(value)))
      if (fileExist) {
        const content = await RNFS.readFile(filepath + fileName, 'base64')


        const contentObj = JSON.parse(Base64.decode(content))
        const newContent = {...contentObj}
        newContent[key] = value
        console.log(newContent)

        const newContentBase64 = Base64.encode(JSON.stringify(newContent))
        RNFS.write(filepath + fileName, newContentBase64, 0, 'base64')

      } else {
        await RNFS.mkdir(filepath)
        const content = {}
        content[key] = value
        const contentBase64 = Base64.encode(JSON.stringify(content))
        console.log(contentBase64)
        RNFS.write(filepath + fileName, contentBase64, 0, 'base64')
      }
      return new Promise(resolve => resolve('success'))
    } catch (err) {

      return new Promise((resolve, reject) => {
        reject(err)
      })
    }
  }

  static clearAll = async function () {
    try {
      // Cache.clear()
      const dirExist = await RNFS.exists(filepath)
      const fileExist = await RNFS.exists(filepath + fileName)
      if (dirExist && fileExist) {
        // const newContent = {}
        // const newContentBase64 = Base64.encode(JSON.stringify(newContent))
        // RNFS.write(filepath + fileName, newContentBase64,0,'base64')
        RNFS.unlink(filepath + fileName)
      }
    } catch (err) {
      console.warn(err)
    }
    return new Promise((resolve, reject) => {
      resolve()
    })
  }


  static getItem = async function (key) {
    // if (!Cache.get(key)) {
      const dirExist = await RNFS.exists(filepath)
      const fileExist = await RNFS.exists(filepath + fileName)
      const filePath = filepath + fileName
      let content = ''
      if (dirExist && fileExist) {
        content = await RNFS.readFile(filePath, 'base64')
      }
      return new Promise((resolve, reject) => {
        if (!dirExist || !fileExist) reject('file or filepath does not exist !')
        if (!content) reject('file content is empty !')
        if (!key) reject('key is empty !')
        console.log(content)
        const contentObj = JSON.parse(Base64.decode(content))
        if (!contentObj[key]) reject(`${key} does not exist!`)
        // Cache.set(key, contentObj[key])
        resolve(contentObj[key])
      })
    // } else {
    //   return new Promise((resolve, reject) => {
    //     // resolve(Cache.get(key))
    //   })
    // }


  }
}
