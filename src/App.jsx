import WebFont from 'webfontloader';
import Header from './Header';
import Board from './Board';
import { useEffect, useState } from 'react';
import QuickNav from './QuickNav';
import {
  getArchivedTasks,
  getCompletetdTasks,
  getDeletedTasks,
  getTags,
  getTasks,
  getUsers,
} from './services/apiBoard';
function App() {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [tags, setTags] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [selectedID, setSelectedID] = useState(null);
  const [showArchived, setShowArchived] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [showDeleted, setShowDeleted] = useState(false);
  const [showFinishedTasks, setShowFinishedTasks] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      setTasks(await getTasks());
      setArchivedTasks(await getArchivedTasks());
      setUsers(await getUsers());
      setTags(await getTags());
      setDeletedTasks(await getDeletedTasks());
      setCompletedTasks(await getCompletetdTasks());
    }
    loadTasks();
  }, []);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Sora'],
      },
    });
  }, []);
  return (
    <div className=" relative w-full">
      <Header />
      <Board
        tasks={tasks}
        setTasks={setTasks}
        archivedTasks={archivedTasks}
        setArchivedTasks={setArchivedTasks}
        selectedID={selectedID}
        setSelectedID={setSelectedID}
        showArchived={showArchived}
        setShowArchived={setShowArchived}
        showUsers={showUsers}
        setShowUsers={setShowUsers}
        showDeleted={showDeleted}
        setShowDeleted={setShowDeleted}
        users={users}
        setUsers={setUsers}
        showTags={showTags}
        setShowTags={setShowTags}
        tags={tags}
        setTags={setTags}
        deletedTasks={deletedTasks}
        setDeletedTasks={setDeletedTasks}
        showFinishedTasks={showFinishedTasks}
        setShowFinishedTasks={setShowFinishedTasks}
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks}
      />
      <QuickNav
        showArchived={showArchived}
        setShowArchived={setShowArchived}
        showUsers={showUsers}
        setShowUsers={setShowUsers}
        showDeleted={showDeleted}
        setShowDeleted={setShowDeleted}
        setShowTags={setShowTags}
        setShowFinishedTasks={setShowFinishedTasks}
      />
    </div>
  );
}
export default App;
