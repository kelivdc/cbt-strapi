module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: [
        'http://localhost:1337',
        'https://admin.misteryoscourse.com',
        'http://localhost:3000',
        'https://api.misteryoscourse.com',
        'http://cbt.misteryoscourse.com:1337',
        'https://cbt.misteryoscourse.com',
        'https://misteryoscourse.com',
        'http://localhost:5173',
        'http://localhost:4000'
      ]
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

// 'strapi::security',
//   {
//     name: 'strapi::cors',
//     config: {
//       enabled: true,
//       headers: '*',
//       origin: ['http://localhost:1337', 'http://localhost:3000', 'http://localhost:5173','http://localhost:4000']
//     }
//   },