'use strict'

const service = require('./ciborg-service')

module.exports = function () {
    return {
        getAllGames: getAllGames,
        getGame: getGame,
        getAllLists: getAllLists,
        getList: getList,
        createList: createList,
        updateList: updateList,
        addGameToList: addGameToList,
        deleteGameFromList: deleteGameFromList
    }

    function getAllGames(req, res) {
        console.log('webapi - getAllGames!');
        service.getAllGames(items => {
            res.status = 200;
            res.statusMessage = 'OK';
            res.headers = {
                'Content-type': 'text/plain'
            }
            const answer = {'games' : games};
            res.end(answer);
        })
    }

    function getGame(req, res) {
        service.getGame(items => {
            console.log('getAllGames');
            res.status = 200;
            res.statusMessage = 'OK';
            res.headers = {
                'Content-type': 'text/plain'
            }
            const answer = { 'items': items };

            res.end(answer);
        })
    }

    function getAllLists(req, res) {
        service.getAllItems(items => {
            console.log('getAllGames');
            res.status = 200;
            res.statusMessage = 'OK';
            res.headers = {
                'Content-type': 'text/plain'
            }
            const answer = { 'items': items };

            res.end(answer);
        })
    }

    function getList(req, res) {
        service.getAllItems(items => {
            console.log('getAllGames');
            res.status = 200;
            res.statusMessage = 'OK';
            res.headers = {
                'Content-type': 'text/plain'
            }
            const answer = { 'items': items };

            res.end(answer);
        })
    }

    function createList(req, res) {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {

            const item = JSON.parse(body);

            service.createList(item, (err, ret) => {
                if (err) {
                    res.status = 400;
                    res.statusMessage = 'Bad request';
                    res.headers = {
                        'Content-type': 'application/json'
                    }

                    const answer = { 'error': err };

                    res.end(JSON.stringify(answer));

                } else {

                    res.status = 201;
                    res.statusMessage = 'Created';
                    res.headers = {
                        'Content-type': 'application/json'
                    }

                    const answer = { 'id': ret };

                    res.end(JSON.stringify(answer));
                }
            })


        })
    }

    function updateList(req, res) {
        service.getAllItems(items => {
            console.log('getAllGames');
            res.status = 200;
            res.statusMessage = 'OK';
            res.headers = {
                'Content-type': 'text/plain'
            }
            const answer = { 'items': items };

            res.end(answer);
        })
    }

    function addGameToList(req, res) {
        service.getAllItems(items => {
            console.log('getAllGames');
            res.status = 200;
            res.statusMessage = 'OK';
            res.headers = {
                'Content-type': 'text/plain'
            }
            const answer = { 'items': items };

            res.end(answer);
        })
    }

    function deleteGameFromList(req, res) {
        service.getAllItems(items => {
            console.log('getAllGames');
            res.status = 200;
            res.statusMessage = 'OK';
            res.headers = {
                'Content-type': 'text/plain'
            }
            const answer = { 'items': items };

            res.end(answer);
        })
    }
}