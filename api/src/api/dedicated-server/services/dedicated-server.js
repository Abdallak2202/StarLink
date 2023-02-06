'use strict';

/**
 * dedicated-server service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dedicated-server.dedicated-server');
