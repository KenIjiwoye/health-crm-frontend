import { Doctor, doctors } from "../interfaces/Doctors";

class DoctorService {

    createDoctor = async (doctor:Doctor) => {
        doctors.push(doctor);
        return doctor;
    }

    getAllDoctors = async () => {
        return doctors;
    }
    
    getSingleDoctor = async (doctorId:number) => {
        //  return doctors.filter((d) => d.id === doctorId)
        return;
    }
    
    updateDoctor = async (doctor:Partial<Doctor>) => {}
    
    deleteDoctor = async (doctorId:number) => {}
}
export default new DoctorService();
