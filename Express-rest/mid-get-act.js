//Name:         Pamintuan Mylene D.
//App Name:     mid-get-act.js

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
    title: 'Hulk'
}
];

//Figure 6. Query parameter code
app.get('/api/heroes/:title/:publisher', (req, res) => {
    res.send([req.params, req.query]);
});

//Description: Figure 8. Code to Get All Movies
//get all movies
app.get('/api/movies', (req, res) =>{
    res.send(movies);
});

app.listen(4000, () => console.log('Listening on port 4000'));