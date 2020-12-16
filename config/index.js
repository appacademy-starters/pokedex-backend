module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000,
  db: {
    username: process.env.DB_USERNAME || "pokedex_app",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_DATABASE || "pokedex_dev",
    host: process.env.DB_HOST || "localhost",
  },
};
