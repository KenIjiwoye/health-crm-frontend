import React from 'react'
import PageHeader from '../../components/PageHeader'
import PatientDetailsCard from '../../components/patients/PatientDetailsCard'
import PatientPaymentsCard from '../../components/patients/PatientPaymentsCard'
import PatientVisitsCard from '../../components/patients/PatientVisitsCard'

import { patients } from '../../interfaces/Patient'

export default function PatientDetails() {
  return (
    <>
    <PageHeader title='Patient Details' items={['Patients','Patient Details']} />
    <div className="container">
        <div className="row">
            <PatientDetailsCard patient={patients[0]} />
            {/* TODO: create these 2 interfaces below  */}
            <PatientVisitsCard />
            <PatientPaymentsCard />
        </div>
    </div>
    </>
  )
}
