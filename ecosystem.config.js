module.exports = {
  apps : [{
    name: "vancity-app",
    script: "server.js",
    instances:4,
    env: {
      NODE_ENV: "production",
    }
  }]
}