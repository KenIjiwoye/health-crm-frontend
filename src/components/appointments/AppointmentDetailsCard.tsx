import React from 'react'
import { Link } from 'react-router-dom';
import { Appointment } from '../../interfaces/Appointments';

type AppointmentDetailsCardProps = {
    appointment: Appointment
}

export default function AppointmentDetailsCard({ appointment }: AppointmentDetailsCardProps) {
    
    return (
        <div className="col-md-12">
            <div className="widget-area-2 proclinic-box-shadow">
                <h3 className="widget-title">Appointment Details</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <td><strong>Patient ID</strong></td>
                                <td>{appointment.patientId}</td>
                            </tr>
                            <tr>
                                <td><strong>Department</strong></td>
                                <td>{appointment.department}</td>
                            </tr>
                            <tr>
                                <td><strong>Doctor Name</strong></td>
                                <td>{appointment.doctorName}</td>
                            </tr>
                            <tr>
                                <td><strong>Appointment Date</strong></td>
                                <td>{appointment.appointmentDate}</td>
                            </tr>
                            <tr>
                                <td><strong>Time Slot </strong></td>
                                <td>{appointment.appointmentTime}</td>
                            </tr>
                            <tr>
                                <td><strong>Problem</strong></td>
                                <td>{appointment.problem}</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <!--Export links--> */}
                    <nav aria-label="Page navigation example">
                        <ul className="pagination export-pagination">
                            <li className="page-item">
                                <a className="page-link" href="#"><span className="ti-download"></span> csv</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#"><span className="ti-printer"></span> print</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#"><span className="ti-file"></span> PDF</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#"><span className="ti-align-justify"></span> Excel</a>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- /Export links--> */}
                    <button type="button" className="btn btn-success mb-3"><span className="ti-pencil-alt"></span> Edit
                        Appointment</button>
                    <button type="button" className="btn btn-danger mb-3"><span className="ti-trash"></span> Delete
                        Appointment</button>
                </div>
            </div>
        </div>
    )
}
