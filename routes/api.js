const router = require('express').Router();

const middlewares = require('./middlewares')
const apiMoviesRouter = require('./api/movies');
const apiUsersRouter = require('./api/users');
const apiCharactersRouter = require('./api/characters');
const apiGendersRouter = require('./api/gender')

router.use('/movies', middlewares.checkToken, apiMoviesRouter);
router.use('/auth', apiUsersRouter);
router.use('/characters', middlewares.checkToken, apiCharactersRouter);
router.use('/genders', middlewares.checkToken, apiGendersRouter);


module.exports = router