'use strict';

/**
 * housing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::housing.housing');
