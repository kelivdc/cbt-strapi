'use strict';

const { filter } = require('../../../../config/middlewares');

/**
 * user-jawaban controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-jawaban.user-jawaban', ({strapi}) => ({
    async create(ctx) {
        const user_id = ctx.state.user.id;
        const data = ctx.request.body.data
        let skor = 0
        const benar = await strapi.db.query('api::soal.soal').findOne({            
            where: { 
                id: data.soal_id,      
                pilihan_ganda: {
                    id: data.pilihan_id,
                    jawaban_benar: true
                }
            },
            populate: { pilihan_ganda: true },
        });
        if (benar) {            
           skor = benar.bobot
        } 
        strapi.db.query('api::user-jawaban.user-jawaban').delete({
            where: {User: user_id, Soal: data.soal_id }
        });
        Object.assign(ctx.request.body.data, { User: user_id, Soal: data.soal_id, Skor: skor });
        const response = await super.create(ctx);
        return response;
    }
}));
