const mongoose=require("mongoose");


const ropa=mongoose.Schema({
    cod_barras:{
        type:String,
        unique:true
    },
    nombre: String,
    Material:String,    Categoria: String,
    created_at:Date
})

module.exports=mongoose.model("Ropa", ropa);