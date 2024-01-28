import { Badge } from 'react-bootstrap';
import { AiOutlinePushpin } from 'react-icons/ai';
import { DateFormat } from './utils/helpers';
import TextExpander from './TextExpander';
import RatingStar from './RatingStar';
import { useState } from 'react';
import { FaArchive } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';

function TaskItem({ task, setTasks, selectedID, setSelectedID }) {
  const { id, title, description, tags, Memebers, createdAt, rating, color } =
    task;
  const [starRate, setStarRate] = useState(rating);

  return (
    <li
      className="relative rotate-1 rounded pb-4"
      style={{ background: color }}
      // onClick={()=>setSelectedID(prevID=> prevID!==id?id:null)}
    >
      <h5 className="m-1 rounded-lg bg-gray-700 p-1 text-sm font-semibold uppercase text-gray-100">
        <AiOutlinePushpin className="inline-block text-xl" /> {title}
        <time className="block pl-6 font-thin" style={{ fontSize: '.6rem' }}>
          {DateFormat(createdAt)}
        </time>
      </h5>
      <div className="m-3">
        <blockquote
          className=" border-l-4 bg-gray-700 pl-2 text-sm font-thin"
          style={{ fontSize: '.8rem' }}
        >
          <TextExpander children={description} />
        </blockquote>
        {tags.map((tag, idx) => (
          <Badge key={idx} bg="primary" className="m-1 text-sm font-thin">
            {tag.tag}
          </Badge>
        ))}
        <div className="mt-2 flex flex-grow gap-1">
          {Memebers.map((item) => (
            <span
              key={item.id}
              title={item.jobDescription}
              className="text-truncate rounded-lg bg-slate-800 p-1"
              style={{ fontSize: '.5rem' }}
            >
              <img
                src={item.avatar}
                alt={item.userName}
                className="inline-block h-6 w-6 rounded-full"
              />
              &nbsp; {item.userName}
            </span>
          ))}
        </div>
      </div>
      <RatingStar
        maxStarNumber={5}
        message={['Bad', 'Good', 'Very good', 'Excelent', 'Amazing']}
        onRate={setStarRate}
        defaultStarRate={starRate}
        id={id}
        setTasks={setTasks}
      />
      <div className="absolute bottom-0 w-full  p-1">
        <div className="m-1 flex flex-row  bg-slate-700">
          <button className="flex-grow-1 inline-block transition-all ease-in hover:bg-teal-500 hover:text-slate-700">
            <FaArchive className="inline-block text-center " />
          </button>
          <button className="flex-grow-1 inline-block text-center transition-all ease-in hover:bg-sky-500 hover:text-slate-700">
            <IoCheckmarkDoneCircle className="inline-block text-center " />
          </button>
          <button className="flex-grow-1 inline-block text-center  transition-all ease-in hover:bg-red-500 hover:text-slate-700">
            <MdDelete className="inline-block text-center  " />
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
