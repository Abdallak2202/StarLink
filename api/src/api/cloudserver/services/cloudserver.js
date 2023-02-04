'use strict';

/**
 * cloudserver service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cloudserver.cloudserver');
