import { AuthProvider } from './contexts/user-context';
import AppRoutes from './routes/routes';

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}
export default App;
