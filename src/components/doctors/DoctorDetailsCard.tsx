import React from 'react'
import { Doctor } from '../../interfaces/Doctors'
import { Link } from 'react-router-dom';

type DoctorDetailsCardProps = {
    doctor: Doctor
}

export default function DoctorDetailsCard({doctor}:DoctorDetailsCardProps) {
    return (
        <div className="col-md-12">
        <div className="widget-area-2 proclinic-box-shadow">
            <h3 className="widget-title">Doctor Details</h3>
            <div className="row no-mp">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/images/doctor.jpg`} alt="Doctor image"/>
                        <div className="card-body">
                            <h4 className="card-title">{`${doctor.firstName} ${doctor.lastName}`}</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the
                                card's
                                content.</p>
                            <button type="button" className="btn btn-success"><Link to={`/doctors/${doctor.id}/edit`} state={{ doctor}} ><span className="ti-pencil-alt"></span> Edit
                                Doctor</Link></button>
                            <button type="button" className="btn btn-danger"><span className="ti-trash"></span> Delete
                                Doctor</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <tbody>
                                <tr>
                                    <td><strong>Specialization</strong></td>
                                    <td>{doctor.specialization}</td>
                                </tr>
                                <tr>
                                    <td><strong>Experience</strong></td>
                                    <td>{doctor.experience} Years</td>
                                </tr>
                                <tr>
                                    <td><strong>Gender</strong></td>
                                    <td>{doctor.gender}</td>
                                </tr>
                                <tr>
                                    <td><strong>Address</strong></td>
                                    <td>{doctor.address}</td>
                                </tr>
                                <tr>
                                    <td><strong>Phone</strong> </td>
                                    <td>{doctor.phone}</td>
                                </tr>
                                <tr>
                                    <td><strong>Date Of Birth</strong> </td>
                                    <td>{doctor.dateOfBirth}</td>
                                </tr>
                                <tr>
                                    <td><strong>Email</strong></td>
                                    <td>{doctor.email}</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <!--Export links--> */}
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center export-pagination">
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
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}
