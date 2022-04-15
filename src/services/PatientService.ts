import { Patient, patients } from "../interfaces/Patient";

class PatientService {

    createPatient = async (patient:Patient) => {
        patients.push(patient);
        return patient;
    }

    getAllPatients = async () => {
        return patients;
    }
    
    getSinglePatient = async (patientId:number) => {
         return patients.filter((p) => p.id === patientId)
    }
    
    updatePatient = async (patient:Partial<Patient>) => {}
    
    deletePatient = async (patientId:number) => {}
}
export default new PatientService();
