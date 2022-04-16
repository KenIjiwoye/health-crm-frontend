import React from 'react'
import AppointmentForm from '../../components/appointments/AppointmentForm'
import PageHeader from '../../components/PageHeader'
import {useMutation} from 'react-query';
import { Appointment } from '../../interfaces/Appointments';
import AppointmentsController from '../../controllers/AppointmentsController';

export default function AddAppointment() {
  const mutation = useMutation((newAppointment: Appointment) => AppointmentsController.addAppointment(newAppointment))
  return (
    <>
    <PageHeader title='Add Appointment' items={['Appointments','Add Appointment']} />
    <div className="container">
        <div className="row">
            <AppointmentForm mutation={mutation} />
        </div>
    </div>
    
    </>
  )
}
