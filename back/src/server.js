const { Console } = require("console");
const http = require("http");
const getCharById = require("./controllers/getCharById")
const getChardetail = require("./controllers/getCharDetail")
http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if(req.url.includes("onsearch")){
      let id= req.url.split("/").at(-1)
      getCharById(res, id)
    }
    if(req.url.includes("detail")){
      let id= req.url.split("/").at(-1)
      getChardetail(res, id)
    }
  })
  .listen(3001, "localhost");
