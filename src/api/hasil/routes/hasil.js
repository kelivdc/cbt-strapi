module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/hasils/:user_id',
            handler: 'hasil.hitung',
            config: {
                auth: false,
            }
        },
        {
            method: 'GET',
            path: '/hasils-topik/:topik_id/:user_id',
            handler: 'hasil.hitung_topik',
            config: {
                auth: false,
            }
        }
    ]
}