import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import Services from './pages/Services.jsx';
import Tool from './pages/Tool.jsx';
import Error from './pages/Error.jsx';
import About from './pages/About.jsx';
 export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog",
    element: <>blog</>,
  },
  {
    path: "/aboutus",
    element: <About />,
  },
  {
    path: "/services/:service",
    element: <Services />,
  },
  {
    path: "/Tool",
    element: <Tool />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

