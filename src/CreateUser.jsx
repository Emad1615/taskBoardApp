import { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { json } from 'react-router-dom';
import { createUser } from './services/apiBoard';
const BASE_API = 'http://localhost:8080/Users';
function CreateUser({ setUsers }) {
  const [userName, setUserName] = useState('');
  const [avatar, setAvatar] = useState('https://i.pravatar.cc/50');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  async function HandleSubmit(e) {
    e.preventDefault();
    if (!userName) return;
    try {
      setIsLoading(true);
      setError('');
      const user = {
        userName: userName,
        avatar: avatar,
      };
      const data = await createUser(user);
      setUsers((prevUsers) => [...prevUsers, data]);
      setUserName('');
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
        <label className="block pb-2 text-sm font-semibold">Username</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.currentTarget.value)}
          className="w-full rounded-sm bg-slate-300 p-2 text-slate-800"
          required
        />
      </div>
      <div>
        <label className="block pb-2 text-sm font-semibold">Avatar</label>
        <input
          type="text"
          value={avatar}
          className="w-full rounded-sm bg-slate-300 p-2 text-sm text-slate-800"
          required
          disabled
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
              Loading <AiOutlineLoading3Quarters />
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

export default CreateUser;
