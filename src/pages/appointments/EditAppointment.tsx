import React from 'react'
import AppointmentForm from '../../components/appointments/AppointmentForm'
import PageHeader from '../../components/PageHeader'
import {useLocation} from 'react-router-dom';
import { Appointment } from '../../interfaces/Appointments';

type LocationState = {
    appointment: Appointment
  }

export default function EditAppointment() {
    let location = useLocation();
    const {appointment} = location.state as LocationState;
  return (
    <>
    <PageHeader title='Edit Appointment' items={['Appointments','Edit Appointment']} />
    <div className="container">
        <div className="row">
            <AppointmentForm appointment={appointment} />
        </div>
    </div>
    
    </>
  )
}
