import { useRef, useState } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useKey } from './hooks/useKey';

function TypeAhead({
  options = [],
  selectedOption,
  setSelectedOption,
  onRemove,
}) {
  const [draggableElem, setDraggableElem] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const refInput = useRef(null);
  const [jobDescription, setJobDescription] = useState('');
  function onDragStart(item) {
    setDraggableElem(item);
  }
  function onDragOver(item) {
    if (!draggableElem) return;
    if (draggableElem.id !== item.id) {
      const draggableElemIndex = selectedOption.findIndex(
        (x) => x.id === draggableElem.id,
      );
      const itemIndex = selectedOption.findIndex((x) => x.id === item.id);
      const data = [...selectedOption];
      data[draggableElemIndex] = item;
      data[itemIndex] = draggableElem;
      setSelectedOption(data);
    }
  }
  useKey('Enter', () => {
    if (document.activeElement === refInput.current) {
      if (selectedUserId) {
        setSelectedOption((users) =>
          users.map((user) => {
            if (user.id === selectedUserId)
              return { ...user, jobDescription: jobDescription };
            else return user;
          }),
        );
      }
    }
  });
  console.log(selectedOption);
  return (
    <div>
      <AsyncTypeahead
        id="typeahead-id"
        className="w-full"
        labelKey={'userName'}
        options={options}
        selected={[]}
        placeholder="Select one or more developer to your task"
        onChange={(user) => {
          if (user.length === 0) return;
          const selectedValue = user[0];
          if (
            selectedOption.findIndex((user) => user.id === selectedValue.id) >
            -1
          )
            return;
          setSelectedOption((prevOptions) => [...prevOptions, user[0]]);
        }}
        renderMenuItemChildren={(user) => (
          <div className="flex flex-row items-center justify-start gap-2 ">
            <img
              src={user.avatar}
              alt={user.userName}
              className="rounded-full"
            />
            <p className="m-0 p-0 font-semibold">{user.userName}</p>
          </div>
        )}
        flip={true}
        minLength={1}
        maxResults={3}
        paginate
        onSearch={() => {}}
      />
      <ul className="mt-3 flex flex-col  gap-2 rounded-sm bg-slate-800 p-3">
        {selectedOption.length === 0 && (
          <p className="text-center text-slate-300">No selected users</p>
        )}
        {selectedOption.map((user) => (
          <li
            key={user.id}
            className="relative flex cursor-move flex-row items-center justify-start gap-2 rounded bg-slate-900 p-2 hover:bg-slate-950"
            draggable={true}
            onDragStart={() => onDragStart(user)}
            onDragOver={() => onDragOver(user)}
          >
            <img
              src={user.avatar}
              alt={user.userName}
              className="h-8 w-8 rounded-full"
            />
            <p className="m-0 p-0 font-semibold">
              {user.userName}{' '}
              <span className="block font-thin text-slate-400">
                {user?.jobDescription}
              </span>
            </p>
            {selectedUserId === user.id ? (
              <div className="flex-grow-1 text-center">
                <input
                  ref={refInput}
                  type="text"
                  className="w-52 rounded bg-slate-300 p-1 text-black"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.currentTarget.value)}
                />
              </div>
            ) : null}

            <button
              onClick={() => {
                setSelectedUserId((prevId) =>
                  prevId === user.id ? null : user.id,
                );
                setJobDescription('');
                // setSelectedUserId((prevUserId) =>
                //   prevUserId !== selectedUserId ? user.id : null,
                // );
              }}
              type="button"
              title="Add job description"
              className="absolute right-14 top-2 rounded-sm pb-2 pl-3 pr-3 pt-2 text-sm   transition-all ease-in hover:bg-slate-900"
            >
              {selectedUserId === user.id ? (
                <IoMdCloseCircleOutline />
              ) : (
                <IoIosAddCircleOutline />
              )}
            </button>
            <button
              onClick={() => onRemove(user.id)}
              type="button"
              className="absolute right-5 top-2 rounded-sm pb-2 pl-3 pr-3 pt-2 text-sm   transition-all ease-in hover:bg-red-900"
            >
              <FaRegTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TypeAhead;
