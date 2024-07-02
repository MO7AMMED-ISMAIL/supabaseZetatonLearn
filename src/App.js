import {Route , RouterProvider , createBrowserRouter , createRoutesFromElements} from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import ListStudent from './component/ListStudent';
import EditStudent from './component/EditStudent';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/students' element={<ListStudent/>}/>
      <Route path='/students/:id' element={<EditStudent/>}/>
    </>
  )
);



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
