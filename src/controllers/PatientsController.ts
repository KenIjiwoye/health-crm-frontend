import { Patient } from "../interfaces/Patient"
import PatientService from "../services/PatientService"

class PatientsController {

    ps = PatientService;

    addPatient = async (patient:Patient) => {
        let res = await this.ps.createPatient(patient)
        return res;
    }

    getPatients = async () => {
        let res = await this.ps.getAllPatients();
        return res;
    }
    
    getPatient = async (patientId:number) => {
        let res = await this.ps.getSinglePatient(patientId);
        return res;
    }
    
    updatePatient = async (patientId:number) => {}
    
    deletePatient = async (patientId:number) => {}

}

export default new PatientsController();