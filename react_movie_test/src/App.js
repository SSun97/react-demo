import React, { useState } from 'react';
import Authentication from './routes/Authentication';
import DashBoard from './routes/DashBoard';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };
  const handleLogOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
  }
  return (
    <div className={App}>
      {isLoggedIn ? <DashBoard onLogOut={handleLogOut}/> : <Authentication onSubmit={handleLogin}/>}
    </div>
  );
}

export default App;
