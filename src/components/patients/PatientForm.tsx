import React from 'react'
import { Patient } from '../../interfaces/Patient'

type PatientFormProps = {
    patient?: Patient
}

export default function PatientForm({patient}:PatientFormProps) {
    console.warn('edit patient', patient)
    return (
        <>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="patient-name">Patient Name</label>
                        <input type="text" className="form-control" placeholder="Patient name" id="patient-name" value={patient !== undefined ? `${patient?.firstName} ${patient?.lastName}` : ''} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="dob">Date Of Birth</label>
                        <input type="date" placeholder="Date of Birth" className="form-control" id="dob" value={patient !== undefined ? patient.dateOfBirth : ''} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="age">Age</label>
                        <input type="text" placeholder="Age" className="form-control" id="age" value={patient !== undefined ? patient.age : ''} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" placeholder="Phone" className="form-control" id="phone" value={patient !== undefined ? patient.phone : ''} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="email" className="form-control" id="Email" value={patient !== undefined ? patient.email : ''} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="gender">Gender</label>
                        <select className="form-control" id="gender" value={patient !== undefined ? patient.gender : ''} >
                            <option value='male' >Male</option>
                            <option value='female' >Female</option>
                            <option value='other' >Other</option>
                        </select>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="exampleFormControlTextarea1">Address</label>
                        <textarea placeholder="Address" className="form-control" id="exampleFormControlTextarea1" rows={3} value={patient !== undefined ? patient.address : ''} ></textarea>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="file">File</label>
                        <input type="file" className="form-control" id="file"  value={patient !== undefined ? patient.photo : ''} />
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
