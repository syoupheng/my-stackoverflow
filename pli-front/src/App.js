import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import useInitApp from './hooks/useInitApp';
import { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';

function App() {
  useInitApp();

  const auth = useContext(AuthContext);
  if (auth.userIsLoading) {
    return (
      <p style={{"backgroundColor": "white"}}>Loading...</p>
    )
  }

  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
