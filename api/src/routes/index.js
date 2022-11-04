const { Router } = require("express");
const axios = require("axios").default;
const { dataFinal} = require("./controllers");
const { Videogame, Generos } = require("../db.js");

const router = Router();

// 1. obtiene todo
router.get("/games", async (req, res) => {
    try {
        const games = await dataFinal()
        res.status(200).json(games)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// 2. crea juego
router.post("/create", async (req, res) => {
  const {
    id,
    nombre,
    descripcion,
    lanzamiento,
    rating,
    plataformas,
    generos,
    imagen,
  } = req.body;
  try {
    const newGame = await Videogame.create({
      id,
      nombre,
      descripcion,
      lanzamiento,
      rating,
      plataformas,
      imagen,
    });

    const findGeneros = await Generos.findAll({
      where: { nombre: generos },
    });

    newGame.addGeneros(findGeneros);
    res.status(200).json(newGame);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// 3. obtiene todos los generos y los guarda en bd
router.get("/generos", async (req, res) => {
    try {
        const urlGeneros = " https://api.rawg.io/api/genres?key=72aad4d789b7433391be36826df80db1";
      const findGeneros = await axios(urlGeneros);
      const select = findGeneros.data.results.map((item) => item.name);
      select.forEach((element) => {
        Generos.findOrCreate({
          where: {
            nombre: element,
          },
        });
      });
    
      const allGeneros = await Generos.findAll();
      res.status(200).json(allGeneros);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// 4. obtiene por id
router.get("/:id", async (req, res) => {
    const {id} = req.params
    try {
      if(id.length < 7){
        const urlId = `https://api.rawg.io/api/games/${id}?key=72aad4d789b7433391be36826df80db1`
        const dataApiId = await axios(urlId)
        return res.status(200).json(dataApiId.data)
      }else{
        const bdID = await dataFinal()
        const baseiId = bdID.filter(it => it.id === id)
        return res.status(200).json(baseiId[0])
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
});

// 5 obtiene por nombre
router.get("/", async (req, res) => {                                                                                                                                                                                                                                                                                                                                                                                                       
    const {nombre} = req.query
    try {
      if(nombre){
        const games = await dataFinal()
        const filtrarGame = games.filter(item =>item.nombre.toLowerCase().includes(nombre.toLowerCase()))
        return res.status(200).json(filtrarGame)
      }else{
        return res.status(200).json(games)
      }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});



module.exports = router;
