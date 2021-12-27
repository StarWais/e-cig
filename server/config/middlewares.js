module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:3000",
        "http://localhost:1337",
        "https://ecig-backend.herokuapp.com",
        "https://ecig-frontend.herokuapp.com",
        "http://ecig-frontend.herokuapp.com",
      ],
    },
  },
];
