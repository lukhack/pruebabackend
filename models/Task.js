/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) =>{
  const task= sequelize.define('task', {
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
    },
    beginDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null",
      field: 'begin_date',
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null",
      field: 'end_date',
    },
    duration: {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    }
    
  }, {
    timestamps: true,
    tableName: 'db_task'
  });
  task.associate = (models) =>{
}


  //Relación de la base de datos task_id => con tabla task
  task.associate = (models) =>{

    task.belongsTo(models.task,{
        foreignKey:{
          name:'task_id',
          allowNull:'true'
        },
        targetKey:'id'
    });

    
  //Relación de la base de datos priority_id => tabla priority
    task.belongsTo(models.priority,{
        foreignKey:{
          name:'priority_id',
          allowNull:'false'
        },
        targetKey:'id'
    });

    task.belongsTo(models.status,{
      foreignKey:{
        name:'status_id',
        allowNull:'false'
      },
      targetKey:'id'
    });

}


  return task;
};
