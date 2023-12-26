module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/hasils/:user_id',
            handler: 'hasil.hitung',
            config: {
                auth: false,
            }
        }
    ]
}