'use strict';
module.exports = (sequelize, DataTypes) => {
  const title = sequelize.define('title', {
    title: DataTypes.STRING
  }, {});
  title.associate = function(models) {
    // associations can be defined here
  };
  return title;
};