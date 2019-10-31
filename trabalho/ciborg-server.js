'Use strict'

const PORT = 8888

const http = require('http')

const router = require('./ciborg-router.js')

const ciborgApi = require('./ciborg-web-api')

router.get ('/items', ciborgApi.getAllItems)
router.get ('/items/{id}',ciborgApi.getItem)


http.createServer(router).listen(process.argv[2]||PORT)



/*
const server = http.createServer()

server.on('request', handleRequest)


function handleRequest(req, rsp) {
  console.log(`Request received for ${req.url} with method ${req.method}`)

  let data = ""

  req.on('data', chunk => data += chunk.toString())
  req.on('end', processBodyAndReply)
  

  function processBodyAndReply() {
    console.log(`Received data: ${data}`)

    rsp.setHeader("Content-type", "text/plain")
    rsp.end(`SLB`)
  }


 
}

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
 */