const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Album extends Model { }

Album.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ablum_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'artist',
                key: 'id',
            }
        },
        year_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'year',
                key: 'id',
            }

        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'album',
    }
);

module.exports = Album;