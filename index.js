// implement your API here
const express = require('express');
// the same as import express from 'express'; // ES2015 Modules
const db = require('./data/db.js'); // added this line **********
const cors = require('cors');


const server = express();

server.use(express.json());
server.use(cors());

server.get('/api/users', (req, res) => {
    db
    .find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json({ error: "The users information could not be retrieved." })
    })
});

server.post('/api/users', (req, res) => {
    
    const newUser = req.body;


    if(req.body.name === "" || req.body.bio === "") {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    } else {
        db
        .insert(newUser)
        .then(used => {
            //let the client know what happened
            res.status(201).json(used);
        })
        .catch(err => {
            res.status(500).json({message: 'error retrieving users'})
        })
    }
})

server.get('/api/users/:id', (req, res) => {
    const id = req.params.id;

    db
    .findById(id)
    .then(user => {
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "The user with the specified ID does not exist." })
        }
    })
    .catch(error => {
        res.status(500).json({ error: "The user information could not be retrieved." })
    })
})

server.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;

    db
    .remove(id)
    .then(deleted => {
        if(deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: "The user with the specified ID does not exist." })
        }
    })
    .catch(error => {
        res.status(500).json({ error: "The user could not be removed" })
    })
})

server.put('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    if(id === "") {
        res.status(404).json({ message: "The user with the specified ID does not exist." })
    } else {
        if(req.body.name === "" || req.body.bio === "") {
            res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
        } else {
            db
            .update(id, changes)
            .then(created => {
                res.status(200).json(created); 
            })
            .catch(error => {
                res.status(500).json({ error: "The user information could not be modified." })
            })
        }
    }
    
})


server.listen(4000, () => {
    console.log('\n** API up and running on port 4k **')
});

// run yarn to download dependencies || npm i
// yarn add express || npm i express
// yarn server || npm run server
// add index.js with this code
//loaded browser at http://localhost:4000

// npm run server vs yarn server