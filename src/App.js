import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from './Pages/Admin/Admin';
import Blog from './Pages/Blog/Blog';
import Body from './Pages/Body/Body';
import Donation from './Pages/Donation/Donation';
import Events from './Pages/Events/Events';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Pages/Shared/Header/Header';
import Loading from './Pages/Loading/Loading';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/donation' element={
          <RequireAuth>
            <Donation />
          </RequireAuth>
        } />
        <Route path='/events' element={
          <RequireAuth>
            <Events />
          </RequireAuth>
        } />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register/:id' element={
          <RequireAuth>
            <Register />
          </RequireAuth>
        } />
        <Route path='/admin' element={
          <RequireAuth>
            <Admin />
          </RequireAuth>
        } />
        <Route path='/loading' element={<Loading />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

/* 
https: //i.ibb.co/GVRMsTd/bird-House.png
https: //i.ibb.co/F67L0Mq/clearn-Park.png
https: //i.ibb.co/CnpDH4d/drive-Safety.png
https: //i.ibb.co/Fggb7kn/extra-Volunteer.png
https: //i.ibb.co/s69v9hk/ITHelp.png
https: //i.ibb.co/KsH12YF/library-Books.png
https: //i.ibb.co/vhz7SwH/music-Lessons.png
https: //i.ibb.co/k101pmk/school-Suffiles.png
https: //i.ibb.co/7SKzPNY/study-Group.png
https: //i.ibb.co/Nrdxw28/stuffed-Animals.png
https: //i.ibb.co/QcjmsRK/vote-Register.png
https: //i.ibb.co/dsv2dNw/animal-Shelter.png
https: //i.ibb.co/Dr5BGhy/babySit.png
*/
