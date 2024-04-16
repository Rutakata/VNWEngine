import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Reload');
    location.pathname === '/' ? navigate('/home') : undefined;
  }, [])

  return (
    <>
      <Header />
      <main className="mt-5 px-10">
        <Outlet />
      </main>
    </>
  )
}

export default App
