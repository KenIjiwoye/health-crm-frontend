import React from 'react'
import DoctorForm from '../../components/doctors/DoctorForm'
import PageHeader from '../../components/PageHeader'

export default function NewDoctor() {
    return (
        <>
        <PageHeader title='Add Doctor' items={['Doctors', 'Add Doctor']} />
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="widget-area-2 proclinic-box-shadow">
                        <h3 className="widget-title">Add Doctor</h3>
                        <DoctorForm />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
