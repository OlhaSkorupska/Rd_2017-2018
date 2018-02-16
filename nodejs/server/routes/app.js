var express = require('express');
var controllers = require('../controllers/ControllerManager');
var app = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, __dirname + '../uploads');
    },
    filename(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

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
app.get('/:version/users/languages', controllers.callAction('user.getLanguages'));
app.get('/:version/users/names', controllers.callAction('user.getNames'));
app.get('/:version/users/picture', controllers.callAction('user.getPicture'));
/* app.route('/:version/users')
    .post(controllers.callAction('user.addUser')); */
app.route('/:version/users/:id')
    .patch(controllers.callAction('user.editUser'))
    .get(controllers.callAction('user.getUserById'))
    .delete(controllers.callAction('user.deleteUser')); 

app.post('/:version/users', controllers.callAction('user.addUser'));
// app.patch('/:version/users/:id', upload.single('picture'), controllers.callAction('user.editUser'));
app.patch('/:version/users/:id', controllers.callAction('user.editUser'));
app.delete('/:version/users/:id', controllers.callAction('user.deleteUser'));
//app.route('/:version/users/:id')
//    .patch(controllers.callAction('user.editUser'))

module.exports = {
    default: app
};
