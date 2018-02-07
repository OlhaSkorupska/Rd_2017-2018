'use strict';
const Controller = require('./../../utils/controller');
const db = require('../../models/v1');
const Format = require('./../../utils/formatter');

class UserController extends Controller{
    constructor(version) {
        super(version);

        this.search = [
            this.validator.user.userSearch,
            this._findUser
        ];

        this.getCompanies = [
            this._getListCompanies
        ];

        this.getCount = [
            this._getCount
        ];

        this.getUserById = [
            this._getUserById,
            this._returnUser
        ];

        this.addUser = [
            this.validator.user.userEdit,
            this._createUser,
            this._returnUser
        ];

        this.editUser = [
            this._getUserById,
            this._editUser,
            this._returnUser
        ];

        this.deleteUser = [
            this._getUserById,
            this._deleteUser
        ];
    }

    /**
     * find users
     * @param req
     * @param res
     * @param next
     * @private
     */
    _findUser(req, res, next) {
        const searchParams = {};
        if (req.query.company) {
            searchParams.company = req.query.company;
        }

        searchParams.email = new RegExp(req.query.email);

        db.Users.find(searchParams).exec()
            .then(users => {
                res.status(200).send(Format.wrapper(users));
            })
            .catch(next);
    }

    /**
     * get List of 'TABLES' but it just companies
     * @param req
     * @param res
     * @param next
     * @private
     */
    _getListCompanies(req, res, next) {
        db.Users.find().distinct('company')
            .then(users => {
                res.status(200).send(Format.wrapper(Format.companyList(users)));
            })
            .catch(next);
    }

    /**
     *  get count of all documents or count of documents by company
     * @param req
     * @param res
     * @param next
     * @private
     */
    _getCount(req, res, next) {
        const searchParams = {};
        if(req.query.company) {
            searchParams.company = req.query.company;
        }
        db.Users.find(searchParams)
            .count()
            .exec()
            .then(count => {
                res.status(200).send(Format.wrapper({count: count}));
            }).catch(next);
    }

    /**
     * create user entity
     * @param req
     * @param res
     * @param next
     * @private
     */
    _createUser(req, res, next) {
        db.Users.create(req.body, (err, data) => {
            if(err) {
                return next(err);
            }

            res.locals.users = data;
            next()
        })
    }

    /**
     * return formatted user
     * @param req
     * @param res
     * @param next
     * @private
     */
    _returnUser(req, res, next) {
        res.status(201).send(Format.wrapper(res.locals.user))
    }


    /**
     * get user by Id
     * @param req
     * @param res
     * @param next
     * @private
     */
    _getUserById(req, res, next) {
        db.Users.findById(req.params.id, (err, user) => {
            if(err) {
                return next();
            }

            if(!user) {
                const err = new Error();
                err.status = 404;
                err.message = 'User not found';
                return next(err);
            }

            res.locals.user = user;
            next();
        })
    }

    /**
     * edit user
     * @param req
     * @param res
     * @param next
     * @private
     */
    _editUser(req, res, next) {
        const newUser = Object.assign(res.locals.user, req.body);
        newUser.save((err, user) => {
            if(err) {
                return next(err);
            }

            res.locals.user = user;
            next();
        })
    }

    /**
     * delete user
     * @param req
     * @param res
     * @param next
     * @private
     */
    _deleteUser(req, res, next) {
        res.locals.user.remove((err) => {
            if(err) {
                return next(err);
            }

            res.status(200).send()
        });
    }
}

module.exports = UserController;