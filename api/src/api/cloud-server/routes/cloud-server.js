'use strict';

/**
 * cloud-server router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cloud-server.cloud-server');
