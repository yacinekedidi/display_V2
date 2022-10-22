import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/user-context';
import router from './routes/router';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
export default App;
