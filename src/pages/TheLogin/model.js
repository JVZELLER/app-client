import { AuthService } from 'src/services'

class LoginViewModel {
  static data = () => ({
    user: {
      email: '',
      password: ''
    },
    isPwd: true
  })

  static methods = {
    submit: async (vm) => {
      vm.$loader.show({ message: 'Logging in...' })

      return AuthService.login(vm.user.email, vm.user.password)
        .then((user) => {
          vm.$router.push({ name: 'app.home' })
        })
        .catch((error) => {
          vm.$snackbar.error({ error })
        })
        .finally(vm.$loader.hide)
    },
    appVersionLabel: () => `V ${process.env.APP_VERSION}${process.env.ENVIRONMENT_INDICATOR}`
  }
}

export { LoginViewModel }
