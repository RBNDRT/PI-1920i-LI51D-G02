'use strict';

let getRoutes = [];
let postRoutes = [];
let putRoutes = [];
let deleteRoutes = [];

function router(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Router started.');
}

router.get = function (path, handler) {
    let route = {path: path, handler: handler};
    console.log(route);
    getRoutes.push(route);
}

router.post = function (path, handler) {
    let route = {path: path, handler: handler};
    postRoutes.push(route);
}

router.put = function (path, handler) {
    let route = {path: path, handler: handler};
    putRoutes.push(route);
}

router.delete = function (path, handler) {
    let route = {path: path, handler: handler};
    deleteRoutes.push(route);
}

router.processRequest = function(req, res) {
    let data = ""
    if(req.method == 'GET') {
        for(let i = 0; i<getRoutes.length; i++) {
            console.log(req.url + "##" + getRoutes[i].path);
            
            if(req.url == getRoutes[i].path) {
                getRoutes[i].handler(req, res);
            }
            /*
            
            if(Compare(req.url, getRoutes[i].path)) {
                //qnd for Post adicionar ao REQ valores do path
                getRoutes[i].handler(req, res);
            

                Compare = function q faz split por / e compara valores
                se valor : ou {} ent aceita qqlr coisa 
            */     
        }
    }
    //if(req.method == 'POST')
    //if(req.method == 'PUT')
    //if(req.method == 'DELETE')
  
    function processBodyAndResponse(){
        console.log('Received : ', data)
        res.end('Received and Done')
    }
  }

module.exports = router
