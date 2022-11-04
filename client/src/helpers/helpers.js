
// funcion mapeadora de la informacion de la apy y de la bd
export const mapeoGames =(array)=>{

    const dataBase = array.filter(item=> item.createInDb)
        const  dataBaseFixed = dataBase.map(item=>{
        return {
        ...item,
		generos: item.generos ? item.generos.map(it=>Object.values(it)): null
        }
        }).map(item=>{
        return{
        ...item,
        generos: [...item.generos].flat()
        }
        }).map(item=>{
            return{
                id: item.id,
                nombre: item.nombre,
                descripcion: item.descripcion,
                lanzamiento: item.lanzamiento,
                rating:item.rating,
                plataformas: item.plataformas.split(','),
                imagen: item.imagen,
                generos: item.generos,
                createInDb: item.createInDb

            }
        })
        const apiExterna = array.filter(item=>!item.createInDb)
        const apiExternaFixed = apiExterna.map(item=>{
            return{
                id: item.id,
                nombre: item.nombre,
                descripcion: item.descripcion,
                lanzamiento: item.lanzamiento,
                rating:item.rating,
                plataformas: item.plataformas,
                imagen: item.imagen,
                generos: item.genres,
            }
        })
        
       const joinInfo = [...dataBaseFixed,...apiExternaFixed]
       return joinInfo
}

// validacion del formulario
export const validate =(input)=>{
    const error = {}
    
    if(!input.nombre.trim()){
    error.nombre = 'El nombre del juego es requerido'
   }else if(!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(input.nombre)){
    error.nombre = 'El nombre del juego no debe contener numeros'
   }
  
   if(!input.descripcion.trim()){
    error.descripcion = 'La descripcion del juego es requerida'
   }else if(!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(input.descripcion)){
    error.descripcion = 'La descripcion del juego no debe contener numeros '
   }
  
   if(!input.lanzamiento.trim()){
    error.lanzamiento = 'La fecha de lanzamiento del juego es requerida'
   }else if(!/^[0-9,$]*$/.test(input.lanzamiento)){
    error.lanzamiento = 'La fecha de lanzamiento no debe contener letras'
   }
  
   if(!input.rating.trim()){
    error.rating = 'El rating del juego es requerido'
   }else if(!/^[0-9,$]*$/.test(input.rating)){
    error.rating = 'El "rating" no debe contener letras'
   }
   
   if(!input.plataformas.trim()){
      error.plataformas = 'La plataforma del juego es requerida'
     }else if(!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(input.plataformas)){
      error.plataformas = 'El campo "plataformas" no debe contener numeros'
     }
  
   if(!input.imagen.trim()){
    error.imagen = 'la url del juego a crear es requerida'
   }else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(input.imagen)){
    error.imagen = 'El texto ingresado debe ser una url'
   }
  return error
  }




