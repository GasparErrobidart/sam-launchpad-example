// sam-launchpad.config.js
const join = require('path').join;

module.exports = {
  "project_name" : "some-serverless-app",
  "projects" : join( __dirname , "./projects" ),
  "commands" : {
    "build" : "exit 0",
    "test" : "exit 0"
  }
}
