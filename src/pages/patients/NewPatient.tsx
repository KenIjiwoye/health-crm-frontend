import React from 'react'
import PageHeader from '../../components/PageHeader'
import PatientForm from '../../components/patients/PatientForm'
import {useMutation} from 'react-query'
import PatientsController from '../../controllers/PatientsController'
import { Patient } from '../../interfaces/Patient'

export default function NewPatient() {
  const mutation = useMutation((newPatient: Patient) => PatientsController.addPatient(newPatient))
  return (
    <>
      <PageHeader title='Edit Patient' items={['Patients', 'Edit Patients']} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="widget-area-2 proclinic-box-shadow">
              <h3 className="widget-title">Add Patient</h3>
              <PatientForm mutation={mutation} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
