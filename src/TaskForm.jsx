import { useState } from 'react';
import Markdown from 'react-markdown';
import MultiSelector from './MultiSelector';
import TypeAhead from './TypeAhead';

function TaskForm({ tags, users }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [nonSelectedTags, setNonSelectedTags] = useState(tags);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  return (
    <form className="flex flex-col gap-2 p-3  font-thin shadow-md">
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
    </form>
  );
}

export default TaskForm;
