module.exports = ({ env }) => ({
  upload: {
    config: {
      breakpoints: {
        large: 1000,
        medium: 750,
        small: 100,
      },
    },
  },
  // other plugins configuration
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3,
          updateAgeOnGet: false,
        },
      },
      strategy: {
        debug: true,
        maxAge: 3600,
        updateAgeOnGet: false,
        contentTypes: [
          // list of Content-Types UID to cache
          // { contentType: "api::navigation.navigation", maxAge: 60*60*100 },
          { contentType: "api::kelompok.kelompok", maxAge: 60 * 60 * 100 },
          { contentType: "api::peserta.peserta", maxAge: 60 * 60 * 100 },
        ],
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
      },
    },
  },
});
