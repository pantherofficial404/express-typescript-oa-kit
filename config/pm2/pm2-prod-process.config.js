// cluster mode for production env
module.exports = {
    apps: [{
        ...require('./pm2.config'),
        instances: 'max',
        exec_mode: "cluster",
        env: {
            "PORT": 8080,
            "NODE_ENV": "production"
        },
    }]
}