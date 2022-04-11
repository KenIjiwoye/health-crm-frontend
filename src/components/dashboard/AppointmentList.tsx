import React from 'react'

type AppointmentListProps = {
    appointments: []
}

const badgeColor = (status: string) => {
    if (status === 'Completed') return 'success';
    if (status === 'Pending') return 'warning';
    if (status === 'Cancelled') return 'danger';
}

export default function AppointmentList({ appointments }: any) {
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
                            {appointments.map((a:any, i:number) => {

                                return (
                                    <tr>
                                        <td>{a.patientName}</td>
                                        <td>{a.doctor}</td>
                                        <td>{a.checkUp}</td>
                                        <td>{a.date}</td>
                                        <td>{a.time}</td>
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
