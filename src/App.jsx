import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home'
import Country from './pages/Country'
import Contact from './pages/Contact'
import About from './pages/About'
import './App.css';
import AppLayout from './components/AppLayout';
import ErrorPage from './pages/ErrorPage';
import { CountryDetails } from './pages/CountryDetails';
const router=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/Country",
        element:<Country />
      },
      {
        path:"country/:id",
        element:<CountryDetails />
      },
      {
        path:"/About",
        element:<About />
      },
      {
        path:"/Contact",
        element:<Contact />
      }
    ]
  },
])
  
function App() {
return<>
<RouterProvider router={router} /></>
}
export default App;