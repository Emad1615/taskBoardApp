import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaUsers } from 'react-icons/fa';
import CreateUser from './CreateUser';

function UsersList({ showUsers, setShowUsers, users, setUsers }) {
  return (
    <div>
      <Modal
        show={showUsers}
        onHide={() => setShowUsers((x) => !x)}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className=" uppercase">
            <FaUsers className="inline-block" /> Users
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateUser setUsers={setUsers} />
          <h5 className="mt-3  border-b border-slate-600 pb-1 uppercase">
            user list
          </h5>

          <ul className="mt-3 flex flex-row flex-wrap items-center justify-start gap-2 rounded p-3 shadow-md">
            {users.map((user, idx) => (
              <li
                key={idx}
                className="userCard relative flex  w-44 flex-col items-center justify-center gap-1 rounded bg-slate-800 p-2  transition-all ease-in hover:bg-slate-900"
              >
                <img
                  src={user.avatar}
                  alt={user.userName}
                  className="rounded-full"
                />
                <p>{user.userName}</p>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowUsers((x) => !x)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UsersList;
