import React from 'react'
import PageHeader from '../../components/PageHeader'
import PatientDetailsCard from '../../components/patients/PatientDetailsCard'
import PatientPaymentsCard from '../../components/patients/PatientPaymentsCard'
import PatientVisitsCard from '../../components/patients/PatientVisitsCard'
import { Patient, patients } from '../../interfaces/Patient'
import {useLocation} from 'react-router-dom'

type LocationState = {
  patient: Patient
}

export default function PatientDetails() {
  let location = useLocation();
  const { patient } = location.state as LocationState;

  console.warn('location state', patient)
  return (
    <>
    <PageHeader title='Patient Details' items={['Patients','Patient Details']} />
    <div className="container">
        <div className="row">
            <PatientDetailsCard patient={patient} />
            {/* TODO: create these 2 interfaces below  */}
            <PatientVisitsCard />
            <PatientPaymentsCard />
        </div>
    </div>
    </>
  )
}
