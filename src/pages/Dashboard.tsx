import React from 'react'
import AppointmentList from '../components/dashboard/AppointmentList'
import DoctorsList from '../components/dashboard/DoctorsList'
import InfoCard from '../components/dashboard/InfoCard'
import PageHeader from '../components/PageHeader'

const quickStats = [
    {
        color: 'red',
        title: 'Patients',
        value: 300
    },
    {
        color: 'green',
        title: 'Appointments',
        value: 1500
    },
    {
        color: 'yellow',
        title: 'Total Revenue',
        value: 7000
    },
]

const appointments = [
    {
        patientName: 'Jon Snow',
        doctor: 'Dr. Dre',
        checkUp: 'Dental',
        date: '12-10-2018',
        time: '12:10PM',
        status: 'Completed'
    },
    {
        patientName: 'Rob Stark',
        doctor: 'Dr. Mike',
        checkUp: 'Ortho',
        date: '12-10-2018',
        time: '1:10PM',
        status: 'Pending'
    },
    {
        patientName: 'Ned Stark',
        doctor: 'Dr. Greg',
        checkUp: 'Ortho',
        date: '12-10-2018',
        time: '1:30PM',
        status: 'Cancelled'
    },
    {
        patientName: 'Theon GreyJoy',
        doctor: 'Dr. Drew',
        checkUp: 'Dental',
        date: '12-10-2018',
        time: '2:10PM',
        status: 'Completed'
    },
    {
        patientName: 'Cercei Lannister',
        doctor: 'Dr. Joy',
        checkUp: 'Ortho',
        date: '12-10-2018',
        time: '3:10PM',
        status: 'Pending'
    },
    {
        patientName: 'Jamie Lannister',
        doctor: 'Dr. Fate',
        checkUp: 'Ortho',
        date: '12-10-2018',
        time: '3:40PM',
        status: 'Cancelled'
    },
]

const doctors = [
    {
        doctorName: 'Dr. Dre',
        specialty: 'Music',
        availability: 'On Leave'
    },
    {
        doctorName: 'Dr. James',
        specialty: 'Chiro',
        availability: 'Available'
    },
    {
        doctorName: 'Dr. Joy',
        specialty: 'Dental',
        availability: 'Not Available'
    },
    {
        doctorName: 'Dr. Fate',
        specialty: 'Ortho',
        availability: 'Available'
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