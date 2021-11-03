const saslprep = require("saslprep");
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: `mongodb://skyes07:${saslprep(
          "bmwb1gtr"
        )}@cluster0-shard-00-00.rhig1.mongodb.net:27017,cluster0-shard-00-01.rhig1.mongodb.net:27017,cluster0-shard-00-02.rhig1.mongodb.net:27017/goodunk?ssl=true&replicaSet=atlas-kl9pu9-shard-0&authSource=admin&retryWrites=true&w=majority`,
        srv: env.bool("DATABASE_SRV", true),
        port: env.int("DATABASE_PORT", 27017),
        database: "goodunk",
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
