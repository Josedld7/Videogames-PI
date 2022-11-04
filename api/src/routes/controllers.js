const axios = require("axios").default;
const { Videogame, Generos } = require("../db.js");

// primera peticion api
const peticion1 = async()=>{
    try {
        const url1 = 'https://api.rawg.io/api/games?key=72aad4d789b7433391be36826df80db1&page=1&page_size=40'
        const page1 = await axios(url1)
        return page1.data.results
    } catch (error) {
        console.log(`EN LA PETICION 1: ${error}`)
    }
}
// segunda peticion api
const peticion2 = async()=>{
    try {
        const url2 = 'https://api.rawg.io/api/games?key=72aad4d789b7433391be36826df80db1&page=2&page_size=40'
        const page2 = await axios(url2)
        return page2.data.results
    } catch (error) {
        console.log(`EN LA PETICION 2: ${error}`)
    }
}
// tercera peticion api
const peticion3 = async()=>{
    try {
        const url3 = 'https://api.rawg.io/api/games?key=72aad4d789b7433391be36826df80db1&page=3&page_size=40'
        const page3 = await axios(url3)
        return page3.data.results
    } catch (error) {
        console.log(`EN LA PETICION 3: ${error}`)
    }
}
// se unen las peticiones de la pi
const joinData = async ()=>{
    try {
        const uno = await peticion1();
        const dos = await peticion2()
        const tres = await peticion3()
        const dataGames = [...uno,...dos,...tres]
        return dataGames
    } catch (error) {
        console.log(`EN LA FUNCION DE UNION : ${error}`)
    }
}
// se mapea la informacion de la api
const dataApi = async ()=>{
    try {
        const games = await joinData()
   const newArray = games.map(item=>{
     return{
        id: item.id,
        nombre: item.name, 
        lanzamiento: item.released,
        rating: item.rating,
        plataformas: item.platforms? item.platforms.map(it=>it.platform.name):[],
        imagen: item.background_image,
        genres: item.genres? item.genres.map(it=>it.name):[]
     }
    })
    return newArray
    } catch (error) {
        console.log(`EN LA FUNCION QUE MAPEA LA INFO DE LA API: ${error}`)
    }
}
// se trae la informacion de la base de datos
const dataBd = async ()=>{
try {
    const find = await Videogame.findAll({
        include: {
          model: Generos,
          attributes: ["nombre"],
          through: {
            attributes: [],
          },
        },
      });
     return find;
} catch (error) {
    console.log(`EN LA FUNCION QUE TRAE LA INFO DE BD: ${error}`)
}
}
// se une la info de la base datos con la api
const dataFinal = async ()=>{
try {
    const api = await dataApi()
    const bd = await dataBd ()
    const union = [...bd,...api]
    return union
} catch (error) {
    console.log(`EN LA FUNCION DATA FINAL: ${error}`)
}
}

module.exports={
    dataFinal,
    dataApi,
};


