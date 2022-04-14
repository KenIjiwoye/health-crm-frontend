import React from 'react'
import { Appointment } from '../../interfaces/Appointments';

type AppointmentListProps = {
    appointments: Appointment[]
}

const badgeColor = (status: string) => {
    if (status === 'Active') return 'success';
    if (status === 'Pending') return 'warning';
    if (status === 'Cancelled') return 'danger';
}

export default function AppointmentList({ appointments }: AppointmentListProps) {
    return (
        <div className="col-md-12">
            <div className="widget-area-2 proclinic-box-shadow">
                <h3 className="widget-title">Appointments</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Doctor</th>
                                <th>Check-Up</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((a) => {

                                return (
                                    <tr>
                                        <td>{a.patientId}</td>
                                        <td>{a.doctorName}</td>
                                        <td>{a.department}</td>
                                        <td>{a.appointmentDate}</td>
                                        <td>{a.appointmentTime}</td>
                                        <td>
                                            <span className={`badge badge-${badgeColor(a.status)}`}>{a.status}</span>
                                        </td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
