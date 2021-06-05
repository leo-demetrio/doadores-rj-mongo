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
router.get('/institut/search', async (req,res) => {
    try{
        const institut = await Institut.search();
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

module.exports = router;