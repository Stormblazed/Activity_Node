const Bookinstance = require('./bookinstance');

//Create REST API, adds CRUD to Mongog's schema

Bookinstance.methods(['get', 'post', 'put', 'delete']);

//Return post/put methods updated

Bookinstance.updateOptions({new: true, runValidators: true});

module.exports = Bookinstance