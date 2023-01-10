const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const LANGUAGE = require('../model/language');
const PRIORITYQUEUE = require('../priorityQueue');


// http://localhost:8080/java
ROUTER.get('/:language', async (req, res) => {

    await LANGUAGE.getByLanguage(req.params.language, (err, data) => {
        try {

            const list = new PRIORITYQUEUE();

            switch (req.params.language) {
                case 'java':
                    for (let i = 0; i < data.length; i++)
                        list.enpueue(data[i].java, data[i].user_id);
                    break;
                case 'javascript':
                    for (let i = 0; i < data.length; i++)
                        list.enpueue(data[i].javascript, data[i].user_id);
                    break;
                case 'c':
                    for (let i = 0; i < data.length; i++)
                        list.enpueue(data[i].c, data[i].user_id);
                    break;
                case 'cpp':
                    for (let i = 0; i < data.length; i++)
                        list.enpueue(data[i].cpp, data[i].user_id);
                    break;

                default:
                    break;
            }
            console.log(Date.now());

            let result = list.depueue();


            res.json(result);
        }
        catch (err) {
            console.error(err);
        }
    })
})

module.exports = ROUTER;