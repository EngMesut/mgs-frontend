import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function AppContent() {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const { user, logout } = useAuth();

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        {user && (
          <>
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setSidebarOpen(false)}
              searchQuery={searchQuery}
            />
            <div className="flex-1 flex flex-col min-w-0">
              <Header
                onMenuClick={() => setSidebarOpen(true)}
                onSearch={setSearchQuery}
                searchQuery={searchQuery}
                onLogout={logout}
              />
              <main className="flex-1 overflow-x-hidden p-4">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </main>
            </div>
          </>
        )}
        {!user && (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
