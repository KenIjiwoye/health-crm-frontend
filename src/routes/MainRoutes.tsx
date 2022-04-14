import React from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import TopNav from '../components/TopNav'
import AddAppointment from '../pages/appointments/AddAppointment'
import AllAppointments from '../pages/appointments/AllAppointments'
import AppointmentDetails from '../pages/appointments/AppointmentDetails'
import EditAppointment from '../pages/appointments/EditAppointment'
import Dashboard from '../pages/Dashboard'
import AllDoctors from '../pages/doctors/AllDoctors'
import DoctorDetails from '../pages/doctors/DoctorDetails'
import EditDoctor from '../pages/doctors/EditDoctor'
import NewDoctor from '../pages/doctors/NewDoctor'
import AllPatients from '../pages/patients/AllPatients'
import EditPatient from '../pages/patients/EditPatient'
import NewPatient from '../pages/patients/NewPatient'
import PatientDetails from '../pages/patients/PatientDetails'
import AddPayment from '../pages/payments/AddPayment'
import AllPayments from '../pages/payments/AllPayments'
import PaymentInvoice from '../pages/payments/PaymentInvoice'
import RouteView from '../pages/RouteView'
import {Routes, Route} from 'react-router-dom'
import NotFound from '../pages/NotFound'

export default function MainRoutes() {
  return (
    <div className="wrapper">
    <div id="content">
      <TopNav />
      <Menu />
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='patients' element={<RouteView />} >
          <Route index element={<AllPatients />} />
          <Route path='new' element={<NewPatient />} />
          <Route path=':patientId' element={<PatientDetails />} />
          <Route path=':patientId/edit' element={<EditPatient />} />
        </Route>
        <Route path='doctors' element={<RouteView />} >
          <Route index element={<AllDoctors />} />
          <Route path='new' element={<NewDoctor />} />
          <Route path=':doctorId' element={<DoctorDetails />} />
          <Route path=':doctorId/edit' element={<EditDoctor />} />
        </Route>
        <Route path='appointments' element={<RouteView />} >
          <Route index element={<AllAppointments />} />
          <Route path='new' element={<AddAppointment />} />
          <Route path=':appointmentId' element={<AppointmentDetails />} />
          <Route path=':appointmentId/edit' element={<EditAppointment />} />
        </Route>
        <Route path='payments' element={<RouteView />} >
          <Route index element={<AllPayments />} />
          <Route path='new' element={<AddPayment />} />
          <Route path=':paymentId' element={<PaymentInvoice />} />
          {/* <Route path=':appointmentId/edit' element={<EditAppointment />} /> */}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </div>
  )
}
