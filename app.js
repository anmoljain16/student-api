const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//we will use this to hash the password that we recieve from users

const app = express();


//require a darabase connection
const dbConnect = require('./db/dbConnect');
const Model = require('./db/userModel');

//execute database connection
dbConnect()

app.use(express.json())


app.use(express.urlencoded({ extended: true }))



app.get("/students", async (req, res) => {

    try {
        const data = await Model.find();
        res.json(data)
    }catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

//login endoint

app.post('/students', async (req, res) => {
    const data = new Model({
        name : req.body.name,
        age : req.body.age,
        grade : req.body.grade,
    })
    console.log({data})
    try {
        const savedData = await data.save();
        res.status(200).json(savedData)
    }catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

})

app.get('/students/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.patch('/students/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new : true};

        const result = await Model.findByIdAndUpdate(id, updatedData, options);
        res.send(result);
    }
    catch (error){
        res.status(500).json({
            message: error.message
        })
    }
})

app.delete('/students/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const del = await Model.findByIdAndDelete(id)
        res.send(del);
    }catch (error){
        res.status(500).json({
            message: error.message
        })
    }
})


module.exports = app;
