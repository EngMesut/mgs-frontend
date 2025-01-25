import React from "react";
import { Search, Maximize2, Menu, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useTheme } from "../contexts/ThemeContext";

function Header({ onMenuClick, onSearch, searchQuery }) {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-white dark:bg-gray-800 dark:border-gray-700 px-4 lg:px-6">
      <div className="flex items-center gap-4">
        
        <h1 className="text-base font-semibold sm:text-xl text-gray-900 dark:text-white">
          WASAARADA MAALIYADA JFS.
        </h1>
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
        {/* <Button variant="ghost" size="icon" className="hidden sm:flex">
          <Maximize2 className="h-5 w-5" />
        </Button> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <img
                src="/img/PROFILE PIC.ico"
                alt="Admin"
                className="h-10 w-10 rounded-full"
              />
              <span className="hidden sm:inline text-gray-600 dark:text-gray-300">
                MESUT
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Header;
