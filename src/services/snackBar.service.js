import { Notify } from 'quasar'

const DEFAULT_MESSAGE_TIMEOUT = 3500
const PERSISTENT_MESSAGE_TIMEOUT = 0
const THUMBS_UP_ICON = 'thumb_up'
const WARNING_ICON = 'warning'
const POSITIVE_NOTIFICATION_TYPE = 'positive'
const NEGATIVE_NOTIFICATION_TYPE = 'negative'
const TOP_POSITION = 'top'
const BOTTOM_POSITION = 'bottom'

export const success = (options) => {
  Notify.create({
    icon: THUMBS_UP_ICON,
    timeout: DEFAULT_MESSAGE_TIMEOUT,
    color: POSITIVE_NOTIFICATION_TYPE,
    position: TOP_POSITION,
    ...options
  })
}

export const error = (options) => {
  Notify.create({
    icon: WARNING_ICON,
    timeout: DEFAULT_MESSAGE_TIMEOUT,
    color: NEGATIVE_NOTIFICATION_TYPE,
    position: TOP_POSITION,
    ...options
  })
}

export const asBanner = (options) => {
  Notify.create({
    icon: 'info',
    timeout: PERSISTENT_MESSAGE_TIMEOUT,
    position: TOP_POSITION,
    classes: 'banner-info',
    actions: [{ label: 'OK', color: 'primary', handler: null }],
    ...options
  })
}

export const asToast = (options) => {
  Notify.create({
    icon: 'info',
    timeout: DEFAULT_MESSAGE_TIMEOUT,
    classes: 'disabled',
    position: BOTTOM_POSITION,
    ...options
  })
}
