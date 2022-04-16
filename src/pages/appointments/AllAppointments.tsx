import React from 'react'
import PageHeader from '../../components/PageHeader'
import { Appointment, appointments } from '../../interfaces/Appointments';
import {Link } from 'react-router-dom';
import AppointmentsController from '../../controllers/AppointmentsController';
import {useQuery} from 'react-query'
import Preloader from '../../components/Preloader';

const badgeColor = (status: string) => {
    if (status === 'Active') return 'success';
    if (status === 'Pending') return 'warning';
}

const handleRows = (appointments:Appointment[]) => {
   return appointments.map((a) => (
       <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input className="custom-control-input" type="checkbox" id="1" />
                    <label className="custom-control-label" htmlFor="1"></label>
                </div>
            </td>
            <td><Link to={{ pathname: `/appointments/${a.id}`}} state={{ appointment: a }} >{a.id}</Link></td>
            <td>{a.patientId}</td>
            <td><Link to={{ pathname: `/appointments/${a.id}`}} state={{ appointment: a }} >{`${a.appointmentDate} / ${a.appointmentTime}`}</Link></td>
            <td>{a.doctorName}</td>
            <td>{a.problem}</td>
            <td>
                <span className={`badge badge-${badgeColor(a.status)}`}>{a.status}</span>
            </td>
        </tr>
    ))
}

export default function AllAppointments() {
	const {isLoading, isError, data:appointments, error} = useQuery('appointments', AppointmentsController.getAppointments)

	if(isLoading) return <Preloader />

    // @ts-ignore "error | unknown" message
    if (isError) return <span>Error: {error.message}</span>


  return (
   <>
    <PageHeader title='Appointments' items={['Appointments', 'Appointments List']} />
    <div className="container">
        <div className="row">
        <div className="col-md-12">
						<div className="widget-area-2 proclinic-box-shadow">
							<h3 className="widget-title">Appointments List</h3>
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
											<th>Appointment ID</th>
											<th>Patient ID</th>
											<th>Appointment Date & Time</th>
											<th>Doctor Name</th>
											<th>Problem</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										{appointments && handleRows(appointments)}
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
