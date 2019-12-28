import { UserModel } from '../../models/UserModel'
import http from '../../helpers/http'
import {
  LOGIN_URL,
  LOGOUT_URL,
  APP_USER_KEY_LOCAL_STORAGE,
  WHO_AM_I_URL,
  AUTHENTICATE_PWD_URL
} from './constants'

const users = [
  { email: 'zeller@admin.com', password: 'zeller@admin', token: 'Barear your#JWT#admin#user#Token', type: 'ADMIN' },
  { email: 'zeller@general.com', password: 'zeller@general', token: 'Barear your#JWT#general#user#Token', type: 'GENERAL' }
]

class AuthService {
  static loggedUserModel = null

  static async login (email, password) {
    // Remove this mock users and add the 'http.post' code to invoke
    // your authentication API

    // -- UNCOMMENT -- the bellow line to work in the real world
    // const user = await http.post(LOGIN_URL, { email, password }).then(res => res.data)

    // -- REMOVE -- the bellow lines bellow to work in the real world
    // We are not handling wron users and passwords :)
    console.log(`It was suppose to call the following endpoint: ${LOGIN_URL}`)
    const user = await new Promise((resolve) => {
      // simulating a delay of 3 seconds
      setTimeout(() => {
        resolve(users.find(u => u.email === email && u.password === password))
      }, 3000)
    })
    http.setAuthorizationToken(user.token)

    const appUserLogin = {
      date: new Date().getDate(),
      token: user.token
    }

    localStorage.setItem(APP_USER_KEY_LOCAL_STORAGE, JSON.stringify(appUserLogin))

    this.loggedUserModel = new UserModel(user)

    return this.loggedUserModel
  }

  static async logout () {
    // await http.post(LOGOUT_URL) -- UNCOMMENT -- this line to work in the real world
    console.log(`It was suppose to call the following endpoint: ${WHO_AM_I_URL}`)
    localStorage.removeItem(APP_USER_KEY_LOCAL_STORAGE)
    this.loggedUserModel = null
  }

  static async whoAmI () {
    let user = null
    const appUserLogin = JSON.parse(localStorage.getItem(APP_USER_KEY_LOCAL_STORAGE))

    if (this.isSessionExpired()) {
      localStorage.removeItem(APP_USER_KEY_LOCAL_STORAGE)
    } else {
      if (!this.loggedUserModel) {
        http.setAuthorizationToken(appUserLogin.token)
        // -- UNCOMMENT -- the line bellow to work in real the world
        // const whoAmIres = await http.get(WHO_AM_I_URL).then(res => res.data)
        console.log(`It was suppose to call the following endpoint: ${LOGOUT_URL}`)
        const whoAmIres = { ...await new Promise((resolve) => {
          // simulating a delay of 1 seconds
          setTimeout(() => {
            resolve({ user: users.find(u => u.token === appUserLogin.token) })
          }, 1000)
        }) }
        this.loggedUserModel = new UserModel(whoAmIres)
      }

      user = this.loggedUserModel
    }

    return user
  }

  static isSessionExpired () {
    const appUserLogin = JSON.parse(localStorage.getItem(APP_USER_KEY_LOCAL_STORAGE))
    if (!appUserLogin) {
      return true
    }
    return appUserLogin.date !== new Date().getDate()
  }

  static authenticateUserPassword (password) {
    return http.post(AUTHENTICATE_PWD_URL, { password }).then(res => new UserModel(res.data))
  }
}

export {
  AuthService
}
