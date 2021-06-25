const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack");

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
  },
  slug: {
    type: Sequelize.STRING,
  },
  conntent: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.ENUM("open", "close"),
  },
});

const User = db.define("user", {
  fullName: {
    type: Sequelize.TEXT,
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true,
  },
});

module.exports = {
  db,
};
