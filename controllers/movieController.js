const Movie = require('../models/movie')

const movie_index = (req,res) => {
    Movie.find().sort({ createdAt: -1})
    .then((result) => {
        res.render('index', { title: 'All Movies', movies : result})
    })
    .catch((err)=>{
        console.log(err);
    })
}

const movie_details = (req,res) => {
    const id = req.params.id;
    Movie.findById(id)
        .then(result => {
            res.render('details', {movie: result, title: 'Movie Details'});
        })
        .catch(err => {
            console.log(err);
        });
}

const movie_create_get = (req,res) => {
    res.render('create', { title: 'Create a new Movie' });
}

const movie_create_post = (req,res) => {
    console.log(req.body);
    const movie = new Movie(req.body);
    

    movie.save()
        .then((result) => {
            res.redirect('/movies');
        })
        .catch((err) => {
            console.log(err);
        })
}

const movie_delete = (req,res) => {
    const id = req.params.id;

    Movie.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/movies' });
       })
        .catch(err => {
            console.log(err);
       })
}

module.exports = {
    movie_index,
    movie_details,
    movie_create_get,
    movie_create_post,
    movie_delete
}