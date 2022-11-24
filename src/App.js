import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1440px] m-5'>

      <RouterProvider router={router}>

      </RouterProvider>


    </div>
  );
}

export default App;
