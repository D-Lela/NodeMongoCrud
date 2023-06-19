const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

const dbURI = 'mongodb+srv://TestUser:Test1234@Project1.7smka5z.mongodb.net/Project1?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))   
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));


app.get('/', (req,res) => {
    res.redirect('/movies');
});

app.get('/about', (req,res) => {
    res.render('about', { title: 'About' });
});

app.use('/movies',movieRoutes);

//404
app.use((req,res) => {
    res.status(404).render('404', { title: '404' });
});