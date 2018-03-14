export default class UserHelper {
  static getRole (user){
    if(user&&user.role){
      return user.role
    }
    return null
  }
  static getRoleNameOfRoleArray(roles){
    const roleNames=[]
    if(roles&&roles.length){
      roles.map(role=>{
        roleNames.push(role.name?role:role.role?role.role:'')
      })
    }
    return roleNames
  }
  static getGroupUsersByRoleName(users,roles){
    const userGroupNames=[]
    if(users&&users.length&&roles&&roles.length){

      roles.map(role=>{
        const roleUsers=[]
        roleUsers.push(role)
        users.map(user=>{
          if(user.role&&user.role.name&&user.role.name===role.name){
            roleUsers.push(user.user?user.user:user)
          }
        })
        userGroupNames.push(roleUsers)
      })

    }
    return userGroupNames
  }
}
