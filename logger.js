const moment = require('moment');
const logger = (req, res, next) => {
    console.log(req.get('host'));
    console.log(req.originalUrl);
    console.log(moment().format());
    next();
}

module.exports = logger;