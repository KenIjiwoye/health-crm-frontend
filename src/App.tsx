import React from 'react';
import Preloader from './components/Preloader';
import TopNav from './components/TopNav';

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
      </div>
    </div>
  );
}

export default App;
