import React from 'react'
import { Appointment } from '../../interfaces/Appointments'

type AppointmentFormProps = {
    appointment?: Appointment;
}


export default function AppointmentForm({appointment}:AppointmentFormProps) {
    return (
        <div className="col-md-12">
            <div className="widget-area-2 proclinic-box-shadow">
                <h3 className="widget-title">Add Appointment</h3>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="patient-name">Patient ID</label>
                            <input type="text" className="form-control" placeholder="Patient ID" id="patient-id" value={appointment !== undefined ? appointment?.patientId: ''}  />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="department">Department</label>
                            <select className="form-control" id="department" value={appointment !== undefined ? appointment?.department: ''} >
                                <option>Neuro</option>
                                <option>Ortho</option>
                                <option>General</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="doctor-name">Doctor Name</label>
                            <input type="text" placeholder="Doctor Name" className="form-control" id="doctor-name" value={appointment !== undefined ? appointment?.doctorName: ''} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="appointment-date">Appointment Date</label>
                            <input type="date" placeholder="Appointment Date" className="form-control" id="appointment-date" value={appointment !== undefined ? appointment?.appointmentDate: ''} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="time-slot">Time Slot</label>
                            <select className="form-control" id="time-slot" value={appointment !== undefined ? appointment?.appointmentTime: ''} >
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
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="problem">Problem</label>
                            <textarea placeholder="Problem" className="form-control" id="problem" rows={3} value={appointment !== undefined ? appointment?.problem: ''} ></textarea>
                        </div>

                        <div className="form-check col-md-12 mb-2">
                            <div className="text-left">
                                <div className="custom-control custom-checkbox">
                                    <input className="custom-control-input" type="checkbox" id="ex-check-2" />
                                    <label className="custom-control-label" htmlFor="ex-check-2">Please Confirm</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6 mb-3">
                            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </div>
                </form>
                {/* <!-- Alerts--> */}
                <div className="alert alert-success alert-dismissible fade show" role="alert">
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
                </div>
                {/* <!-- /Alerts--> */}
            </div>
        </div>
    )
}
