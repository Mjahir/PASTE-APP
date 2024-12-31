import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './componets/Navbar'
import Home from './componets/Home'
import Paste from './componets/Paste'
import ViewPaste from './componets/ViewPaste'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: 
     (   <div>
          <Navbar />
         < Home />
      </div>),
    },

    {
      path: '/pastes',
      element: 
     (   <div>
          <Navbar />
          <Paste />
      </div>),
    },

    {
      path: '/paste/:id',
      element: 
   (     <div>
          <Navbar />
          <ViewPaste />
          
      </div>),
    },

  ]
)

function App() {


  
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
