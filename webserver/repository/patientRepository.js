
const commonRepository = require("./commonRepository")

class patientRepository {
    constructor() {
        this.common = new commonRepository();
    }
    findById(id) {
        let sqlRequest = "SELECT * FROM patient WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams);
    }

    findAll() {
        let sqlRequest = "SELECT * FROM patient";
        return this.common.findAll(sqlRequest);
    };

    create(patient) {
        let sqlRequest = "INSERT into patient (nom,contact,latitude, longitude) VALUES ($nom,$contact,$latitude, $longitude)";
        let sqlParams = {
            $nom: patient.nom,
            $contact: patient.contact,
            $latitude: 0,
            $longitude: 0,
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    deleteById(id) {
        let sqlRequest = "DELETE FROM patient WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

    update(patient) {
        let sqlRequest = "UPDATE patient SET " +
            "pos=$pos "+
            "WHERE id=$id";
        let sqlParams = {
            $id: patient.id,
            $pos: patient.pos,
        };
        return this.common.run(sqlRequest, sqlParams);
    };


}

module.exports = patientRepository;
