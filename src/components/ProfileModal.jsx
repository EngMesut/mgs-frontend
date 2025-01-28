import React from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const ProfileModal = ({ user, onClose, onEdit }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Profile Information
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center space-x-4">
            <img
              src={user.profilePicture || "/placeholder.svg"}
              alt={user.fullName}
              className="h-16 w-16 rounded-full"
            />
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {user.fullName}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {user.username}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Address
              </p>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">
                {user.address}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Gender
              </p>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">
                {user.gender}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Nationality
              </p>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">
                {user.nationality}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Phone
              </p>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">
                {user.phone}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Email
              </p>
              <p className="mt-1 text-sm text-gray-900 dark:text-white">
                {user.email}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-700">
          <Button
            onClick={onEdit}
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
