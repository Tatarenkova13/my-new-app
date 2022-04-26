import React, { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

function App() {

  const [isAuth, setIsAuth] = useState(false);
  
  useEffect(() => {
      if (localStorage.getItem('auth')) {
          setIsAuth(true)
      }
  }, [])

  return (
    <div className="App">
      <AuthContext.Provider value={{
            isAuth,
            setIsAuth: setIsAuth,
        }}>
                <AppRouter />
            
        </AuthContext.Provider>
    </div>
  );
}

export default App;
