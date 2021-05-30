const router = require('express').Router();
const upload = require('../../libs/storage')

const { Gender } = require('../../db');

router.get('/', async (req, res) => {
    const genders = await Gender.findAll();
    res.json(genders);
})

router.post('/', upload.array('imagen'), async (req, res) => {
    const genders = await Gender.create(req.body);
    res.json(genders);
})

router.put('/:genderId', async (req, res) => {
    await Gender.update(req.body, {
        where: { id: req.params.genderId}
    });
    res.json({ succes: 'Se ha modificado'})
})

router.delete('/:genderId', async (req, res) => {
    await Gender.destroy({
        where: { id: req.params. genderId}
    });
    res.json({ succes: 'Se ha borrado el genero'})
});

module.exports = router;