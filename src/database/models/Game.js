const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define(
    "Game",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        title: DataTypes.STRING,
        price: DataTypes.INTEGER
    },
    {
        tableName: "games",
        timestamp: false,
    }
    );

    return Game
}