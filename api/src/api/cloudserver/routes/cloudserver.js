'use strict';

/**
 * cloudserver router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cloudserver.cloudserver');
