/* Load database & database configuration */
const database = require('../config/dbconfig');


class Common {

    findAll(sqlRequest) {
        return new Promise(function (resolve, reject) {
            database.db.all(sqlRequest, function (err, rows) {
                if (err) {
                    reject(
                        {idErr:20, message:"Erreur interne"}
                    );
                } else if (rows === null || rows.length === 0) {
                    reject(
                        {idErr:21, message:"Entité non trouvée"}
                    );
                } else {
                    resolve(rows);
                }
            })
        });
    }

    findOne(sqlRequest, sqlParams) {
        return new Promise(function (resolve, reject) {
            let stmt = database.db.prepare(sqlRequest);
            stmt.all(sqlParams, function (err, rows) {
                if (err) {
                    reject(
                        {idErr:11, message:"Arguments invalides"}
                    );
                } else if (rows === null || rows.length === 0) {
                    reject(
                        {idErr:21, message:"Entité non trouvée"}
                    );
                } else {
                    let row = rows[0];
                    resolve(row);
                }
            })
        });
    }

    existsOne(sqlRequest, sqlParams) {
        return new Promise(function (resolve, reject) {
            let stmt = database.db.prepare(sqlRequest);
            stmt.each(sqlParams, function (err, row) {
                if (err) {
                    reject(
                        {idErr:20, message:"Erreur interne"}
                    );
                } else if (row && row.found === 1) {
                    resolve(true);
                } else {
                    reject(
                        {idErr:21, message:"Entité non trouvée"}
                    );
                }
            })
        });
    }

    run(sqlRequest, sqlParams) {
        return new Promise(function (resolve, reject) {
            let stmt = database.db.prepare(sqlRequest);
            stmt.run(sqlParams, function (err) {
                if (this.changes === 1) {
                    resolve(true);
                } else if (this.changes === 0) {
                    console.log("probleme");
                    reject(
                        
                        {idErr:21, message:"Entité non trouvée"}
                    )
                } else {
                    console.log(err);
                    reject(
                        {idErr:11, message:"Arguments invalides"}
                    )
                }
            })
        });
    }
}

module.exports = Common;