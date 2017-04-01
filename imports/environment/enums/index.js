import { Meteor } from 'meteor/meteor'
import { Countries } from './_countries'
import { Currencies } from './_currencies'
import { AllowedFileUploadExtensions } from './_file-extensions'
import { DialCodes } from './_dial-codes'
// import { PublicSettings } from './_settings-public'
import { TimeZones } from './_time-zones'
import { WeekDays } from './_week-days'
import { DateFormats } from './_date-formats'
import { TimeFormats } from './_time-formats'
import * as Enums from './_enums'

export const ACCOUNT_STATUS = Enums.ACCOUNT_STATUS

export const BUSINESS_ID = Enums.BUSINESS_ID

export const CONNECTION_STATUS = Enums.CONNECTION_STATUS

export const COUNTRY = Countries

export const ALLOWED_FILE_UPLOAD_EXTENSIONS = AllowedFileUploadExtensions

export const CURRENCY = Currencies

export const DIAL_CODE = DialCodes

export const LOGIN_METHOD = Enums.LOGIN_METHOD

export const LOGIN_TYPE = Enums.LOGIN_TYPE

export const TAG_CATEGORY = Enums.TAG_CATEGORY

export const PROJECT_STATUS = Enums.PROJECT_STATUS

export const TASK_STATUS = Enums.TASK_STATUS

export const PROJECT_TASKS_VIEW = Enums.PROJECT_TASKS_VIEW

export const SIDEBAR_TAB = Enums.SIDEBAR_TAB

export const COMMENTABLE_COLLECTION = Enums.COMMENTABLE_COLLECTION

export const CHAT_CHANNEL_TYPE = Enums.CHAT_CHANNEL_TYPE

export const NOTIFICATION_SOURCE = Enums.NOTIFICATION_SOURCE

export const DRAG_DROP_TYPE = Enums.DRAG_DROP_TYPE

export const USER_TASK_STATUS = Enums.USER_TASK_STATUS

export const TIME_ZONE = TimeZones

export const USER_ROLE = Enums.USER_ROLE

// export const SETTING_PUBLIC = PublicSettings

export const FILE_BY = Enums.FILE_BY

export const IMAGES_EXT = Enums.IMAGES_EXT

export const WEEK_DAYS = WeekDays

export const DATE_FORMATS = DateFormats

export const TIME_FORMATS = TimeFormats

export const CUSTOM_STATUS_COLORS = Enums.CUSTOM_STATUS_COLORS

export const CUSTOM_STATUS = Enums.CUSTOM_STATUS

export const DEFAULT_PROJECT_STATUS = Enums.DEFAULT_PROJECT_STATUS

export const USER_TASK_REPETITION = Enums.USER_TASK_REPETITION

export const TASK_CATEGORY_VIEW = Enums.TASK_CATEGORY_VIEW

export const CHAT_CATEGORY_VIEW = Enums.CHAT_CATEGORY_VIEW

/*
export const SETTING_PRIVATE = (() => {
  if (Meteor.isServer){
    import { PrivateSettings } from './_settings-private'
    return PrivateSettings;
  } else {
    return {}
  }
})()
*/
