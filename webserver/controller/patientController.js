const patientRepository = require('../repository/patientRepository');

const ControllerCommon = require('./controllerCommon');



class patientController {

    constructor() {
        this.patientRepository = new patientRepository();
        this.common = new ControllerCommon();
    }
    

    findById(req, res) {
        let id = req.params.id;

        this.patientRepository.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };


    findAll(res) {
        this.patientRepository.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };


    updatePos(req, res) {
        let patient = {id:req.params.id, latitude:req.body.latitude, longitude:req.body.longitude}
        return this.patientRepository.update(patient)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };


    create(req, res) {
        let patient = {nom:req.body.nom, contact:req.body.contact};
        return this.patientRepository.create(patient)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };


    deleteById(req, res) {
        let id = req.params.id;

        this.patientRepository.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    exists(req, res) {
        let id = req.params.id;

        this.patientRepository.exists(id)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = patientController;