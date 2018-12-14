/* Load modules */
let sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database('./dbiot.db');

/* Init car and driver tables if they don't exist */
let init = function () {
    db.run("CREATE TABLE patient (id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT, latitude INTEGER, longitude INTEGER, date_position TIMESTAMP DEFAULT CURRENT_TIMESTAMP, zone_autorise TEXT, contact TEXT)");
};

module.exports = {
    init: init,
    db: db
};
