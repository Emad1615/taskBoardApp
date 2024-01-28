import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaTrash } from 'react-icons/fa';

function DeletedTasks({ showDeleted, setShowDeleted }) {
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
          I will not close if you click outside me. Do not even try to press
          escape key.
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
