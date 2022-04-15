import { Appointment, appointments } from "../interfaces/Appointments";


class AppointmentService {

    createAppointment = async (appointment:Appointment) => {
        appointments.push(appointment);
        return appointment;
    }

    getAllAppointments = async () => {
        return appointments;
    }
    
    getSingleAppointment = async (appointmentId:number) => {
        //  return doctors.filter((d) => d.id === doctorId)
        return;
    }
    
    updateAppointment = async (appointment:Partial<Appointment>) => {}
    
    deleteAppointment = async (appointmentId:number) => {}
}
export default new AppointmentService();
