'use strict';

/**
 * cloud-server service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cloud-server.cloud-server');
