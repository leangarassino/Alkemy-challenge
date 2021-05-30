module.exports = (sequelize, type) => {
    return sequelize.define('characters', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        imagen: type.STRING,
        nombre: type.STRING,
        edad: type.INTEGER,
        peso: type.INTEGER,
        historia: type.STRING,
        peliculaoSerie: type.STRING,
    })
}