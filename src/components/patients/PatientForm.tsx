import React from 'react'
import { Patient } from '../../interfaces/Patient'
import { useForm } from "react-hook-form";

type PatientFormProps = {
    patient?: Patient
}

type FormData = {
    firstName: string;
    lastName: string;
    age: number;
    dateOfBirth: string;
    email: string;
    gender: string;
    phone: string;
    photo?: string;
    address: string;

}

const styles = {
    error: {
        color: 'red',
        fontStyle: 'italics',
        fontSize: '12px'
    }
}

export default function PatientForm({ patient }: PatientFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit((data) => {
        if (patient !== undefined) return console.log('YOU NEED TO USE EDIT ROUTE!',data)
        console.log(data)
    });

    return (
        <>
            <form onSubmit={onSubmit} >
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="patient-name">Patient First Name</label>
                        <input {...register('firstName', {required: true})} type="text" className="form-control" placeholder="Patient first name" id="patient-name" defaultValue={patient !== undefined ? `${patient?.firstName} ${patient?.lastName}` : ''} />
                        {errors.firstName && <span style={styles.error} >This field is required</span>}
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="patient-name">Patient Name</label>
                        <input {...register('lastName', {required: true})} type="text" className="form-control" placeholder="Patient last name" id="patient-name" defaultValue={patient !== undefined ? `${patient?.firstName} ${patient?.lastName}` : ''} />
                        {errors.lastName && <span style={styles.error}>This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="dob">Date Of Birth</label>
                        <input {...register('dateOfBirth', {required: true})} type="date" placeholder="Date of Birth" className="form-control" id="dob" defaultValue={patient !== undefined ? patient.dateOfBirth : ''} />
                        {errors.dateOfBirth && <span style={styles.error}>This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="age">Age</label>
                        <input {...register('age', {required: true})} type="text" placeholder="Age" className="form-control" id="age" defaultValue={patient !== undefined ? patient.age : ''} />
                        {errors.age && <span style={styles.error}>This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="phone">Phone</label>
                        <input {...register('phone', {required: true})} type="text" placeholder="Phone" className="form-control" id="phone" defaultValue={patient !== undefined ? patient.phone : ''} />
                        {errors.phone && <span style={styles.error}>This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input {...register('email', {required: true})} type="email" placeholder="email" className="form-control" id="Email" defaultValue={patient !== undefined ? patient.email : ''} />
                        {errors.email && <span style={styles.error}>This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="gender">Gender</label>
                        <select {...register('gender', {required: true})} className="form-control" id="gender" defaultValue={patient !== undefined ? patient.gender : ''} >
                            <option value='' >Choose...</option>
                            <option value='male' >Male</option>
                            <option value='female' >Female</option>
                            <option value='other' >Other</option>
                        </select>
                        {errors.gender && <span style={styles.error}>This field is required</span>}
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="exampleFormControlTextarea1">Address</label>
                        <textarea {...register('address', {required: true})} placeholder="Address" className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={patient !== undefined ? patient.address : ''} ></textarea>
                        {errors.address && <span style={styles.error}>This field is required</span>}
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="file">File</label>
                        <input {...register('photo')} type="file" className="form-control" id="file" defaultValue={patient !== undefined ? patient.photo : ''} />
                    </div>

                    <div className="form-check col-md-12 mb-2">
                        <div className="text-left">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="ex-check-2" />
                                <label className="custom-control-label" htmlFor="ex-check-2">Please Confirm</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                </div>
            </form>
            {/* <!-- Alerts--> */}
            {/* <div className="alert alert-success alert-dismissible fade show" role="alert">
								<strong>Successfully Done!</strong> Please add payment now
								<button type="button" className="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="alert alert-warning alert-dismissible fade show" role="alert">
								<strong>Holy guacamole!</strong> You should check in on some of those fields below.
								<button type="button" className="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div> */}
            {/* <!-- /Alerts--> */}
        </>
    )
}
