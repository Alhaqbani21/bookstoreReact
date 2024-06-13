import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Books from '../pages/Books';
import BookDetails from '../pages/BookDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/books',
    element: <Books />,
  },
  {
    path: '/books/:id',
    element: <BookDetails />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
