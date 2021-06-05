const express = require('express');
const router = express.Router();
const Institut = require('../database/repositories/institutRepository');

router.post('/institut', async (req,res) => {
    try{
        const institut = await Institut.create(req.body);
        return res.send({ institut });
    }catch($e){
        console.log("Error" , $e);
        return res.send({'message':'error'});
    }
});
router.get('/institut/search/:search', async (req,res) => {
    try{
        const institut = await Institut.search(req.params.search);
        return res.send({ institut });
    }catch($e){
        console.log("Error" , $e);
        return res.send({'message':'error'});
    }
});

router.get('/institut', async (req,res) => {
    try{
        const institut = await Institut.getAll();
        return res.send({ institut });
    }catch($e){
        console.log("Error" , $e);
        return res.send({'message':'error'});
    }
});
router.get('/institut/:id', async (req,res) => {
    try{
        const institut = await Institut.getOne(req.params.id);
        return res.send({ institut });
    }catch($e){
        console.log("Error" , $e);
        return res.send({'message':'error'});
    }
});
router.put('/institut/:id', async (req,res) => {
    try{
        const institut = await Institut.update(req.params.id,req.body);
        return res.send({ institut });
    }catch($e){
        console.log("Error" , $e);
        return res.send({'message':'error'});
    }
});
router.delete('/institut/:id', async (req,res) => {
    try{
        const institut = await Institut.delete(req.params.id);
        return res.send({ institut });
    }catch($e){
        console.log("Error" , $e);
        return res.send({'message':'error'});
    }
});
module.exports = router;