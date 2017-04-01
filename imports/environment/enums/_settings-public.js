import { Meteor } from 'meteor/meteor';

const {
  'public': {
    appSSL: APP_SSL,
    appDomain: APP_DOMAIN,
    landingDomain: LANDING_DOMAIN,
    reservedDomains: RESERVED_DOMAINS,
    cookieName: COOKIE_NAME,
    invitationsExpireInDays: INVITATIONS_EXPIRE_IN_DAYS,
    daysOfCompletedTasksVisible: DAYS_OF_COMPLETED_TASKS_VISIBLE,
    uploadFileSizeLimitMb: UPLOAD_FILE_SIZE_LIMIT_MB,
    uploadQuoataMb: UPLOAD_QUOTA_MB,
    filepicker: {
      key: FILEPICKER_KEY,
    },
    intercom: {
      active: INTERCOM_ACTIVE,
      appId: INTERCOM_APP_ID,
    },
    exponea: {
      projectToken: EXPONEA_PROJECT_TOKEN
    }
  }
} = Meteor.settings;

export const PublicSettings = {
  APP_SSL,
  APP_DOMAIN,
  LANDING_DOMAIN,
  RESERVED_DOMAINS,
  COOKIE_NAME,
  INVITATIONS_EXPIRE_IN_DAYS,
  DAYS_OF_COMPLETED_TASKS_VISIBLE,
  UPLOAD_FILE_SIZE_LIMIT_MB,
  UPLOAD_QUOTA_MB,
  FILEPICKER_KEY,
  INTERCOM_ACTIVE,
  INTERCOM_APP_ID,
  EXPONEA_PROJECT_TOKEN,
};
