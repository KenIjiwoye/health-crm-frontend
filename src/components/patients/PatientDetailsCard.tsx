import React from 'react'
import { Patient } from '../../interfaces/Patient'
import {Link} from 'react-router-dom'

type PatientDetailsCardProps = {
    patient: Patient
}

export default function PatientDetailsCard({patient}:PatientDetailsCardProps) {
    return (
        <div className="col-md-6">
            <div className="widget-area-2 proclinic-box-shadow">
                <h3 className="widget-title">Patient Details</h3>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td><strong>Name</strong></td>
                                <td>{patient.firstName} {patient.lastName} </td>
                            </tr>
                            <tr>
                                <td><strong>Date Of Birth</strong> </td>
                                <td>{patient.dateOfBirth}</td>
                            </tr>
                            <tr>
                                <td><strong>Gender</strong></td>
                                <td>{patient.gender}</td>
                            </tr>
                            <tr>
                                <td><strong>Address</strong></td>
                                <td>{patient.address}</td>
                            </tr>
                            <tr>
                                <td><strong>Phone </strong></td>
                                <td>{patient.phone}</td>
                            </tr>
                            <tr>
                                <td><strong>Email</strong></td>
                                <td>{patient.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* <!--Export links--> */}
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center export-pagination">
                        <li className="page-item">
                            <a className="page-link" href="#"><span className="ti-download"></span> csv</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#"><span className="ti-printer"></span>  print</a>
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
                <button type="button" className="btn btn-success mb-3"><Link to={{ pathname: `/patients/${patient.id}/edit` }} state={{patient}} ><span className="ti-pencil-alt"></span> Edit Patient</Link></button>
                <button type="button" className="btn btn-danger mb-3"><span className="ti-trash"></span> Delete Patient</button>
                <button type="button" className="btn btn-info mb-3"><span className="ti-arrow-down"></span> Download File</button>
            </div>
        </div>
    )
}
