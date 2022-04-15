import AppointmentService from '../services/AppointmentService';
import { Appointment, AppointmentsControllerInterface } from '../interfaces/Appointments';

class AppointmentsController {

    as = AppointmentService;

    addAppointment: AppointmentsControllerInterface["addAppointment"] = async (appointment:Appointment) => {
        let res = await this.as.createAppointment(appointment)
        return res;
    }

    getAppointments: AppointmentsControllerInterface["getAppointments"] = async () => {
        let res = await this.as.getAllAppointments();
        return res;
    }
    
    getAppointment: AppointmentsControllerInterface["getAppointment"] = async (appointmentId:number) => {
        let res = await this.as.getSingleAppointment(appointmentId);
        return res;
    }
    
    updateAppointments: AppointmentsControllerInterface["updateAppointments"] = async (appointmentId:number) => {}
    
    deleteAppointments: AppointmentsControllerInterface["deleteAppointments"] = async (appointmentId:number) => {}

}

export default new AppointmentsController();