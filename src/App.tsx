import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname === '/' ? navigate('/home') : undefined;
  }, [])

  return (
    <>
      <Header />
      <div className="my-5 px-5 grow flex flex-col">
        <Outlet />
      </div>
    </>
  )
}

export default App
