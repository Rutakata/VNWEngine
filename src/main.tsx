import './index.css';
import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import Settings from './components/settings/Settings.tsx';
import Home from './components/home/Home.tsx';
import ProjectContainer from './components/project/ProjectContainer.tsx';
import Projects from './components/projects/Projects.tsx';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { store } from './store/store';
import { Provider } from 'react-redux';



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
        path: "/project/:projectFolder",
        element: <ProjectContainer />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
