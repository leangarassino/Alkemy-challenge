module.exports = (sequelize, type) => {
    return sequelize.define('gender', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING,
        imagen: type.STRING,
        PeliculaoSerie: type.STRING
    })
}