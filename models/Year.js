const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Year extends Model { }

Year.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        year_value: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'year',
    }
);

module.exports = Year;