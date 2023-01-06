const { dbConnection } = require('../database/configSequealize');

const db = dbConnection();

const models = db.models.status;

const findId= async(req,res)=>{
    try{
        const id = req.params.id;
        const dt = await models.findByPk(id,{})
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

const findAll= async(req,res)=>{
    try{
        const dt = await models.findAll({})
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
        const result = await models.create(req.body);
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
    findId, findAll, save, update, remove
};
