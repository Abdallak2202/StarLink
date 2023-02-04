'use strict';

/**
 * cloudserver controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cloudserver.cloudserver');
