import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Projects from './components/projects/Projects.tsx';
import Settings from './components/settings/Settings.tsx';
import Home from './components/home/Home.tsx';
import Project from './components/project/Project.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/settings",
        element: <Settings />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/project/:projectName",
        element: <Project />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
