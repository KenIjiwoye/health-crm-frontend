import React from 'react'
import AppointmentList from '../components/dashboard/AppointmentList'
import DoctorsList from '../components/dashboard/DoctorsList'
import InfoCard from '../components/dashboard/InfoCard'
import PageHeader from '../components/PageHeader'
import { appointments } from '../interfaces/Appointments'
import { doctors } from '../interfaces/Doctors'
import { patients } from '../interfaces/Patient'

const quickStats = [
    {
        color: 'red',
        title: 'Patients',
        value: patients.length
    },
    {
        color: 'green',
        title: 'Appointments',
        value: appointments.length
    },
    {
        color: 'yellow',
        title: 'Total Revenue',
        value: 7000
    },
]

export default function Dashboard() {
    return (
        <>
            <PageHeader title={'Quick Statistics'} items={['Dashboard', 'Test']} />
            <div className="container home">
                <div className="row">
                    {quickStats.map((q, i) => <InfoCard key={i} color={q.color} title={q.title} value={q.value} />)}
                </div>
                <div className="row">
                    <AppointmentList appointments={appointments} />
                    <DoctorsList doctors={doctors} />
                </div>
            </div>
        </>
    )
}
