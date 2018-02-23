module.exports = {
    host : process.env.DB_HOST           || 'localhost',
    port : parseInt(process.env.DB_PORT) || 27017,
    name : process.env.DB_NAME           || 'homework_dev',
    user : process.env.DB_USER           || 'root',
    pass : process.env.DB_PASS           || 'root',
    socketTimeoutMS : 5*60*1000,
    connectionTimeout : 5*60*1000
};