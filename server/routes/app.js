var express = require('express');
var controllers = require('../controllers/ControllerManager');
var app = express.Router();

app.get('/:version/persons/locations', controllers.callAction('person.getLocations'));

app.get('/:version/persons/search', controllers.callAction('person.search'));

app.get('/:version/persons/count', controllers.callAction('person.getCount'));


app.route('/:version/persons')
    .post(controllers.callAction('person.addPerson'));

app.route('/:version/persons/:id')
    .patch(controllers.callAction('person.editPerson'))
    .get(controllers.callAction('person.getPersonById'))
    .delete(controllers.callAction('person.deletePerson'));

module.exports = {
    default: app
};