import React from 'react'
import { Doctor } from '../../interfaces/Doctors'
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import format from 'date-fns/format'


type DoctorFormProps = {
    doctor?: Doctor;
    mutation?: any;
}

type FormData = {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    specialization: string;
    experience: number;
    age: number;
    phone: string;
    gender: string;
    details?: string;
    address: string;
    photo?: string;
    email: string;
}

const styles = {
    error: {
        color: 'red',
        fontStyle: 'italics',
        fontSize: '12px'
    }
}

export default function DoctorForm({doctor,mutation}:DoctorFormProps) {
    const navigate = useNavigate();
    const {isLoading} = mutation;
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => {
    if (doctor !== undefined) return console.log('YOU NEED TO USE EDIT ROUTE!',data)
        console.log(data)
        mutation.mutate(data);
        navigate(`/doctors`);
  });
    return (
        <>
            <form onSubmit={onSubmit} >
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="Doctor-name">Doctor First Name</label>
                        <input {...register('firstName', {required: true})} type="text" className="form-control" placeholder="Doctor name" id="Doctor-name" defaultValue={doctor !== undefined ? `${doctor.firstName} ${doctor.lastName}`:''} />
                        {errors.firstName && <span style={styles.error} >This field is required</span>}
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="Doctor-name">Doctor Last Name</label>
                        <input {...register('lastName', {required: true})} type="text" className="form-control" placeholder="Doctor name" id="Doctor-name" defaultValue={doctor !== undefined ? `${doctor.firstName} ${doctor.lastName}`:''} />
                        {errors.lastName && <span style={styles.error} >This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="dob">Date Of Birth</label>
                        <input {...register('dateOfBirth', {required: true})} type="date" placeholder="Date of Birth" className="form-control" id="dob" defaultValue={doctor !== undefined ? doctor.dateOfBirth : format(new Date(), 'MM/dd/yyyy') } />
                        {errors.dateOfBirth && <span style={styles.error} >This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="specialization">Specialization</label>
                        <input {...register('specialization', {required: true})} type="text" placeholder="Specialization" className="form-control" id="specialization" defaultValue={doctor !== undefined ? doctor.specialization : ''} />
                        {errors.specialization && <span style={styles.error} >This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="experience">Experience</label>
                        <input {...register('experience', {required: true})} type="number" placeholder="Experience" className="form-control" id="experience" defaultValue={doctor !== undefined ? doctor.experience : ''} />
                        {errors.experience && <span style={styles.error} >This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="age">Age</label>
                        <input {...register('age', {required: true})} type="text" placeholder="Age" className="form-control" id="age" defaultValue={doctor !== undefined ? doctor.age : ''} />
                        {errors.age && <span style={styles.error} >This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="phone">Phone</label>
                        <input {...register('phone', {required: true})} type="text" placeholder="Phone" className="form-control" id="phone" defaultValue={doctor !== undefined ? doctor.phone : ''} />
                        {errors.phone && <span style={styles.error} >This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input {...register('email', {required: true})} type="email" placeholder="email" className="form-control" id="Email" defaultValue={doctor !== undefined ? doctor.email : ''} />
                        {errors.email && <span style={styles.error} >This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="gender">Gender</label>
                        <select {...register('gender', {required: true})} className="form-control" id="gender" defaultValue={doctor !== undefined ? doctor.gender : ''} >
                            <option value='male' >Male</option>
                            <option value='female' >Female</option>
                            <option value='other' >Other</option>
                        </select>
                        {errors.gender && <span style={styles.error} >This field is required</span>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="about-doctor">Doctor Details</label>
                        <textarea {...register('details')} placeholder="Doctor Details" className="form-control" id="about-doctor" rows={3} defaultValue={doctor !== undefined ? doctor.details : ''} ></textarea>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="address">Address</label>
                        <textarea {...register('address', {required: true})} placeholder="Address" className="form-control" id="address" rows={3} defaultValue={doctor !== undefined ? doctor.address : ''} ></textarea>
                        {errors.address && <span style={styles.error} >This field is required</span>}
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="file">File</label>
                        <input {...register('photo')} type="file" className="form-control" id="file" defaultValue={doctor !== undefined ? doctor.photo : ''} />
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
                    { isLoading ? (<button type="submit" className="btn btn-primary btn-lg" disabled >Loading...</button>): (<button type="submit" className="btn btn-primary btn-lg">Submit</button>)}
                    </div>
                </div>
            </form>
            {/* <!-- Alerts--> */}
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Successfully Done!</strong> Please Check in doctors list
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
        </>
    )
}
