import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 flex items-center justify-center">
        <h1 className="text-2xl font-bold">Spooky</h1>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }: { isActive: boolean }) => 
            isActive 
            ? 'bg-gray-900 text-white block px-4 py-2 rounded-md' 
            : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 rounded-md'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/emission-summary"
          className={({ isActive }: { isActive: boolean }) => 
            isActive 
            ? 'bg-gray-900 text-white block px-4 py-2 rounded-md' 
            : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 rounded-md'
          }
        >
          Emission Summary
        </NavLink>
        <NavLink
          to="/trading-activity"
          className={({ isActive }: { isActive: boolean }) => 
            isActive 
            ? 'bg-gray-900 text-white block px-4 py-2 rounded-md' 
            : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 rounded-md'
          }
        >
          Trading Activity
        </NavLink>
        <NavLink
          to="/compliance-status"
          className={({ isActive }: { isActive: boolean }) => 
            isActive 
            ? 'bg-gray-900 text-white block px-4 py-2 rounded-md' 
            : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 rounded-md'
          }
        >
          Compliance Status
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }: { isActive: boolean }) => 
            isActive 
            ? 'bg-gray-900 text-white block px-4 py-2 rounded-md' 
            : 'text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 rounded-md'
          }
        >
          Settings
        </NavLink>
      </nav>
      <div className="p-4">
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <span>Amanda</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A8.969 8.969 0 0112 15c2.065 0 4.008.68 5.121 1.804m-1.414-1.414A8.969 8.969 0 0012 13c-2.065 0-4.008.68-5.121 1.804M12 7a4 4 0 100-8 4 4 0 000 8zm0 6a8.978 8.978 0 00-6.72 3.29m13.44 0A8.978 8.978 0 0012 13z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
