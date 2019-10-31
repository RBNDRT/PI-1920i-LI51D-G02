'use strict'

const info = {};

module.exports = {
    'search': function (name, done) {
        setTimeout(
            () => { done(info[name]); }, 1000
        );
    },

    'add': function (name, game, done) {
        setTimeout(
            () => {
                const coll = info[name] || [];
                coll.push(game);
                if(coll.length == 1) {
                    info[name] = coll;
                }
                done(coll.length-1);
            }
        ),1000
    },




}