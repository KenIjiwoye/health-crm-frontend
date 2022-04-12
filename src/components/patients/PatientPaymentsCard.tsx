import React from 'react'

export default function PatientPaymentsCard() {
    return (
        <div className="col-md-12">
            <div className="widget-area-2 proclinic-box-shadow">
                <h3 className="widget-title">Patient Payment Transactions</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Cost</th>
                                <th>Discount</th>
                                <th>Payment Type</th>
                                <th>Invoive</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12-03-2018</td>
                                <td>$300</td>
                                <td>15%</td>
                                <td>Check</td>
                                <td><button type="button" className="btn btn-outline-info mb-0"><span className="ti-arrow-down"></span> Invoice</button></td>
                                <td><span className="badge badge-warning">Pending</span></td>
                            </tr>
                            <tr>
                                <td>12-03-2018</td>
                                <td>$130</td>
                                <td>5%</td>
                                <td>Credit Card</td>
                                <td><button type="button" className="btn btn-outline-info mb-0"><span className="ti-arrow-down"></span> Invoice</button></td>
                                <td><span className="badge badge-success">Completed</span></td>
                            </tr>
                            <tr>
                                <td>12-03-2018</td>
                                <td>$30</td>
                                <td>5%</td>
                                <td>Credit Card</td>
                                <td><button type="button" className="btn btn-outline-info mb-0"><span className="ti-arrow-down"></span> Invoice</button></td>
                                <td><span className="badge badge-danger">Cancelled</span></td>
                            </tr>
                            <tr>
                                <td>12-03-2018</td>
                                <td>$30</td>
                                <td>5%</td>
                                <td>Cash</td>
                                <td><button type="button" className="btn btn-outline-info mb-0"><span className="ti-arrow-down"></span> Invoice</button></td>
                                <td><span className="badge badge-success">Completed</span></td>
                            </tr>
                            <tr>
                                <td>12-03-2018</td>
                                <td>$30</td>
                                <td>5%</td>
                                <td>Credit Card</td>
                                <td><button type="button" className="btn btn-outline-info mb-0"><span className="ti-arrow-down"></span> Invoice</button></td>
                                <td><span className="badge badge-success">Completed</span></td>
                            </tr>
                            <tr>
                                <td>12-03-2018</td>
                                <td>$30</td>
                                <td>5%</td>
                                <td>Insurance</td>
                                <td><button type="button" className="btn btn-outline-info mb-0"><span className="ti-arrow-down"></span> Invoice</button></td>
                                <td><span className="badge badge-success">Completed</span></td>
                            </tr>
                            <tr>
                                <td>12-03-2018</td>
                                <td>$30</td>
                                <td>5%</td>
                                <td>Credit Card</td>
                                <td><button type="button" className="btn btn-outline-info mb-0"><span className="ti-arrow-down"></span> Invoice</button></td>
                                <td><span className="badge badge-success">Completed</span></td>
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
                </div>
            </div>
        </div>
    )
}
