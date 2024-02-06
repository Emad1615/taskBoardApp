import { BsArrowsFullscreen } from 'react-icons/bs';
import { IoIosNotifications } from 'react-icons/io';
import SearchQuery from './SearchQuery';
import { useMediaQuery } from 'react-responsive';

function Header({ query, setQuery }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    // <ul className="header fixed top-0 z-10 mb-16 flex w-full flex-row    items-center justify-between gap-10 pb-1 pl-10 pr-10 pt-1 text-white shadow-lg">
    <>
      {isTabletOrMobile ? (
        <div className="header fixed top-0 z-10 mb-16 w-full pb-2 pl-10 pr-10 pt-2 text-white shadow-lg">
          <SearchQuery query={query} setQuery={setQuery} width="w-full" />
        </div>
      ) : (
        <ul className="header fixed top-0 z-10 mb-16   flex  w-full flex-row flex-wrap items-center justify-between gap-3 pb-1 pl-10  pr-10 pt-1 text-white shadow-lg">
          <li className="flex flex-row items-center justify-start gap-2">
            <span className="loader"></span>{' '}
            <span className="font-semibold">TASKS BOARD</span>
          </li>
          <li className="flex-grow text-center">
            <SearchQuery query={query} setQuery={setQuery} />
          </li>
          <li className=" flex  flex-row  justify-end gap-3">
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
              <BsArrowsFullscreen
                title="Full screen"
                className="cursor-pointer"
              />
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default Header;
