'use strict';

/**
 * administrator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::administrator.administrator');
