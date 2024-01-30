import { BsArrowsFullscreen } from 'react-icons/bs';
import { IoIosNotifications } from 'react-icons/io';

function Header() {
  return (
    <ul className="header fixed top-0 z-10 mb-16 flex w-full flex-row items-center   justify-between gap-10 pb-1 pl-10 pr-10 pt-1 text-white shadow-lg">
      <li className="flex flex-row items-center justify-start gap-2">
        <span className="loader"></span>{' '}
        <span className="font-semibold">TASKS BOARD</span>
      </li>
      <li className=" flex flex-row items-center justify-start gap-3">
        <button className="Notifications relative">
          <IoIosNotifications
            title="Notifications"
            className="   cursor-pointer text-2xl"
          />
        </button>
        <button
          onClick={() => {
            if (!document.fullscreenElement) {
              document.documentElement.requestFullscreen();
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              }
            }
          }}
        >
          <BsArrowsFullscreen title="Full screen" className="cursor-pointer" />
        </button>
      </li>
    </ul>
  );
}

export default Header;
