import { SnackbarProvider } from 'notistack';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/user-context';
import router from './routes/router';
import LoadingSpinner from './Utils/LoadingSpinner';
import ModalOverlay from './Utils/ModalOverlay';

function App() {
  return (
    <AuthProvider>
      <SnackbarProvider maxSnack={3}>
        <Suspense
          fallback={
            <ModalOverlay>
              <LoadingSpinner />
            </ModalOverlay>
          }
        >
          <RouterProvider router={router} />
        </Suspense>
      </SnackbarProvider>
    </AuthProvider>
  );
}
export default App;
