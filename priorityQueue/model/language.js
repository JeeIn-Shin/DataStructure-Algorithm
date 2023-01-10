const DB = require("../config/database.js");

const LANGUAGE = {
    getByLanguage : function (LANGUAGE, ACTIVITY, result) {
        DB.getConnection((err, connection) => {
            if(!err)    {
                let sql = `SELECT LANGUAGE.user_id, LANGUAGE.${LANGUAGE}, ACTIVITY.${ACTIVITY}
                           FROM LANGUAGE
                           INNER JOIN LANGUAGE.user_id = ACTIVITY.user_id`;
                connection.query(sql, (err, res) => {
                    connection.release();

                    if(err) {
                        console.log("error " + err);
                        result(null, err);
                        return ;
                    }

                    result(null, res);
                    return ;
                })
            }
            else    {
                console.error();
                throw err;
            }
        })
    }
}


module.exports = LANGUAGE;