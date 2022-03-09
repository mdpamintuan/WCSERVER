//Name:         Pamintuan Mylene D.
//App Name:     index.js

//Figure 2. Code for the Express Application
const express = require('express');
const app = express();


app.get('/', (req, res) =>{
    res.send('My New App!')
})
//Figure 3. Code for the resource
app.get('/api/heroes', (req, res) =>{
    res.send(['Superman', 'Thor', 'Iron Man', 'Captain Americ', 'Hulk'])
});

//Figure 4. Single params code
 
app.get('/api/heroes/:id', (req, res) =>{
    res.send(req.params.id);
});

//Figure 5. Multi params code
 app.get('/api/heroes/:title/:publisher', (req, res) => {
    res.send(req.params);
});s

app.listen(3000, () => console.log('Listening on port 3000'));