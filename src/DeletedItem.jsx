import { AiOutlinePushpin } from 'react-icons/ai';
import { DateFormat } from './utils/helpers';
function DeletedItem({ item }) {
  const { id, title, description, tags, Memebers, createdAt, rating } = item;

  return (
    <li className="relative m-1 flex flex-row items-center justify-between  gap-2  rounded bg-slate-800 pb-2 pl-2 pr-2 pt-2">
      <AiOutlinePushpin className="text-5xl text-teal-400" />
      <div className="w-2/4 grow">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <time className="absolute bottom-0 right-2 font-thin text-slate-500">
        {DateFormat(createdAt)}
      </time>
    </li>
  );
}

export default DeletedItem;
