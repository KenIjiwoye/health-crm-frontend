import React from 'react'
import PageHeader from '../../components/PageHeader'
import { useLocation } from 'react-router-dom';
import { Appointment } from '../../interfaces/Appointments';
import AppointmentDetailsCard from '../../components/appointments/AppointmentDetailsCard';

type LocationState = {
    appointment: Appointment
}

export default function AppointmentDetails() {
    let location = useLocation();
    const { appointment } = location.state as LocationState;
    console.log('the appt info', appointment)
    return (
        <>
            <PageHeader title='Appointment Details' items={['Appointments', 'Appointment Details']} />
            <div className="container">
                <div className="row">
                    <AppointmentDetailsCard appointment={appointment} />
                </div>
            </div>
        </>
    )
}
