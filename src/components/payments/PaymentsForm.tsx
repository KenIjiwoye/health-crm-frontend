import React from 'react'
import { PaymentModel, PaymentService } from '../../interfaces/Payments'
import { useForm } from 'react-hook-form';

type FormData = {
    patientId: number;
    patientName: string;
    department: string;
    doctorName: string;
    admissionDate: string;
    dischargeDate: string;
    services: [PaymentService];
    payment: PaymentModel;
    confirm: boolean;
}

const styles = {
    error: {
        color: 'red',
        fontStyle: 'italics',
        fontSize: '12px'
    }
}


export default function PaymentsForm() {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => {
        console.log(data)
    });

    return (
        <div className="col-md-12">
            <div className="widget-area-2 proclinic-box-shadow">
                <h3 className="widget-title">Add Payment</h3>
                <form onSubmit={onSubmit} >
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="patient-id">Patient ID</label>
                            <input {...register('patientId', { required: true })} type="text" className="form-control" placeholder="Patient ID" id="patient-id" />
                            {errors.patientId && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="patient-name">Patient Name</label>
                            <input {...register('patientName', { required: true })} type="text" className="form-control" placeholder="Patient Name" id="patient-name" />
                            {errors.patientName && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="department">Department</label>
                            <select {...register('department', { required: true })} className="form-control" id="department">
                                <option>Neuro</option>
                                <option>Ortho</option>
                                <option>General</option>
                            </select>
                            {errors.department && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="doctor-name">Doctor Name</label>
                            <input {...register('doctorName', { required: true })} type="text" placeholder="Doctor Name" className="form-control" id="doctor-name" />
                            {errors.doctorName && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="adminssion-date">Admission Date</label>
                            <input {...register('admissionDate', { required: true })} type="date" placeholder="Adminssion Date" className="form-control" id="adminssion-date" />
                            {errors.admissionDate && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="discharge-date">Discharge Date</label>
                            <input {...register('dischargeDate', { required: true })} type="date" placeholder="Discharge Date" className="form-control" id="discharge-date" />
                            {errors.dischargeDate && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-12">
                            <h4>Services</h4>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="service-name">Service Name</label>
                            <input type="text" placeholder="Service Name" className="form-control" id="service-name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="treatment-cost">Cost of Treatment</label>
                            <input type="text" placeholder="Cost of Treatment" className="form-control" id="treatment-cost" />
                        </div>
                        <div className="form-group col-md-12">
                            <button type="button" className="btn btn-outline-success"><span className="ti-plus" ></span> Add Service</button>
                        </div>
                        <div className="form-group col-md-12">
                            <h4>Payment</h4>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="discount">Discount (%)</label>
                            <input {...register('payment.discount', { required: false })}  type="text" placeholder="Discount" className="form-control" id="discount" />
                            {errors.payment?.discount && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="advance-paid">Advance Paid</label>
                            <input {...register('payment.advancePayment', { required: false })} type="text" placeholder="Advance Paid" className="form-control" id="advance-paid" />
                            {errors.payment?.advancePayment && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="payment-type">Payment Type</label>
                            <select {...register('payment.paymentType', { required: false })} className="form-control" id="payment-type">
                                <option>Check</option>
                                <option>Card</option>
                                <option>Cash</option>
                            </select>
                            {errors.payment?.paymentType && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="card-check">Payment details</label>
                            <input {...register('payment.paymentDetails', { required: false })} type="text" placeholder="Payment details" className="form-control" id="card-check" />
                        </div>
                        <div className="form-check col-md-12 mb-2">
                            <div className="text-left">
                                <div className="custom-control custom-checkbox">
                                    <input {...register('confirm', { required: true })} className="custom-control-input" type="checkbox" id="ex-check-2" />
                                    <label className="custom-control-label" htmlFor="ex-check-2">Please Confirm</label>
                                </div>
                            </div>
                            {errors.confirm && <span style={styles.error} >This field is required</span>}
                        </div>
                        <div className="form-group col-md-6 mb-3">
                            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </div>
                </form>
                {/* <!-- Alerts--> */}
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Successfully Done!</strong> Payment added
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                {/* <!-- /Alerts--> */}
            </div>
        </div>
    )
}
