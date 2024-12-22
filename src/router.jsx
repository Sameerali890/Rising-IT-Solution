import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import Services from './pages/Services.jsx';
import Error from './pages/Error.jsx';
import About from './pages/About.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ReviewSection from './pages/ReviewSection.jsx';
 export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog",
    element: <>Coming Soon</>,
  },
  {
    path: "/aboutus",
    element: <About />,
  },
  {
    path: "/review",
    element: <ReviewSection />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/services/:service",
    element: <Services />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

