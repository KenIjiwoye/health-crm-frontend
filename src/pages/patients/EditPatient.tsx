import React from 'react'
import PageHeader from '../../components/PageHeader'
import PatientForm from '../../components/patients/PatientForm'

import { patients } from '../../interfaces/Patient'

export default function EditPatient() {
    return (
        <>
            <PageHeader title='Edit Patient' items={['Patients', 'Edit Patients']} />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="widget-area-2 proclinic-box-shadow">
                            <h3 className="widget-title">Edit Patient</h3>
                            <PatientForm patient={patients[3]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
