const { dbConnection } = require('../database/configSequealize');
const { TaskExecuteLast } = require('../helpers/TaskExecute');

const db = dbConnection();

const models = db.models.task;

const modelsStatusTaks = db.models.statustask;

const findId= async(req,res)=>{
    try{
        const id = req.params.id;
        console.log(id)
        const dt = await models.findByPk(id,{
            include:[{
                model:db.models.priority,
                model:db.models.status,
            }],
        })
        res.status(200).json({
            ok:true,
            data:dt
        });
    }catch(error){
        res.status(500).json({
            ok:false,
            data:"Error procesando la consulta" + error
        });
    }
}


const taskExecute= async(req,res)=>{
    try{
        console.log("consultado");
        //consultar todos los estados 1,2 pendiente
        const dt = await models.findAll({
            include:[{
                model:db.models.priority},
                {model:db.models.status,
                    where:{
                        id: [1, 2]
                    }

            }],
        });

        const lastTaskOld = new TaskExecuteLast();

        const lastTaskNew = dt.find(x=> x.id > lastTaskOld.id);
        //console.log(lastTaskNew);


        if(lastTaskNew){
            lastTaskOld.id = lastTaskNew.id | 1;
            res.status(200).json({
                ok:true,
                data:lastTaskNew
            });
        }else{
            res.status(500).json({
                ok:false,
                data:"No hay tareas para ejecutar"
            });

        }


    }catch(error){
        console.log(error)
        res.status(500).json({
            ok:false,
            data:"Error procesando la consulta" + error
        });
    }
}

const findAll= async(req,res)=>{
    try{
        const dt = await models.findAll({
            include:[{
                model:db.models.priority,
                model:db.models.status,
            }],
        })
        res.status(200).json({
            ok:true,
            data:dt
        });
    }catch(error){
        res.status(500).json({
            ok:false,
            data:"Error procesando la consulta" + error
        });
    }
}
const save= async(req,res)=>{
    const datos = req.body;
    try{
        console.log(datos);
        const result = await models.create(datos);

        statusTask = {
            "task_id": result.id,
            "status_id": result.status_id
        };
        console.log(statusTask)
        await modelsStatusTaks.create(statusTask);

        res.status(200).json({
            ok:true,
            id:result.id,
            data:result
        });
    }catch(error){
        res.status(500).json({
            ok:false,
            data:"Error procesando los datos" + error
        });
    }
}

const update= async(req,res)=>{

    const id = req.params.id;

    const datos = req.body;
    console.log(datos);
    try{
        const result = await models.update(
            { jsonField: datos },
            { where: { id } }
        );
    
        res.status(200).json({
            ok:true,
            id:result.id,
            data:result
        });
    }catch(error){
        res.status(500).json({
            ok:false,
            data:"Error procesando los datos" + error
        });
    }
}

const remove= async(req,res)=>{
    const datos = req.body;
    try{
        const result = await models.destroy({
            where: {
                id: 1
            }});
    
        res.status(200).json({
            ok:true,
            id:result.id,
            data:result
        });
    }catch(error){
        res.status(500).json({
            ok:false,
            data:"Error procesando los datos" + error
        });
    }
}

module.exports={
    findId, findAll, save, update, remove, taskExecute
};
