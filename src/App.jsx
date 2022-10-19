import { AuthProvider } from './contexts/user-context';
import AppRoutes from './routes/routes';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
export default App;
