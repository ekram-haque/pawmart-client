import { Link, NavLink } from "react-router";

const baseClass =
  "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors " +
  "is-drawer-close:tooltip is-drawer-close:tooltip-right";

const getClass = (isActive) =>
  `${baseClass} ${
    isActive
      ? "bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-white"
      : "hover:bg-gray-100 dark:hover:bg-gray-800"
  }`;

const iconClass = "my-1.5 inline-block size-4";

const Sidebar = () => {
  return (
    <aside className="h-full ">
      <ul className="menu w-full grow space-y-1">
        {/* Homepage */}
        <li>
          <Link
            to="/"
            data-tip="Homepage"
            className={`${baseClass} hover:bg-gray-100 dark:hover:bg-gray-800`}
          >
            {/* Home SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={iconClass}
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            <span className="is-drawer-close:hidden">Homepage</span>
          </Link>
        </li>

        {/* My Orders */}
        <li>
          <NavLink
            to="/dashboard/my-orders"
            data-tip="My Orders"
            className={({ isActive }) => getClass(isActive)}
          >
            {/* Receipt SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={iconClass}
            >
              <path d="M6 2h12v20l-3-2-3 2-3-2-3 2z" />
              <path d="M14 8h-4M14 12h-4M14 16h-4" />
            </svg>
            <span className="is-drawer-close:hidden">My Orders</span>
          </NavLink>
        </li>

        {/* Add Listing */}
        <li>
          <NavLink
            to="/dashboard/add-listing"
            data-tip="Add Listing"
            className={({ isActive }) => getClass(isActive)}
          >
            {/* Plus SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={iconClass}
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            <span className="is-drawer-close:hidden">Add Listing</span>
          </NavLink>
        </li>

        {/* My Listings */}
        <li>
          <NavLink
            to="/dashboard/my-listings"
            data-tip="My Listings"
            className={({ isActive }) => getClass(isActive)}
          >
            {/* Box SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={iconClass}
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <path d="M3.3 7L12 12l8.7-5" />
              <path d="M12 22V12" />
            </svg>
            <span className="is-drawer-close:hidden">My Listings</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
