const assert = require('assert');

const serviceModule = require('../ciborg-service');

describe('Service', function () {
	
	describe('getAllGames', function () {
		
		it ('should return an empty array at start', function (done) {
			const storage = {
				'search': function (name, done) {
					done([]);
				}
            }

            const service = serviceModule(storage);

			const games = service.getAllGames(
				games => {
					assert.deepEqual(games, []);
					done();
				}
			)	
		})
        
        it ('should return an array ordered by popularity', function (done) {
			const storage = {
				'search': function (name, done) {
					
				}
            }

            const service = serviceModule(storage);

			const games = service.getAllGames(
				games => {
					assert.deepEqual(games, []);
					done();
				}
			)
			
		})

	})
})
