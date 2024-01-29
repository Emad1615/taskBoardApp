import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaTrash } from 'react-icons/fa';
import DeletedItem from './DeletedItem';

function DeletedTasks({ showDeleted, setShowDeleted, deletedTasks }) {
  return (
    <div>
      <Modal
        show={showDeleted}
        onHide={() => setShowDeleted((x) => !x)}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className=" uppercase">
            <FaTrash className="inline-block" /> Deleted Tasks
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {deletedTasks.length === 0 && (
              <p className="text-center font-semibold text-slate-400">
                No deleted tasks added before
              </p>
            )}
            {deletedTasks.map((item, idx) => (
              <DeletedItem key={idx} item={item} />
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowDeleted((x) => !x)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeletedTasks;
