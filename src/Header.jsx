import { FaChalkboard } from 'react-icons/fa';
function Header() {
  return (
    <ul className="header fixed top-0 z-10 mb-16 flex w-full flex-row items-center   justify-between gap-10 pb-1 pl-10 pr-10 pt-1 text-white shadow-lg">
      <li>
        <span className="loader"></span>
      </li>
      <li>
        <h4 className=" text-xl font-semibold  text-white">
          <FaChalkboard className="inline-block text-2xl" /> &nbsp;TASKS BOARD
        </h4>
      </li>
    </ul>
  );
}

export default Header;
