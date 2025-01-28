import React, { useState } from "react";
import { Search, Moon, Sun, LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import ProfileModal from "./ProfileModal";
import EditProfileModal from "./EditProfileModal";

function Header({ onSearch, searchQuery }) {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { user, logout, updateUser } = useAuth();
  const navigate = useNavigate();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleEditProfile = () => {
    setShowProfileModal(false);
    setShowEditProfileModal(true);
  };

  const handleSaveProfile = (updatedUser) => {
    updateUser(updatedUser);
    setShowEditProfileModal(false);
    setShowProfileModal(true);
  };

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-white dark:bg-gray-800 dark:border-gray-700 px-4 lg:px-6">
      <div className="flex items-center gap-4">
        {/* <h1 className="text-base font-semibold sm:text-xl text-gray-900 dark:text-white">
          WASAARADA MAALIYADA JFS.
        </h1> */}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <Input
            type="search"
            placeholder="Search menu items..."
            className="w-48 h-8 pl-8"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <img
                src={user?.profilePicture || "/img/PROFILE PIC.ico"}
                alt="User"
                className="h-10 w-10 rounded-full"
              />
              <span className="hidden sm:inline text-gray-600 dark:text-gray-300">
                {user?.fullName || "User"}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setShowProfileModal(true)}>
              <User className="mr-2 h-4 w-4" />
              Profile Info
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {showProfileModal && (
        <ProfileModal
          user={user}
          onClose={() => setShowProfileModal(false)}
          onEdit={handleEditProfile}
        />
      )}
      {showEditProfileModal && (
        <EditProfileModal
          user={user}
          onClose={() => setShowEditProfileModal(false)}
          onSave={handleSaveProfile}
        />
      )}
    </header>
  );
}

export default Header;
