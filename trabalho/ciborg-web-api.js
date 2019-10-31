'use strict'

const service = require('./ciborg-service')

function webapi (router, service) {
    const theWebApi = {
        'GetAllGames':function(req,res){
            service.getAllItems(items => {
                res.status = 200;
                res.statusMessage = 'OK';
                res.headers = {
                    'Content-type': 'application/json'
                }

                const answer = {'items': items };
                
                res.end(JSON.stringify(answer));
            })
        },
    
        'GetGame':function(req,res){
    
        },

        'GetAllLists':function(req,res) {
            
        },

        'GetList':function(req,res) {
            
        },

        'CreateList':function(req,res) {

        },

        'UpdateList':function(req,res) {
            
        },

        'AddGameToList':function(req,res) {
            
        },

        'DeleteGameFromList':function(req,res) {
            
        }
    }
}

module.export = webapi;