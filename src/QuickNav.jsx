import { useState } from 'react';
import { FaThList } from 'react-icons/fa';
import { FaArchive } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { FaTag } from 'react-icons/fa';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';

function QuickNav({
  showArchived,
  setShowArchived,
  showUsers,
  setShowUsers,
  showDeleted,
  setShowDeleted,
  setShowTags,
  setShowFinishedTasks,
}) {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`my-navbar-collapse fixed right-1 top-1/3 flex  flex-col gap-3 overflow-hidden rounded-full bg-teal-400  text-2xl ${!show ? 'quickNav' : 'show'} `}
    >
      <button className="text-white" onClick={() => setShow((show) => !show)}>
        {show ? <IoClose /> : <FaThList />}
      </button>
      <button onClick={() => setShowFinishedTasks((s) => !s)}>
        <IoCheckmarkDoneCircle title="Finished tasks" className="text-white" />
      </button>
      <button title="Archive box" onClick={() => setShowArchived((s) => !s)}>
        <FaArchive className="text-white" />
      </button>
      <button onClick={() => setShowUsers((s) => !s)}>
        <FaUsers title="Users" className="text-white" />
      </button>
      <button>
        <FaTag
          onClick={() => setShowTags((t) => !t)}
          title="Tags"
          className="text-white"
        />
      </button>
      <button onClick={() => setShowDeleted((s) => !s)}>
        <FaTrash title="Deleted tasks" className="text-white" />
      </button>
    </div>
  );
}

export default QuickNav;
