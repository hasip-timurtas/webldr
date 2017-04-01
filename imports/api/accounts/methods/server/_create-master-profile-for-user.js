import { Meteor } from 'meteor/meteor'

export const createMasterProfileForUser = ({
  userId,
  name,
  email,
  country,
  age
}) => {
  const profileId = Meteor.users.masterProfile.insert({
    userId,
    name,
    country,
    age,
    contactEmails: [
      {
        address: email
      }
    ]
  })
}
