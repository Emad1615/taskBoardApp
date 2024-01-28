import { TfiPin } from 'react-icons/tfi';
import { LiaMarkerSolid } from 'react-icons/lia';
import { memo, useState } from 'react';
import CreateTask from './CreateTask';
import TaskItem from './TaskItem';
import ArchivedTasks from './ArchivedTasks';
import UsersList from './UsersList';
import DeletedTasks from './DeletedTasks';
import TagsList from './TagsList';

function Board({
  tasks,
  setTasks,
  archivedTasks,
  setArchivedTasks,
  selectedID,
  setSelectedID,
  showArchived,
  setShowArchived,
  showUsers,
  setShowUsers,
  showDeleted,
  setShowDeleted,
  users,
  setUsers,
  showTags,
  setShowTags,
  tags,
  setTags,
}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow((prevShow) => !prevShow);

  return (
    <>
      <div className="board relative ml-auto mr-auto mt-24 w-10/12 overflow-auto rounded-lg border-8 border-neutral-700 bg-zinc-800 pl-5 pr-5 pt-12 text-white shadow-2xl">
        <TfiPin className="absolute -top-12 text-5xl font-bold text-zinc-700 " />
        <TfiPin className="absolute -top-12 right-11 text-5xl font-bold text-zinc-700" />
        <button
          onClick={handleShow}
          className="absolute right-2 top-3 cursor-pointer text-4xl text-teal-400 transition-all delay-75 ease-in hover:-translate-y-2 hover:text-5xl"
        >
          <LiaMarkerSolid />
        </button>
        <ul className="taskList m-0 pb-10 pl-0 pr-0 pt-10">
          {tasks.map((task, idx) => (
            <TaskItem
              key={idx}
              task={task}
              setTasks={setTasks}
              selectedID={selectedID}
              setSelectedID={setSelectedID}
            />
          ))}
        </ul>
      </div>
      <CreateTask
        show={show}
        handleShow={handleShow}
        tags={tags}
        users={users}
      />
      <ArchivedTasks
        showArchived={showArchived}
        setShowArchived={setShowArchived}
        archivedTasks={archivedTasks}
        setArchivedTasks={setArchivedTasks}
        setTasks={setTasks}
      />
      <UsersList
        showUsers={showUsers}
        setShowUsers={setShowUsers}
        users={users}
        setUsers={setUsers}
      />
      <TagsList
        showTags={showTags}
        setShowTags={setShowTags}
        tags={tags}
        setTags={setTags}
      />
      <DeletedTasks showDeleted={showDeleted} setShowDeleted={setShowDeleted} />
    </>
  );
}

export default memo(Board);
