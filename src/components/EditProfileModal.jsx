import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const EditProfileModal = ({ user, onClose, onSave }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedUser);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-[500px] h-[550px] p-6">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Edit Profile
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-3 mt-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Full Name
              </label>
              <Input
                id="fullName"
                name="fullName"
                value={editedUser.fullName}
                onChange={handleChange}
                required
                className="h-8 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Address
              </label>
              <Input
                id="address"
                name="address"
                value={editedUser.address}
                onChange={handleChange}
                required
                className="h-8 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Gender
              </label>
              <Input
                id="gender"
                name="gender"
                value={editedUser.gender}
                onChange={handleChange}
                required
                className="h-8 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="nationality"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Nationality
              </label>
              <Input
                id="nationality"
                name="nationality"
                value={editedUser.nationality}
                onChange={handleChange}
                required
                className="h-8 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                value={editedUser.phone}
                onChange={handleChange}
                required
                className="h-8 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={editedUser.email}
                onChange={handleChange}
                required
                className="h-8 text-sm"
              />
            </div>
          </div>
          <div className="flex justify-end mt-6 border-t pt-4">
            <Button
              type="button"
              onClick={onClose}
              className="mr-2 bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
