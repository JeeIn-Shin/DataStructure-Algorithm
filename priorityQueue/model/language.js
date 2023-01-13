const DB = require("../config/database.js");

const LANGUAGE = {
    getByMatchingInformation : function (info, result) {

        // {
        //     language : java,
        //     activity : code_review
        // }
        let selectedValues = Object.values(info);

        DB.getConnection((err, connection) => {
            if(!err)    {
                let sql = `SELECT LANGUAGE.user_id, LANGUAGE.${selectedValues[0]}, ACTIVITY.${selectedValues[1]}
                           FROM LANGUAGE
                           INNER JOIN ACTIVITY
                           ON LANGUAGE.user_id = ACTIVITY.user_id`;
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