import React from 'react';
import Footer from './components/Footer';
import Menu from './components/Menu';
import PageHeader from './components/PageHeader';
import Preloader from './components/Preloader';
import TopNav from './components/TopNav';
import Dashboard from './pages/Dashboard';

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  },[])

  if (loading) return <Preloader />
  
  return (
    <div className="wrapper">
      <div id="content">
        <TopNav />
        <Menu />
        <PageHeader />
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
