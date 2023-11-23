const mongoose = require('mongoose')

const url = 'mongodb://localhost/mongo1_curso'

mongoose.connect(url,{

})
.then(()=> console.log('CONECATADO A MONGO'))
.catch((e)=> console.log('El error de conexion es:'+e))

const personaSchema = mongoose.Schema({
    nombre:String,
    edad:Number,
    pais:String
}, {versionKey: false})

const PersonaModel= mongoose.model('personas', personaSchema)

//Mostrar
const mostrar = async ()=>{
    const personas = await PersonaModel.find()
    console.log(personas)
}

//crear
const crear = async () => {
    const persona = new PersonaModel({
        nombre: 'GAMEA',
        edad: 1000000000,
        pais: 'UNIDAS DE GESTION PUBLICA'
    })
    const resultado = await persona.save()
    console.log(resultado)
}

//Editar
const actualizar = async (id)=>{
    const persona = await PersonaModel.updateOne({_id:id},
    {
        $set:{
            nombre: 'LAAT MODIFICADO',
            pais: 'SISTEMAS FULL MODIFICADO'
        }
    })

}

//Eliminar
const eliminar = async (id)=>{
    const persona = await PersonaModel.deleteOne({_id:id})
    console.log(persona)
}


//eliminar('653a7fb83acebd086db8e20d')
crear()
//mostrar()
//actualizar('653a7f12bf2c3d7c12894a99')