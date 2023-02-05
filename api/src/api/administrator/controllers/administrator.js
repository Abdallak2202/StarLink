'use strict';

/**
 * administrator controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::administrator.administrator');
