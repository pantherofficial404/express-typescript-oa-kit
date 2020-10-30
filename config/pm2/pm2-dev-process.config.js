module.exports = {
    apps: [{
        ...require('./pm2.config'),
        env: {
            "PORT": 8080,
            "NODE_ENV": "development"
        }
    }]
}