//Name:         Pamintuan Mylene D.
//App Name:     mid-post-act.js

const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

//Description: Figure 7. Array for the Get Method
//Array for Get Method
const movies = [{
    id: 1,
    title: 'Superman'
},
{
    id: 2,
    title: 'Thor'
    
},
{
    id: 3,
    title: 'Iron Man'
    
},
{
    id: 4,
    title: 'Captain America'
    
},
{
    id: 5,
    title: 'Hulk'}];

 
//Figure 9. Code to find specific movie
//get movie id

app.get('/api/movies/:id', (req, res)=> {
    const movie = movies.find(h => h.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.')
    res.send(movie);
});

// add a movie


app.post('/api/movies', (req, res) =>{
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movie);
});

app.listen(4000, () => console.log('Listening on port 4000'));
