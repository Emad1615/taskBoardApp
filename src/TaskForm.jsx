import { useState } from 'react';
import Markdown from 'react-markdown';
import MultiSelector from './MultiSelector';
import TypeAhead from './TypeAhead';
import { IoMdAdd } from 'react-icons/io';
import { createTask } from './services/apiBoard';
import { IoReload } from 'react-icons/io5';
import randomColor from 'randomcolor';

function TaskForm({ tags, users, setTasks, handleShow }) {
  const color = randomColor();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [nonSelectedTags, setNonSelectedTags] = useState(tags);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  async function HandleSubmit(e) {
    e.preventDefault();
    if (selectedUser.length === 0)
      return setError('Please select at least one developer for this task');
    else setError('');
    if (selectedTags.length < 2)
      return setError('Please select at least two or more tag for this task');
    else setError('');
    setIsLoading(true);
    const taskData = {
      title: title,
      description: description,
      tags: selectedTags,
      Memebers: selectedUser,
      createdAt: new Date(),
      rating: 0,
      color: color,
    };
    const task = await createTask(taskData);
    setTasks((prevTasks) => [...prevTasks, task]);
    setIsLoading(false);
    handleShow((prevShow) => !prevShow);
  }
  return (
    <form
      className="flex flex-col gap-2 p-3  font-thin shadow-md"
      onSubmit={HandleSubmit}
    >
      {error && (
        <p className="text-center font-semibold text-red-500">🔴 {error}</p>
      )}
      <div>
        <label className="block pb-2 font-semibold">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          className="w-full rounded-sm bg-slate-300 p-2 text-slate-800"
          required
          placeholder="task title"
        />
      </div>
      <div>
        <label className="block pb-2 font-semibold">Users</label>
        <TypeAhead
          options={users}
          selectedOption={selectedUser}
          setSelectedOption={setSelectedUser}
          onRemove={(id) => {
            const data = selectedUser.filter((x) => x.id !== id);
            setSelectedUser(data);
          }}
        />
      </div>
      <div className="m-1 flex flex-row gap-2">
        <div className="w-2/4 flex-grow">
          <label className="block pb-2  font-semibold">Description</label>
          <textarea
            required
            placeholder="task description"
            rows={12}
            color={5}
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
            className="h-3/4 w-full rounded-sm bg-slate-300 p-2 text-slate-800"
          ></textarea>
        </div>
        <div className="w-2/4  flex-grow ">
          <label className="block pb-2  font-semibold">
            Description Preview
          </label>
          <Markdown className="h-3/4 overflow-auto rounded border-slate-950 bg-slate-800 p-2">
            {description}
          </Markdown>
        </div>
      </div>
      <div className="rounded-sm bg-slate-800 p-2">
        <MultiSelector
          nonSelectedData={nonSelectedTags}
          selectedData={selectedTags}
          setNonSelectedData={setNonSelectedTags}
          setSelectedData={setSelectedTags}
        />
      </div>
      <div className="flex flex-row ">
        <button className="flex-grow-1 bg-teal-500 p-2 transition-all  ease-in hover:bg-teal-700">
          {isLoading ? (
            <>
              Loading <IoReload className="inline-block" />
            </>
          ) : (
            <>
              Add Task to board <IoMdAdd className="inline-block" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
