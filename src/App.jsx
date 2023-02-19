import { SnackbarProvider } from 'notistack';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/user-context';
import router from './routes/router';
import LoadingSpinner from './Utils/LoadingSpinner';
import ModalOverlay from './Utils/ModalOverlay';

function App() {
  return (
    <Suspense
      fallback={
        <ModalOverlay>
          <LoadingSpinner />
        </ModalOverlay>
      }
    >
      <AuthProvider>
        <SnackbarProvider maxSnack={3}>
          <RouterProvider router={router} />
        </SnackbarProvider>
      </AuthProvider>
    </Suspense>
  );
}
export default App;
