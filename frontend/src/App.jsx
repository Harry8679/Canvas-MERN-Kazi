import { Root } from 'postcss';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  }
]);

const App = () => {

  return <RouterProvider router={router} />
}

export default App
