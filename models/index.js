const User = require('./User');
const Artist = require('./Artist');

User.hasMany(Artist, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Artist.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Artist };
