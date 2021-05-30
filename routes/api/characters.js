const router = require('express').Router();
const upload = require('../../libs/storage')
const { Character } = require('../../db');
const path = require('path');

router.get('/', async (req, res) => {
    const characters = await Character.findAll({attributes: ['imagen', 'nombre']});
    res.json(characters);
})

router.get('/detalle', async (req, res) => {
    const characters = await Character.findAll({attributes: ['imagen', 'nombre', 'edad', 'peso', 'historia','peliculaoSerie']});
    res.json(characters);
})

router.post('/', upload.array('imagen'), async (req, res) => {
    const characters = await Character.create(req.body);
    res.json(characters);
})

router.put('/:characterId', async (req, res) => {
    await Character.update(req.body, {
        where: { id: req.params.characterId}
    });
    res.json({ succes: 'Se ha modificado'})
})

router.delete('/:characterId', async (req, res) => {
    await Character.destroy({
        where: { id: req.params. characterId}
    });
    res.json({ succes: 'Se ha borrado el personaje'})
});

module.exports = router;
