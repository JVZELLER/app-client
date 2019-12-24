import { UserModel } from '../../models/UserModel'
import http from '../../helpers/http'
import {
  LOGIN_URL,
  LOGOUT_URL,
  APP_USER_KEY_LOCAL_STORAGE,
  WHO_AM_I_URL,
  AUTHENTICATE_PWD_URL
} from './constants'

class AuthService {
  static loggedUserModel = null

  static async login (email, password) {
    const user = await http.post(LOGIN_URL, { email, password }).then(res => res.data)
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
    await http.post(LOGOUT_URL)
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
        const whoAmIres = await http.get(WHO_AM_I_URL).then(res => res.data)
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
