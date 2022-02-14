import { Navbar } from '../components/ui/Navbar';
import { Routes, Route } from 'react-router-dom';
import HolaMundo from '../components/HolaMundo';


export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />

          <div className="container mt-2">
              <Routes>
                  <Route path="/HolaMundo" element={<HolaMundo />}/>
              </Routes>
            </div> 


        </>
    )
}
