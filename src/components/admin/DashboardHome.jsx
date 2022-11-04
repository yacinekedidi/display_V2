import {
  faBan,
  faBuilding,
  faFlag,
  faMessage,
  faSignal,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DashboardHome = () => {
  return (
    <div className="w-full p-4">
      <div className="flex justify-center gap-8 rounded-lg bg-gray-900 p-8 font-cairo text-xl shadow-sm shadow-black">
        <div className="space-y-4 self-center rounded-md bg-black  p-4 shadow-sm shadow-black">
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faUser} />
            <p>
              <span>31</span> users
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faSignal} />
            <p>
              <span>5</span> users
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faBan} />
            <p>
              <span>2</span> bans
            </p>
          </div>
        </div>

        <div className="space-y-4 self-center rounded-md bg-black  p-4 shadow-sm shadow-black">
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faBuilding} />
            <p>
              <span>30</span> sellers
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faSignal} />
            <p>
              <span>5</span> online
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faBan} />
            <p>
              <span>10</span> bans
            </p>
          </div>
        </div>

        <div className="space-y-4 self-center rounded-md bg-black  p-4 shadow-sm shadow-black">
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faMessage} />
            <p>
              <span>50</span> channels
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <FontAwesomeIcon icon={faFlag} />
            <p>
              <span>5</span> flagged messages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
