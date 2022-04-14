import React from 'react'
import AppointmentForm from '../../components/appointments/AppointmentForm'
import PageHeader from '../../components/PageHeader'

export default function AddAppointment() {
  return (
    <>
    <PageHeader title='Add Appointment' items={['Appointments','Add Appointment']} />
    <div className="container">
        <div className="row">
            <AppointmentForm />
        </div>
    </div>
    
    </>
  )
}
