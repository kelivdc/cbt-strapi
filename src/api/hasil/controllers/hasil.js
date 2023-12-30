"use strict";

/**
 * soal controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::user-jawaban.user-jawaban", ({ strapi }) => ({
  async hitung(ctx) {    
    const sql = `
        SELECT t.id, t.title, SUM(uj.skor) AS poin FROM 
        user_jawabans AS uj
        inner join user_jawabans_user_links AS ujul ON uj.id = ujul.user_jawaban_id
        inner join user_jawabans_soal_links AS ujsl ON uj.id = ujsl.user_jawaban_id
        inner join soals_topik_links AS stl ON ujsl.soal_id = stl.soal_id
        inner join topiks AS t ON t.id = stl.topik_id
        WHERE ujul.user_id = ${ctx.request.params.user_id}
        GROUP BY t.id
        ORDER BY t.title ASC
    ;
    `;    
    const entries = await strapi.db.connection.raw(sql);
    const hasil = entries[0]
    return hasil;
  },
  async hitung_topik(ctx) {    
    const topik_id = ctx.request.params.topik_id;
    const user_id = ctx.request.params.user_id;
    const sql = `
        SELECT SUM(uj.skor) AS poin FROM 
        user_jawabans AS uj
        inner join user_jawabans_user_links AS ujul ON uj.id = ujul.user_jawaban_id
        inner join user_jawabans_soal_links AS ujsl ON uj.id = ujsl.user_jawaban_id
        inner join soals_topik_links AS stl ON ujsl.soal_id = stl.soal_id
        inner join topiks AS t ON t.id = stl.topik_id
        WHERE ujul.user_id = ${ctx.request.params.user_id} AND stl.topik_id = ${ctx.request.params.topik_id}
        GROUP BY t.id
        ORDER BY t.title ASC
    ;
    `;    
    const entries = await strapi.db.connection.raw(sql);
    const hasil = entries[0][0] || {poin: 0};
    return hasil;
  },
}));
