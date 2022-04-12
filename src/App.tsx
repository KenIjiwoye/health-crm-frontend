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

        {/* <Dashboard /> */}
        {/* <AllPatients /> */}
        {/* <PatientDetails /> */}
        {/* <NewPatient /> */}
        {/* <EditPatient /> */}
        {/* <AllDoctors /> */}
        {/* <DoctorDetails /> */}
        {/* <NewDoctor /> */}
        <EditDoctor />
        <Footer />
      </div>
    </div>
  );
}

export default App;
