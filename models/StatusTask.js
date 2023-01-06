/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const statusTask= sequelize.define('statustask', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      comment: "null",
      primaryKey: true
    }

  }, {
    timestamps: true,
    tableName: 'db_status_task'
  });


  statusTask.associate = (models) =>{

    statusTask.belongsTo(models.task,{
          foreignKey:{
            name:'task_id',
            allowNull:'false'
          },
          targetKey:'id'
      });

    statusTask.belongsTo(models.status,{
      foreignKey:{
        name:'status_id',
        allowNull:'false'
      },
      targetKey:'id'
    });
     
  }

  return statusTask;
};
