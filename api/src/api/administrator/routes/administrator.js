'use strict';

/**
 * administrator router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::administrator.administrator');
