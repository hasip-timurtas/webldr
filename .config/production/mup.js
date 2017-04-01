module.exports = {
  servers: {
    one: {
      host: '46.101.186.4',
      username: 'root',
      pem: 'c:/users/hasip/.ssh/id_rsa',
      opts: {
        port: 22
      }
    }
  },

  meteor: {
    name: 'ldrlottery',
    path: '../../',
    servers: {
      one: {}
    },
    env: {
      TZ: 'Etc/UTC',
      NODE_ENV: 'production',
      ROOT_URL: 'http://clientservicerecord.co.uk',
      MONGO_URL: 'mongodb://localhost/ldrlottery'
    },
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {}
    }
  }
}
