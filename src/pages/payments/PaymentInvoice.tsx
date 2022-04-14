import React from 'react'
import PageHeader from '../../components/PageHeader'
import { Payment, PaymentService } from '../../interfaces/Payments'
import { useLocation } from 'react-router-dom';

type LocationState = {
    payment: Payment;
}

const handleServices = (services:PaymentService[]) => {
    return services.map(s => (
        <tr>
            <th scope="row">{s.id}</th>
            <td>{s.serviceName}</td>
            {/* <td>$ {s.cost}</td> */}
            <td>$ {s.cost}</td>
        </tr>
    ))
}

export default function PaymentInvoice() {
    let location = useLocation();
    const { payment } = location.state as LocationState;
    let totalDiscount = payment.payment.amount * payment.payment.discount;
    let tax = payment.payment.amount *.08;
    return (
        <>
            <PageHeader title='Payment Invoice' items={['Payments', 'Payment Invoice']} />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="widget-area-2 proclinic-box-shadow pb-3">
                            {/* <!-- Invoice Head --> */}
                            <div className="row ">
                                <div className="col-sm-6 mb-5">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/logo-dark.png`} alt="logo hospital" className="img-thumbnail" />
                                    <br />
                                    <br />
                                    <span>Street Address</span>
                                    <br />
                                    <span>[City, ST ZIP Code]</span>
                                    <br />
                                    <span className="pr-2">Phone: +00 123456</span>
                                    <span>Fax: 432 1231 3456</span>
                                </div>
                                <div className="col-sm-6 text-md-right mb-5">
                                    <h3>INVOICE</h3>
                                    <br />
                                    <br />
                                    <span>Invoice # [{payment.id}]</span>
                                    <br />
                                    <span>{payment.paidInFullDate}</span>
                                </div>
                            </div>
                            {/* <!-- /Invoice Head --> */}
                            {/* <!-- Invoice Content --> */}
                            <div className="row">
                                <div className="col-sm-6 mb-5">
                                    <h6 className="proclinic-text-color">PATIENT DETAILS:</h6>
                                    <span><strong>Name:</strong> Daniel </span>
                                    <br />
                                    <span><strong>Age:</strong> 20</span>
                                    <br />
                                    <span><strong>Address: </strong>60-21/100, Smith street</span>
                                    <br />
                                    <span>Banglore, India</span>
                                    <br />
                                    <span><strong>Phone:</strong> +91 12345 67890</span>
                                </div>
                                <div className="col-sm-6 mb-5">
                                    <span><strong>Patient ID:</strong> {payment.patientId}</span>
                                    <br />
                                    <span><strong>Total Days:</strong> 5</span>
                                    <br />
                                    <span><strong>Payment Type:</strong> {payment.payment.paymentType}</span>

                                </div>
                                <div className="col-sm-12 mb-2">
                                    <strong className="proclinic-text-color">Services:</strong>
                                </div>
                                <div className="col-sm-12">
                                    <table className="table table-bordered table-striped table-invioce">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Service</th>
                                                {/* <th scope="col">Unit Cost</th> */}
                                                {/* <th scope="col">Discount <small>(%)</small></th> */}
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {handleServices(payment.services)}
                                            {/* <tr>
                                                <th scope="row">1</th>
                                                <td>Chest X-ray</td>
                                                <td>$ 120</td>
                                                <td>10</td>
                                                <td>$ 108</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Injury Operation</td>
                                                <td>$ 1000</td>
                                                <td>20</td>
                                                <td>$ 800</td>
                                            </tr> */}

                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-sm-4 ml-auto">
                                    <table className="table table-bordered table-striped">
                                        <tbody>
                                            <tr>
                                                <td>Total</td>
                                                <td>$ {payment.payment.amount}</td>
                                            </tr>
                                            <tr>
                                                <td>Tax</td>
                                                <td>$ {tax}</td>
                                            </tr>

                                            <tr>
                                                <td>Discount</td>
                                                <td>$ {totalDiscount}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>GRAND TOTAL</strong>
                                                </td>
                                                <td>
                                                    <strong>$ {payment.payment.amount - totalDiscount + tax}</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="col-sm-12">
                                    <div className="border p-4">
                                        <strong>Note:</strong>
                                        {payment.payment.paymentDetails}
                                        <br />
                                        <br />
                                        <strong className="f12">Signature</strong>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center export-pagination mt-3 mb-0">
                                            <li className="page-item">
                                                <a className="page-link" href="#"><span className="ti-printer"></span>  print</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#"><span className="ti-file"></span> PDF</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            {/* <!-- /Invoice Content --> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
