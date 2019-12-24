import Vue from 'vue'
import { ViewModelPlugin } from '@lumkani/view-model-api'
import * as vuelidateValidators from 'vuelidate/lib/validators'
import * as Loading from 'src/services/loading.service'
import * as SnackBar from 'src/services/snackBar.service'

Vue.use(ViewModelPlugin, { validators: { ...vuelidateValidators } })

Vue.prototype.$snackbar = SnackBar
Vue.prototype.$loader = Loading
