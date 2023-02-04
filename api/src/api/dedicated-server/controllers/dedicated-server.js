'use strict';

/**
 * dedicated-server controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dedicated-server.dedicated-server');
