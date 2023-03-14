const ropa=require("../models/ropa.model");

 function createRopa(req,res){
    const ropa=new ropa(req.body);
   
    ropa.save((error, ropaStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(ropaStored)
        }
    })
}

function getRopa(req,res){
    ropa.find((error, ropaStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(alumnosStored)
        }
    })
}

 function deleteRopa(req,res){
    const {id}=req.params;

    ropa.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el Ropa"})
        }else{
            res.status(200).send({msg: "Ropa eliminado"})
        }
    })
}

function updateRopa(req,res){
   const {id}=req.params;
   const datosropa=req.body;

   ropa.findByIdAndUpdate({_id:id},datosropa, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}

async function getAropa(req,res){
    console.log("Obtener ropa");
}



module.exports={
    createRopa,
    updateRopa,
    deleteRopa,
    getRopa,
    getRopa,
}