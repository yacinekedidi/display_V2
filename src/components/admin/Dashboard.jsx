import {
  faArrowLeft,
  faBars,
  faBuilding,
  faFlag,
  faHome,
  faUser,
  faWaveSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@mui/material';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.svg';
const Dashboard = () => {
  const [drawerWidth, setDrawWidth] = useState(15);
  return (
    <div className="text-md block h-full w-full font-cairo text-white">
      <div className="flex h-full w-full flex-col">
        <div className="flex min-h-[10%] w-full items-center bg-gray-900">
          {drawerWidth < 15 ? (
            <FontAwesomeIcon
              className="flex w-[5%] justify-center  hover:cursor-pointer hover:text-orange-600"
              onClick={() => setDrawWidth(15)}
              icon={faBars}
              fontSize="large"
            />
          ) : null}
          <div className="flex  items-center gap-1 px-1">
            <div className="m-auto flex items-center gap-2">
              <Link className="hover:rotate-180 hover:animate-spin" to="/">
                <img className="h-6 w-6 sm:h-8 sm:w-8" src={logo} alt="logo" />
              </Link>
              <span
                className=" m-auto cursor-default
          fill-transparent stroke-white stroke-2 text-center font-cairo text-xs 
          uppercase tracking-widest text-orange-300 shadow-amber-300 drop-shadow-md "
              >
                Display
              </span>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full">
          <div
            className="h-full p-2 shadow-sm shadow-black"
            style={{ width: `${drawerWidth}%` }}
          >
            {drawerWidth === 15 ? (
              <button
                className="hover:pointer-cursor flex w-full justify-end hover:text-orange-600"
                onClick={() => setDrawWidth(5)}
              >
                <FontAwesomeIcon icon={faArrowLeft} size="lg" />
              </button>
            ) : null}
            <ul className="flex h-full w-full flex-col items-center gap-y-16 py-8 font-sans text-2xl capitalize">
              {drawerWidth === 15 ? (
                <>
                  <li className="flex w-full items-center hover:bg-gray-800">
                    <FontAwesomeIcon
                      className="flex-1"
                      size="xs"
                      icon={faHome}
                    />
                    <Link to="home" className="flex-1">
                      home
                    </Link>
                  </li>
                  <li className="flex w-full items-center hover:bg-gray-800">
                    <FontAwesomeIcon
                      className="flex-1"
                      size="xs"
                      icon={faWaveSquare}
                    />
                    <Link to="logs" className="flex-1">
                      logs
                    </Link>
                  </li>
                  <li className="flex w-full items-center hover:bg-gray-800">
                    <FontAwesomeIcon
                      className="flex-1"
                      size="xs"
                      icon={faUser}
                    />
                    <Link to="users" className="flex-1">
                      users
                    </Link>
                  </li>
                  <li className="flex w-full items-center hover:bg-gray-800">
                    <FontAwesomeIcon
                      className="flex-1"
                      size="xs"
                      icon={faBuilding}
                    />
                    <Link to="sellers" className="flex-1">
                      sellers
                    </Link>
                  </li>
                  <li className="flex w-full items-center hover:bg-gray-800">
                    <FontAwesomeIcon
                      className="flex-1"
                      size="xs"
                      icon={faFlag}
                    />
                    <Link to="flags" className="flex-1">
                      flags
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <Tooltip title="home" placement="right-end" arrow>
                    <Link
                      to="home"
                      className="hover:pointer-cursor w-full text-center hover:bg-gray-800"
                    >
                      <FontAwesomeIcon size="xs" icon={faHome} />
                    </Link>
                  </Tooltip>
                  <Tooltip title="activities" placement="right-end" arrow>
                    <Link
                      to="logs"
                      className="hover:pointer-cursor w-full text-center hover:bg-gray-800"
                    >
                      <FontAwesomeIcon size="xs" icon={faWaveSquare} />
                    </Link>
                  </Tooltip>
                  <Tooltip title="users" placement="right-end" arrow>
                    <Link
                      to="users"
                      className="hover:pointer-cursor w-full text-center hover:bg-gray-800"
                    >
                      <FontAwesomeIcon size="xs" icon={faUser} />
                    </Link>
                  </Tooltip>

                  <Tooltip title="sellers" placement="right-end" arrow>
                    <Link
                      to="sellers"
                      className="hover:pointer-cursor w-full text-center hover:bg-gray-800"
                    >
                      <FontAwesomeIcon size="xs" icon={faBuilding} />
                    </Link>
                  </Tooltip>

                  <Tooltip title="flags" placement="right-end" arrow>
                    <Link
                      to="flags"
                      className="hover:pointer-cursor w-full text-center hover:bg-gray-800"
                    >
                      <FontAwesomeIcon size="xs" icon={faFlag} />
                    </Link>
                  </Tooltip>
                </>
              )}
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
