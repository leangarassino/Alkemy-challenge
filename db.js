const Sequelize = require('sequelize');

const FilmModel = require('./models/films');
const UserModel = require('./models/users');
const CharacterModel = require('./models/characters');
const GenderModel = require('./models/gender');

const sequelize = new Sequelize('challenge','root','', {
    host: 'localhost',
    dialect: 'mysql',
})

const Film = FilmModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Character = CharacterModel(sequelize, Sequelize);
const Gender = GenderModel(sequelize, Sequelize);


sequelize.sync({ force: false}).then(() => {
    console.log('Tablas sincronizadas')
})

module.exports = {
    Film,
    User,
    Character,
    Gender
}