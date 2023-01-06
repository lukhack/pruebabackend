/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const status= sequelize.define('status', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      comment: "null",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    }
  }, {
    timestamps: true,
    tableName: 'db_status'
  });


  status.associate = (models) =>{
  }

  return status;
};
