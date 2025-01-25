import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";
import Header from "./components/Header";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

function AppContent() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex min-h-screen ${isDarkMode ? "dark" : ""}`}>
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 z-30 h-full w-64
        transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <Sidebar
          onClose={() => setSidebarOpen(false)}
          searchQuery={searchQuery}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-100 dark:bg-gray-900">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          onSearch={setSearchQuery}
          searchQuery={searchQuery}
        />
        <main className="flex-1 overflow-x-hidden p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Add other routes here */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
