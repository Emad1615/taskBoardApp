import randomColor from 'randomcolor';
import { Badge } from 'react-bootstrap';
import { AiOutlinePushpin } from 'react-icons/ai';
import { DateFormat } from './utils/helpers';
import TextExpander from './TextExpander';
import RatingStar from './RatingStar';
import { useState } from 'react';

function TaskItem({ task, setTasks, selectedID, setSelectedID }) {
  const color = randomColor();
  const { id, title, description, tags, Memebers, createdAt, rating } = task;
  const [starRate, setStarRate] = useState(rating);

  return (
    <li
      className="rotate-1 rounded "
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
            {tag}
          </Badge>
        ))}
        <div className="mt-2 flex flex-grow gap-1">
          {Memebers.map((item) => (
            <span
              key={item.id}
              title={item.name}
              className="text-truncate rounded-lg bg-slate-800 p-1"
              style={{ fontSize: '.5rem' }}
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="inline-block h-6 w-6 rounded-full"
              />
              &nbsp; {item.name}
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
    </li>
  );
}

export default TaskItem;
