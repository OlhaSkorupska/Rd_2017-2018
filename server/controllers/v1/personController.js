'use strict';
const Controller = require('./../../utils/controller');
const db = require('../../models/v1');
const Format = require('./../../utils/formatter');

class PersonController extends Controller{
    constructor(version) {
        super(version);

        this.search = [
            this.validator.person.personSearch,
            this._findPerson
        ];

        this.getLocations = [
            this._getListLocations
        ];

        this.getCount = [
            this._getCount
        ];

        this.getPersonById = [
            this._getPersonById,
            this._returnPerson
        ];

        this.addPerson = [
            this.validator.person.personEdit,
            this._createPerson,
            this._returnPerson
        ];

        this.editPerson = [
            this._getPersonById,
            this._editPerson,
            this._returnPerson
        ];

        this.deletePerson = [
            this._getPersonById,
            this._deletePerson
        ];




    }

    /**
     * find persons
     * @param req
     * @param res
     * @param next
     * @private
     */
    _findPerson(req, res, next) {
        const searchParams = {};
        if (req.query.location) {
            searchParams.location = req.query.location;
        }

        searchParams.email = new RegExp(req.query.email);

        db.Persons.find(searchParams).exec()
            .then(persons => {
                res.status(200).send(Format.wrapper(persons));
            })
            .catch(next);
    }

    /**
     * get List of 'TABLES' but it just locations
     * @param req
     * @param res
     * @param next
     * @private
     */
    _getListLocations(req, res, next) {
        db.Persons.find().distinct('location')
            .then(persons => {
                res.status(200).send(Format.wrapper(Format.locationList(persons)));
            })
            .catch(next);
    }

    /**
     *  get count of all documents or count of documents by location
     * @param req
     * @param res
     * @param next
     * @private
     */
    _getCount(req, res, next) {
        const searchParams = {};
        if(req.query.location) {
            searchParams.location = req.query.location;
        }

        db.Persons.find(searchParams)
            .count()
            .exec()
            .then(count => {
                res.status(200).send(Format.wrapper({count: count}));
            }).catch(next);
    }

    /**
     * create person entity
     * @param req
     * @param res
     * @param next
     * @private
     */
    _createPerson(req, res, next) {
        db.Persons.create(req.body, (err, data) => {
            if(err) {
                return next(err);
            }

            res.locals.person = data;
            next()
        })
    }

    /**
     * return formatted person
     * @param req
     * @param res
     * @param next
     * @private
     */
    _returnPerson(req, res, next) {
        res.status(201).send(Format.wrapper(res.locals.person))
    }


    /**
     * get person by Id
     * @param req
     * @param res
     * @param next
     * @private
     */
    _getPersonById(req, res, next) {
        db.Persons.findById(req.params.id, (err, person) => {
            if(err) {
                return next();
            }

            if(!person) {
                const err = new Error();
                err.status = 404;
                err.message = 'Person not found';
                return next(err);
            }

            res.locals.person = person;
            next();
        })
    }

    /**
     * edit person
     * @param req
     * @param res
     * @param next
     * @private
     */
    _editPerson(req, res, next) {
        const newPerson = Object.assign(res.locals.person, req.body);
        newPerson.save((err, person) => {
            if(err) {
                return next(err);
            }

            res.locals.person = person;
            next();
        })
    }

    /**
     * delete person
     * @param req
     * @param res
     * @param next
     * @private
     */
    _deletePerson(req, res, next) {
        res.locals.person.remove((err) => {
            if(err) {
                return next(err);
            }

            res.status(200).send()
        });
    }
}

module.exports = PersonController;