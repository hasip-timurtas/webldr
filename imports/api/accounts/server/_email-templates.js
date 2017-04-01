import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { buildSystemEmail } from '/imports/utils/email'


Meteor.startup(() => {

})

/*
Accounts.emailTemplates.siteName = 'Ldrlottery'
Accounts.emailTemplates.from = `Ldrlottery Information<info@ldrlottery.com>`

Accounts.emailTemplates.enrollAccount.subject = user => `Welcome to Awesome Town, ${user.profile.name}`
Accounts.emailTemplates.enrollAccount.text = (user, url) => `${'You have been selected to participate in building a better future!'
    + ' To activate your account, simply click the link below:\n\n'}${
     url}`
Accounts.emailTemplates.resetPassword.from = () =>
  // Overrides the value set in `Accounts.emailTemplates.from` when resetting
  // passwords.
   'AwesomeSite Password Reset <no-reply@example.com>'

Accounts.emailTemplates.verifyEmail = {
  subject () {
    return 'Activate your account now!'
  },
  text (user, url) {
    return `Hey ${user}! Verify your e-mail by following this link: ${url}`
  }
}
*/


Accounts.emailTemplates.siteName = 'LDR Lottery'
Accounts.emailTemplates.from = `LDR Lottery <info@ldrlottery.com>`

Accounts.emailTemplates.resetPassword = {
  subject (user) {
    return `Reset your password`
  },
  html (user, url) {
    return buildSystemEmail({
      firstName: Meteor.users.masterProfile.findOne({ userId: user._id }).name.first,
      appUrl: Meteor.absoluteUrl(),
      messageTextLines: [
        `You have requested to reset your account's (${user.emails[0].address}) password.`,
        'To reset your password, please click on the link below.'
      ],
      actionUrl: url.replace('#/reset-password', 'verify-password-reset'),
      actionText: 'Reset password',
      supportEmail: 'info@ldrlottery.com'
    })
  }
}

Accounts.emailTemplates.verifyEmail = {
  subject (user) {
    return `Verify your email address`
  },
  html (user, url) {
    return buildSystemEmail({
      firstName: Meteor.users.masterProfile.findOne({ userId: user._id }).name.first,
      appUrl: Meteor.absoluteUrl(),
      messageTextLines: [
        'Welcome to LDR Lottery! <br /> Click on the link below to verify your new LDR Lottery account.'
      ],
      actionUrl: url.replace('#/verify-email', 'verify-email-address'),
      actionText: 'Verify account',
      supportEmail: 'info@ldrlottery.com'
    })
  }
}
