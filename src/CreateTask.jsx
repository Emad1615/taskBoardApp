import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from 'react-icons/fa';
import TaskForm from './TaskForm';

function CreateTask({ show, handleShow, tags, users, setTasks }) {
  return (
    <div>
      <Modal
        show={show}
        onHide={handleShow}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="uppercase">
            <FaPlusCircle className="inline-block" /> Add Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskForm tags={tags} users={users} setTasks={setTasks} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default CreateTask;
