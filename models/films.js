module.exports = (sequelize, type) => {
    return sequelize.define('movies', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        imagen: type.STRING,
        titulo: type.STRING,
        calificacion: type.INTEGER,
        PersonajesAsociados: type.STRING
    })
}