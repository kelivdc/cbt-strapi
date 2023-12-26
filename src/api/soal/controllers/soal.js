"use strict";

/**
 * soal controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::soal.soal", ({ strapi }) => ({
  async find(ctx) {
    await this.validateQuery(ctx);
    const user = ctx.state.user;
    if (user.role.type == "member") {
      ctx.query.filters = {
        ...(ctx.query.filters || {}),
        Topik: {
          users: {
            id: user.id,
          },
        },
      };
    }
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const { results, pagination } = await strapi
      .service("api::soal.soal")
      .find(sanitizedQueryParams);    
    const sanitizedResults = await this.sanitizeOutput(results, ctx);

    return this.transformResponse(results, { pagination });
  },
}));
