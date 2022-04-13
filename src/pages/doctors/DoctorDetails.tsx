import React from 'react'
import DoctorDetailsCard from '../../components/doctors/DoctorDetailsCard'
import PageHeader from '../../components/PageHeader'
import { Doctor, doctors } from '../../interfaces/Doctors'
import {useLocation} from 'react-router-dom'

type LocationState = {
  doctor: Doctor
}

export default function DoctorDetails() {
  let location = useLocation();
  const {doctor} = location.state as LocationState;
  
  return (
    <>
    <PageHeader title='Patient Details' items={['Doctors','Doctor Details']} />
    <div className="container">
        <div className="row">
            <DoctorDetailsCard doctor={doctor} />
        </div>
    </div>
    </>
  )
}
