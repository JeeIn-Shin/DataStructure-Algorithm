const express = require('express');

const app = express();
const router = require('./router/language');

app.set('port', process.env.PORT || 8080);

app.use('/', router);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), "빈 포트에서 대기");
});