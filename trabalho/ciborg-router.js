function router(req, res) {
    try {
        dispatcher.dispatch(req, res);
    }
    catch(err) {
        console.log(err);
    }
}

router.get = function(path,header){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end("Get");
}

router.post = function(path,header){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end("Post");
}

module.exports = router;
