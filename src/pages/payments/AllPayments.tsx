import React from 'react'
import PageHeader from '../../components/PageHeader'
import { Payment, payments } from '../../interfaces/Payments';

const badgeColor = (status: string) => {
    if (status === 'Completed') return 'success';
    if (status === 'Pending') return 'warning';
}

const handleRows = () => {
    return payments.map((p: Payment) => (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input className="custom-control-input" type="checkbox" id="1" />
                    <label className="custom-control-label" htmlFor="1"></label>
                </div>
            </td>
            <td>{p.patientName}</td>
            <td>{p.doctorName}</td>
            <td>{p.services[0].serviceName}</td>
            <td>{p.payment.amount}</td>
            <td>{p.payment.discount}</td>
            <td>
                <span className={`badge badge-${badgeColor(p.status)}`}>{p.status}</span>
            </td>
        </tr>
    ))
}

export default function AllPayments() {
    return (
        <>
            <PageHeader title='Payments' items={['Payments', 'All Payments']} />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="widget-area-2 proclinic-box-shadow">
                            <h3 className="widget-title">Payments List</h3>
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
                                            <th>Patient Name</th>
                                            <th>Doctor Name</th>
                                            <th>Service Name</th>
                                            <th>Charges</th>
                                            <th>Discount <small>(%)</small></th>
                                            <th>Status</th>
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
