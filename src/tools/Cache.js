const cacheMap = new Map()

export default class Cache {



  static set (key,value){

    cacheMap.set(key,value)

    console.log( cacheMap.get(key))
  }
  static get(key){
    console.log( cacheMap.get(key))
    return cacheMap.get(key)
  }
  static clear(){
    cacheMap.clear()
  }
}
