import React from 'react'
import { Doctor } from '../../interfaces/Doctors';

type DoctorsListProps = {
    doctors: Doctor[]
}

const badgeColor = (status: string) => {
    if (status === 'Available') return 'success';
    if (status === 'On Leave') return 'warning';
    if (status === 'Not Available') return 'danger';
}

export default function DoctorsList({ doctors }:DoctorsListProps) {
    return (
        <div className="col-md-6">
            <div className="widget-area-2 progress-status proclinic-box-shadow">
                <h3 className="widget-title">Doctors Availability</h3>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Doctor</th>
                                <th>Speciality</th>
                                <th>Availability</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((d) => (
                                <tr>
                                <td>{`${d.firstName} ${d.lastName}`}</td>
                                <td>{d.specialization}</td>
                                <td>
                                    <span className={`badge badge-${badgeColor(d.status)}`}>{d.status}</span>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
