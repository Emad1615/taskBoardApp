import { TfiPin } from 'react-icons/tfi';
import { LiaMarkerSolid } from 'react-icons/lia';
import { memo, useState } from 'react';
import CreateTask from './CreateTask';
import TaskItem from './TaskItem';
import ArchivedTasks from './ArchivedTasks';
import UsersList from './UsersList';
import DeletedTasks from './DeletedTasks';
import TagsList from './TagsList';
import { useMediaQuery } from 'react-responsive';
import FinishedTasks from './FinishedTasks';
function Board({
  tasks,
  queryResult,
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
  deletedTasks,
  setDeletedTasks,
  showFinishedTasks,
  setShowFinishedTasks,
  completedTasks,
  setCompletedTasks,
}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow((prevShow) => !prevShow);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

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
        {tasks.length === 0 && (
          <p className="boardTitle text-center text-xl font-extrabold text-teal-500">
            Fire your motivation now post your task here (⊙﹏⊙)
          </p>
        )}
        {/* <ul className="taskList m-0 pb-10 pl-0 pr-0 pt-10"> */}
        <ul
          className={`${isTabletOrMobile ? 'taskList m-0 pb-10 pl-0 pr-0 pt-10' : 'grid grid-cols-5 gap-4'}`}
        >
          {queryResult.map((task, idx) => (
            <TaskItem
              key={idx}
              task={task}
              setTasks={setTasks}
              setArchivedTasks={setArchivedTasks}
              selectedID={selectedID}
              setSelectedID={setSelectedID}
              setDeletedTasks={setDeletedTasks}
              setCompletedTasks={setCompletedTasks}
            />
          ))}
        </ul>
      </div>
      <CreateTask
        show={show}
        handleShow={handleShow}
        tags={tags}
        users={users}
        setTasks={setTasks}
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
      <DeletedTasks
        showDeleted={showDeleted}
        setShowDeleted={setShowDeleted}
        deletedTasks={deletedTasks}
      />
      <FinishedTasks
        showFinishedTasks={showFinishedTasks}
        setShowFinishedTasks={setShowFinishedTasks}
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks}
      />
    </>
  );
}

export default memo(Board);
