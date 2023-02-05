'use strict';

/**
 * dedicateserver service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dedicateserver.dedicateserver');
