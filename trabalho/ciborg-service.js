'use strict'

//const storage = require('./ciborg-storage');

module.exports = function (storage) {
    return {
        getAllGames: getAllGames,
        addGame: addGame
    }

    function getAllGames(done) {
        console.log('service - getAllGames!');
        storage.search('games', games => {
            done(games || []);
        })
    }

    function addGame(game, done) {
        if (game && game.name) {
            storage.add(game.name, game, game =>
                done(undefined, game.id));
        }
        else
            setImmediate(() => { done('Invalid req!', -1); });
    }
}