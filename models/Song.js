const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Song extends Model { }

Song.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        song_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'artist',
                key: 'id',
            }

        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'song',
    }
);

module.exports = Song;