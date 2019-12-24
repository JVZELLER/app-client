import USER_TYPE from 'src/helpers/userType'

class UserModel {
  constructor (user) {
    this.id = user.id
    this.email = user.email
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.token = user.token
    this.type = user.type
  }

  get isAdminUser () {
    return this.type === USER_TYPE.ADMIN
  }

  get name () {
    return `${this.name} ${this.lastName}`
  }
}

export {
  UserModel
}
