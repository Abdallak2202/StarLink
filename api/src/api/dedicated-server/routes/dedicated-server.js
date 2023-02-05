'use strict';

/**
 * dedicated-server router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dedicated-server.dedicated-server');
