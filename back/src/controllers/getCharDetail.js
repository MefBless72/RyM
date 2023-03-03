const axios = require("axios");
const getChardetail = (res, id)=>{
    axios.get(`https:rickandmortyapi.com/api/character/${id}`)
    .then((result) => result.data)
    .then((data) => {
      let character = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        status: data.status,
        origin: data.origin?.name,
        species: data.species,
      };
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch((err) =>
      res
        .writeHead(500, { "Content-Type": "text/plain" })
        .end("El personaje no fue encontrado")
    );
}
module.exports = getChardetail;