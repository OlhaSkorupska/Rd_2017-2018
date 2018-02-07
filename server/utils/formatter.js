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
     * Format Companies into objects
     * @param data
     * @returns {*}
     */
    static companyList(data) {
        function rewriteSingleModel(content) {
            return {
                company: content
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