var express = require('express');
var controllers = require('../controllers/ControllerManager');
var app = express.Router();

// app.get('/:version/persons/locations', controllers.callAction('person.getLocations'));
// app.get('/:version/persons/search', controllers.callAction('person.search'));
// app.get('/:version/persons/count', controllers.callAction('person.getCount'));
// app.route('/:version/persons')
//    .post(controllers.callAction('person.addPerson'));
// app.route('/:version/persons/:id')
//    .patch(controllers.callAction('person.editPerson'))
//    .get(controllers.callAction('person.getPersonById'))
//    .delete(controllers.callAction('person.deletePerson'));
  
app.get('/:version/users', controllers.callAction('user.findUsers'));
app.get('/:version/users/search', controllers.callAction('user.search'));
app.get('/:version/users/count', controllers.callAction('user.getCount'));
app.route('/:version/users')
    .post(controllers.callAction('user.addUser'));    
app.route('/:version/users/:id')
    .patch(controllers.callAction('user.editUser'))
    .get(controllers.callAction('user.getUserById'))
    .delete(controllers.callAction('user.deleteUser')); 

module.exports = {
    default: app
};