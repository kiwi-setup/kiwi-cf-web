// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import AppRoutes from './routes/Routes';
import Footer from './components/Footer/Footer.jsx';
import { useEffect } from 'react';
import { useAuthDetails } from '@redux/auth/auth.hook';

function App() {
  const { getUserStatus } = useAuthDetails();
  useEffect(() => {
    // This is where you can initialize any global state or perform side effects
    getUserStatus();
  }, []);

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
      {/* <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
