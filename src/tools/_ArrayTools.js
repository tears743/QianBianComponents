export default {
    sortedArrayByName :(array,sortedName)=>{

        if(array.length<1){
            return []
        }
        return array.sort((element,elementOther)=>{
            return element[sortedName]-elementOther[sortedName]
        })

    }
}