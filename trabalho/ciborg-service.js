'use strict'

const storage = require('./test-storage');

module.exports = {
    getAllGames: function(done) {
        storage.search('games', games => {
            done(games || []);
        })
    },

    addGame: function(game, done) {
        if(game && game.name) {
            storage.add(game.name, game, game =>
                done(undefined, game.id));
        }
        else 
            setImmediate(() => { done('Invalid req!', -1);});
    }
}