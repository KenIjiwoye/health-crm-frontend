import React from 'react'
import PageHeader from '../../components/PageHeader'
import { Doctor, doctors } from '../../interfaces/Doctors';
import {Link} from 'react-router-dom';

const badgeColor = (status: string) => {
    if (status === 'Available') return 'success';
    if (status === 'On Leave') return 'warning';
    if (status === 'Not Available') return 'danger';
}

const handleRows = () => {
   return doctors.map((d:Doctor) => (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input className="custom-control-input" type="checkbox" id="1" />
                    <label className="custom-control-label" htmlFor="1"></label>
                </div>
            </td>
            <td>{d.id}</td>
            <td><Link to={{ pathname: `/doctors/${d.id}`}} state={{ doctor: d }} >{`${d.firstName} ${d.lastName}`}</Link></td>
            <td>{d.experience}</td>
            <td>{d.phone}</td>
            <td>{d.specialization}</td>
            <td>
                <span className={`badge badge-${badgeColor(d.status)}`}>{d.status}</span>
            </td>
        </tr>
    ))
}

export default function AllDoctors() {
    return (
        <>
            <PageHeader title={'Doctors'} items={['Doctors', 'All Doctors']} />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="widget-area-2 proclinic-box-shadow">
                            <h3 className="widget-title">Doctors List</h3>
                            <div className="table-responsive mb-3">
                                <table id="tableId" className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th className="no-sort">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" type="checkbox" id="select-all" />
                                                    <label className="custom-control-label" htmlFor="select-all"></label>
                                                </div>
                                            </th>
                                            <th>Doctor ID</th>
											<th>Doctor Name</th>
											<th>Experience <small>(in Years)</small></th>
											<th>Phone</th>
											<th>Specialization</th>
											<th>Availability</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {handleRows()}
                                        
                                    </tbody>
                                </table>
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
                                <button type="button" className="btn btn-danger mt-3 mb-0"><span className="ti-trash"></span> DELETE</button>
                                <button type="button" className="btn btn-primary mt-3 mb-0"><span className="ti-pencil-alt"></span> EDIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
