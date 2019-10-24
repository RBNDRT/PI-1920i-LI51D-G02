'Use strict'

const PORT = 8888

const http = require('http')

const router = require('./router.js')

const itemApi = require('./item-web-api')

router.get ('/items', itemApi.getAllItems)
router.get ('/items/{id}',itemApi.getItem)


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