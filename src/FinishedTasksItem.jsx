import { Badge } from 'react-bootstrap';
import { AiOutlinePushpin } from 'react-icons/ai';
import { DateFormat } from './utils/helpers';
import TextExpander from './TextExpander';
function FinishedTasksItem({ item }) {
  const { id, title, description, tags, Memebers, createdAt, rating, color } =
    item;
  return (
    <li
      className="relative  rounded pb-4"
      style={{ background: color }}
      // onClick={()=>setSelectedID(prevID=> prevID!==id?id:null)}
    >
      <h5
        className="text-truncate relative m-1 rounded-lg bg-gray-700 p-1 text-sm font-semibold uppercase text-gray-100"
        title={title}
      >
        <AiOutlinePushpin className="inline-block text-xl" /> {title}
        <time className="block pl-6 font-thin" style={{ fontSize: '.6rem' }}>
          {DateFormat(createdAt)}
        </time>
        <span className="absolute right-3 top-7 text-sm">
          ⭐<small style={{ fontSize: '.6rem' }}> {rating}/5</small>
        </span>
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
    </li>
  );
}

export default FinishedTasksItem;
