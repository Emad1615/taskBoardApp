import { AiOutlinePushpin } from 'react-icons/ai';
import { DateFormat } from './utils/helpers';

function ArchivedItem({
  item,
  archivedTasks,
  setArchivedTasks,
  showArchived,
  setTasks,
}) {
  const { id, title, description, tags, Memebers, createdAt, rating } = item;
  function AddArchivedItemToBoard(item) {
    const tasks = archivedTasks.filter((task) => task.id !== item.id);
    setArchivedTasks(tasks);
    setTasks((prevTasks) => [...prevTasks, item]);
  }
  return (
    <li className="relative m-1 flex flex-row items-center justify-between  gap-2  rounded bg-slate-800 pb-2 pl-2 pr-2 pt-2">
      <AiOutlinePushpin className="text-5xl text-teal-400" />
      <div className="w-2/4 grow">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <button
        onClick={() => AddArchivedItemToBoard(item)}
        className="rounded-sm bg-teal-500 p-2 transition-all hover:bg-teal-700 "
      >
        Add to board
      </button>
      <time className="absolute bottom-0 right-2 font-thin text-slate-500">
        {DateFormat(createdAt)}
      </time>
    </li>
  );
}

export default ArchivedItem;
