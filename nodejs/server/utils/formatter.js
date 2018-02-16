'use strict';

const _ = require('lodash');

class Format {

    /**
     * Format Locations into objects
     * @param data
     * @returns {*}
     */
    static locationList(data) {
        function rewriteSingleModel(content) {
            return {
                location: content
            }
        }

        if (data instanceof Array) {
            return data.map((item) => {
                return rewriteSingleModel(item)
            });
        } else if (data instanceof Object) {
            return rewriteSingleModel(data)
        } else {
            return null;
        }
    }

    /**
     * Format Locations into objects
     * @param data
     * @returns {*}
     */
    static pictureItem(data) {
        function rewriteSingleModel(content) {
            return {
                picture: content
            }
        }

        if (data instanceof Array) {
            return data.map((item) => {
                return rewriteSingleModel(item)
            });
        } else if (data instanceof Object) {
            return rewriteSingleModel(data)
        } else {
            return null;
        }
    }
    /**
     * Format languages into objects
     * @param data
     * @returns {*}
     */
    static languageList(data) {
        function rewriteSingleModel(content) {
            return {
                language: content
            }
        }

        if (data instanceof Array) {
            return data.map((item) => {
                return rewriteSingleModel(item)
            });
        } else if (data instanceof Object) {
            return rewriteSingleModel(data)
        } else {
            return null;
        }
    }

    /**
     * Format languages into objects
     * @param data
     * @returns {*}
     */
    static nameList(data) {
        function rewriteSingleModel(content) {
            return {
                name: content
            }
        }

        if (data instanceof Array) {
            return data.map((item) => {
                return rewriteSingleModel(item)
            });
        } else if (data instanceof Object) {
            return rewriteSingleModel(data)
        } else {
            return null;
        }
    }

    /**
     * Format Companies into objects
     * @param data
     * @returns {*}
     */
    static userList(data) {
        function rewriteSingleModel(content) {
            return data;
        }

        if (data instanceof Array) {
            return data.map((item) => {
                return rewriteSingleModel(item)
            });
        } else if (data instanceof Object) {
            return rewriteSingleModel(data)
        } else {
            return null;
        }
    }

    /**
     * Wrap data into payload object
     * @param data
     * @returns {{payload: *}}
     */
    static wrapper(data) {
        return {
            payload: data
        }
    }
}

module.exports = Format;