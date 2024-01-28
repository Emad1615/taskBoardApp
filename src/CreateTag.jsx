import { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { createTag } from './services/apiBoard';
function CreateTag({ setTags }) {
  const [tag, setTag] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  async function HandleSubmit(e) {
    e.preventDefault();
    if (!tag) return;
    try {
      setIsLoading(true);
      setError('');
      const Tag = { tag };
      const data = await createTag(Tag);
      setTags((prevTags) => [...prevTags, data]);
      setTag('');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <form className="rounded p-3 shadow-md" onSubmit={HandleSubmit}>
      {error && (
        <p className="m-1 text-center text-sm font-semibold text-red-500">
          {error}
        </p>
      )}
      <div>
        <label className="block pb-2 text-sm font-semibold">Tag</label>
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.currentTarget.value)}
          className="w-full rounded-sm bg-slate-300 p-2 text-slate-800"
          required
        />
      </div>
      <div className="mt-2 text-center">
        <button
          disabled={isLoading}
          type="submit"
          className="rounded-sm bg-teal-500 p-2 text-sm transition-all ease-in hover:bg-teal-700"
        >
          {isLoading ? (
            <>
              Loading <AiOutlineLoading3Quarters className="inline-block" />
            </>
          ) : (
            <>
              Save <FaSave className="inline-block" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default CreateTag;
