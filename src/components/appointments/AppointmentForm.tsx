import React from 'react'
import { Appointment } from '../../interfaces/Appointments'
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

type AppointmentFormProps = {
    appointment?: Appointment;
    mutation?: any;
}

type FormData = {
    patientId: number;
    department: string;
    doctorName: string;
    appointmentDate: string;
    appointmentTime: string;
    problem: string;
    confirm: boolean;

}

const styles = {
    error: {
        color: 'red',
        fontStyle: 'italics',
        fontSize: '12px'
    }
}


export default function AppointmentForm({ appointment, mutation }: AppointmentFormProps) {
    const navigate = useNavigate();
    const {isLoading} = mutation;
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => {
        if (appointment !== undefined) return console.log('YOU NEED TO USE EDIT ROUTE!', data)
        console.log(data)
        mutation.mutate(data);
        navigate(`/appointments`);
    });
    return (
        <div className="col-md-12">
            <div className="widget-area-2 proclinic-box-shadow">
                <h3 className="widget-title">Add Appointment</h3>
                <form onSubmit={onSubmit} >
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="patient-name">Patient ID</label>
                            <input {...register('patientId', { required: true })} type="text" className="form-control" placeholder="Patient ID" id="patient-id" defaultValue={appointment !== undefined ? appointment?.patientId : ''} />
                            {errors.patientId && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="department">Department</label>
                            <select {...register('department', { required: true })} className="form-control" id="department" defaultValue={appointment !== undefined ? appointment?.department : ''} >
                                <option>Neuro</option>
                                <option>Ortho</option>
                                <option>General</option>
                            </select>
                            {errors.department && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="doctor-name">Doctor Name</label>
                            <input {...register('doctorName', { required: true })} type="text" placeholder="Doctor Name" className="form-control" id="doctor-name" defaultValue={appointment !== undefined ? appointment?.doctorName : ''} />
                            {errors.doctorName && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="appointment-date">Appointment Date</label>
                            <input {...register('appointmentDate', { required: true })} type="date" placeholder="Appointment Date" className="form-control" id="appointment-date" defaultValue={appointment !== undefined ? appointment?.appointmentDate : ''} />
                            {errors.appointmentDate && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="time-slot">Time Slot</label>
                            <select {...register('appointmentTime', { required: true })} className="form-control" id="time-slot" defaultValue={appointment !== undefined ? appointment?.appointmentTime : ''} >
                                <option>10AM-11AM</option>
                                <option>11AM-12pm</option>
                                <option>12PM-01PM</option>
                                <option>2PM-3PM</option>
                                <option>3PM-4PM</option>
                                <option>4PM-5PM</option>
                                <option>6PM-7PM</option>
                                <option>7PM-8PM</option>
                                <option>8PM-9PM</option>
                            </select>
                            {errors.appointmentTime && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="problem">Problem</label>
                            <textarea {...register('problem', { required: true })} placeholder="Problem" className="form-control" id="problem" rows={3} defaultValue={appointment !== undefined ? appointment?.problem : ''} ></textarea>
                            {errors.problem && <span style={styles.error} >This field is required</span>}
                        </div>

                        <div className="form-check col-md-12 mb-2">
                            <div className="text-left">
                                <div className="custom-control custom-checkbox">
                                    <input {...register('confirm', { required: true })} className="custom-control-input" type="checkbox" id="ex-check-2" />
                                    <label className="custom-control-label" htmlFor="ex-check-2">Please Confirm</label>
                                </div>
                            </div>
                            {errors.confirm && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-6 mb-3">
                        { isLoading ? (<button type="submit" className="btn btn-primary btn-lg" disabled >Loading...</button>): (<button type="submit" className="btn btn-primary btn-lg">Submit</button>)}
                        </div>
                    </div>
                </form>
                {/* <!-- Alerts--> */}
                {/* <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Successfully Done!</strong> Appointment token Generated
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div> */}
                {/* <!-- /Alerts--> */}
            </div>
        </div>
    )
}
