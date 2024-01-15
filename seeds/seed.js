const sequelize = require('../config/connection');
const { User, Artist } = require('../models');

const userData = require('./userData.json');
const artistData = require('./artistData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const artist of artistData) {
    await Artist.create({
      ...artist,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
