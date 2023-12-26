'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {
    async index(ctx) {
        try {
            ctx.body = 'Hello World'
        } catch(err) {
            ctx.body = err
        }
    }
}