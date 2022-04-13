import React from 'react'
import PageHeader from '../../components/PageHeader'
import PatientForm from '../../components/patients/PatientForm'
import { Patient, patients } from '../../interfaces/Patient'
import {useLocation} from 'react-router-dom'

type LocationState ={
    patient: Patient
}

export default function EditPatient() {
    let location = useLocation();
    const { patient } = location.state as LocationState; 
    return (
        <>
            <PageHeader title='Edit Patient' items={['Patients', 'Edit Patients']} />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="widget-area-2 proclinic-box-shadow">
                            <h3 className="widget-title">Edit Patient</h3>
                            <PatientForm patient={patient} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
