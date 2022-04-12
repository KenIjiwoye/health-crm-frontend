import React from 'react'

export default function DoctorForm() {
    return (
        <>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="Doctor-name">Doctor Name</label>
                        <input type="text" className="form-control" placeholder="Doctor name" id="Doctor-name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="dob">Date Of Birth</label>
                        <input type="date" placeholder="Date of Birth" className="form-control" id="dob" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="specialization">Specialization</label>
                        <input type="text" placeholder="Specialization" className="form-control" id="specialization" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="experience">Experience</label>
                        <input type="text" placeholder="Experience" className="form-control" id="experience" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="age">Age</label>
                        <input type="text" placeholder="Age" className="form-control" id="age" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" placeholder="Phone" className="form-control" id="phone" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="email" className="form-control" id="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="gender">Gender</label>
                        <select className="form-control" id="gender">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="about-doctor">Doctor Details</label>
                        <textarea placeholder="Doctor Details" className="form-control" id="about-doctor" rows={3}></textarea>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="address">Address</label>
                        <textarea placeholder="Address" className="form-control" id="address" rows={3}></textarea>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="file">File</label>
                        <input type="file" className="form-control" id="file" />
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
