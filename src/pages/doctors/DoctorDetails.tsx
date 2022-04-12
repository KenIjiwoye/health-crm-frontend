import React from 'react'
import DoctorDetailsCard from '../../components/doctors/DoctorDetailsCard'
import PageHeader from '../../components/PageHeader'

import { doctors } from '../../interfaces/Doctors'

export default function DoctorDetails() {
  return (
    <>
    <PageHeader title='Patient Details' items={['Patients','Patient Details']} />
    <div className="container">
        <div className="row">
            <DoctorDetailsCard doctor={doctors[0]} />
        </div>
    </div>
    </>
  )
}
