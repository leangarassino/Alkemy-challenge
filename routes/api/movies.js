const router = require('express').Router();
const upload = require('../../libs/storage')

const { Film } = require('../../db');

router.get('/', async (req, res) => {
    const films = await Film.findAll({attributes: ['imagen', 'titulo', 'createdAt']})
    res.json(films);
})

router.get('/detalle', async (req, res) => {
    const films = await Film.findAll({attributes: ['imagen', 'titulo', 'calificacion','personajesAsociados']})
    res.json(films);
})

router.post('/', upload.array('imagen'), async (req, res) => {
    const film = await Film.create(req.body);
    res.json(film);
})

router.put('/:filmId', async (req, res) => {
    await Film.update(req.body, {
        where: { id: req.params.filmId}
    });
    res.json({ succes: 'Se ha modificado'})
})

router.delete('/:filmId', async (req, res) => {
    await Film.destroy({
        where: { id: req.params. filmId}
    });
    res.json({ succes: 'Se ha borrado la peli'})
});

module.exports = router;

