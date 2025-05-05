import React, { useContext } from "react";
import imageNew from "../assets/profile.jpg";
import { CiLogout } from "react-icons/ci";
import { RiContactsBookUploadLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contacts/AuthProvider";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  console.log("USER:", user);
  return (
    <div>
      <div className='w-64 h-screen bg-gray-800 text-white  left-0 top-0 flex flex-col'>
        {/* Profil bölümü */}
        <div className='p-5 flex flex-col items-center border-b border-gray-700'>
          <div className='w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center mb-4'>
            <img className='rounded-full' src={user?.photoURL} alt='Profile' />
          </div>
          <div className='text-center'>
            <h3 className='text-lg font-medium'>{user?.displayName}</h3>
            <p className=' mt-3 text-gray-400 text-sm'>{user?.email}</p>
          </div>
        </div>
        <nav className='flex-1 p-4'>
          <ul className='space-y-2'>
            <li>
              <NavLink
                to='/admin/dashboard'
                end
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-700"
                  }`
                }
              >
                <RxDashboard className='w-5 h-5 mr-3' />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-700"
                  }`
                }
                to='/admin/dashboard/upload'
              >
                <RiContactsBookUploadLine className='w-5 h-5 mr-3' />
                <span>Upload Book</span>
              </NavLink>
            </li>

            <li>
              {/* <NavLink
                className={({}) =>
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-700"
                  }`
                }
                to=''
              >
                <HiOutlineUsers className='w-5 h-5 mr-3' />
                <span>Kullanıcılar</span>
              </NavLink> */}
            </li>
            <li>
              <NavLink
                to='/admin/dashboard/manage'
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-700"
                  }`
                }
              >
                <MdOutlineLibraryBooks className='w-5 h-5 mr-3' />
                <span>Kitapları Yönet</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/login'
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-700"
                  }`
                }
              >
                <FiLogIn className='w-5 h-5 mr-3' />
                <span>Sign in</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Alt kısım - Logout */}
        <div className='p-4 border-t border-gray-700'>
          <a
            href='/logout'
            className='w-full flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors'
            aria-label='Log out'
          >
            <CiLogout size={20} />
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
