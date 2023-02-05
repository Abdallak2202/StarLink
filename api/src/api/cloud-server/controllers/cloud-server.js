'use strict';

/**
 * cloud-server controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cloud-server.cloud-server');
