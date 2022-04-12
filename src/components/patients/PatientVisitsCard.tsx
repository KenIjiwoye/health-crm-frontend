import React from 'react'

export default function PatientVisitsCard() {
    return (
        <div className="col-md-6">
            <div className="widget-area-2 proclinic-box-shadow">
                <h3 className="widget-title">Patient Visits</h3>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Doctor Name</th>
                                <th>Cost</th>
                                <th>Visit Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Manoj Kumar</td>
                                <td>$30</td>
                                <td>12-03-2018</td>
                                <td>Resheduled</td>
                            </tr>
                            <tr>
                                <td>Riya </td>
                                <td>$26</td>
                                <td>12-10-2018</td>
                                <td>Operation</td>
                            </tr>
                            <tr>
                                <td>Paul</td>
                                <td>$46</td>
                                <td>45-10-2018</td>
                                <td>Fever</td>
                            </tr>
                            <tr>
                                <td>Manoj Kumar</td>
                                <td>$30</td>
                                <td>12-03-2018</td>
                                <td>Ortho</td>
                            </tr>
                            <tr>
                                <td>Riya </td>
                                <td>26</td>
                                <td>12-10-2018</td>
                                <td>General Check-up</td>
                            </tr>
                            <tr>
                                <td>Paul</td>
                                <td>46</td>
                                <td>45-10-2018</td>
                                <td>Injury</td>
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
