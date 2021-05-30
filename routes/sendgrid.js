const sgMail = require('@sendgrid/mail');

const API_KEY = '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'

sgMail.setApiKey(API_KEY);

/* const message = {
    to: 'leandro_garassino@hotmail.com',
    from: 'leandro.garassino@gmail.com',
    subject: 'Registro de usuario',
    text: 'Bienvenido a la api del Challenge de Alkemy',
    html: '<h1>Bienvenido, ya puede loguearse y comenzar a subir sus propias películas y personajes<h1>',
}
*/
const sendEmail = (to, from, subject, text, html) => {
    const message = {
        to: 'elmastilmkt@gmail.com',
        from: 'leandro.garassino@gmail.com',
        subject: 'Registro de usuario',
        text: 'Bienvenido a la api del Challenge de Alkemy',
        html: '<h1>Bienvenido, ya puede loguearse y comenzar a subir sus propias películas y personajes<h1>',
    } 
    sgMail.send(message).then((response) => console.log('Email sent')).catch((error) => console.log(error.message));
}



module.exports = {sendEmail}