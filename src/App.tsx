import React from 'react';
import Preloader from './components/Preloader';
import AuthRoutes from './routes/AuthRoutes';
import MainRoutes from './routes/MainRoutes';

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, [])

  if (loading) return <Preloader />

  return (
   <MainRoutes />
  // <AuthRoutes />
  );
}

export default App;
