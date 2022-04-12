import React from 'react'
import PageHeader from '../../components/PageHeader'
import PatientForm from '../../components/patients/PatientForm'

export default function NewPatient() {
  return (
    <>
      <PageHeader title='Edit Patient' items={['Patients', 'Edit Patients']} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="widget-area-2 proclinic-box-shadow">
              <h3 className="widget-title">Add Patient</h3>
              <PatientForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
