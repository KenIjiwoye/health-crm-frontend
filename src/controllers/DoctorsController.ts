import { Doctor, DoctorsControllerInterface } from './../interfaces/Doctors';
import DoctorService from "../services/DoctorService"

class DoctorsController {

    ds = DoctorService;

    addDoctor: DoctorsControllerInterface["addDoctor"] = async (doctor:Doctor) => {
        let res = await this.ds.createDoctor(doctor)
        return res;
    }

    getDoctors: DoctorsControllerInterface["getDoctors"] = async () => {
        let res = await this.ds.getAllDoctors();
        return res;
    }
    
    getDoctor: DoctorsControllerInterface["getDoctor"] = async (doctorId:number) => {
        let res = await this.ds.getSingleDoctor(doctorId);
        return res;
    }
    
    updateDoctor: DoctorsControllerInterface["updateDoctor"] = async (doctorId:number) => {}
    
    deleteDoctor: DoctorsControllerInterface["deleteDoctor"] = async (doctorId:number) => {}

}

export default new DoctorsController();