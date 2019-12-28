import { AuthService } from 'src/services'
class RequiresAuthViewModel {
  static data = () => ({
    leftDrawerOpen: false,
    loggedUserModel: {}
  })
  static methods = {
    init: async (vm) => {
      vm.loggedUserModel = await vm.getLoggedUser()
    },
    getLoggedUser: (vm) => AuthService.whoAmI()
  }

  static computed = {}

  static mounted (vm) {
    return vm.init()
  }
}

export { RequiresAuthViewModel }
