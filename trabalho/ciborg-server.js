'use strict';
const http = require('http');
const router = require('./ciborg-router.js')
const port = 8888;

const ciborgApiModule = require('./ciborg-web-api.js')

const ciborgApi = ciborgApiModule()

/** *START TEST* */
const xpto = function(req, res) {
  console.log("funcionou")
  res.end("funcionou2")
}
router.get ('test', xpto)
/** *END TEST* */

router.get ('/items', ciborgApi.getAllGames)
router.get ('/items/{id}',ciborgApi.getGame)

const server = http.createServer(router.processRequest);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})