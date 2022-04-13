import React from 'react';
import Footer from './components/Footer';
import Menu from './components/Menu';
import PageHeader from './components/PageHeader';
import Preloader from './components/Preloader';
import TopNav from './components/TopNav';
import Dashboard from './pages/Dashboard';
import AllDoctors from './pages/doctors/AllDoctors';
import DoctorDetails from './pages/doctors/DoctorDetails';
import EditDoctor from './pages/doctors/EditDoctor';
import NewDoctor from './pages/doctors/NewDoctor';
import AllPatients from './pages/patients/AllPatients';
import EditPatient from './pages/patients/EditPatient';
import NewPatient from './pages/patients/NewPatient';
import PatientDetails from './pages/patients/PatientDetails';
import { Route, Routes} from 'react-router-dom'
import RouteView from './pages/RouteView';

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, [])

  if (loading) return <Preloader />

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
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
