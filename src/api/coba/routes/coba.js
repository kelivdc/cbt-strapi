module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/coba',
            handler: 'coba.index',
            config: {
                auth: false,
            }
        }
    ]
}