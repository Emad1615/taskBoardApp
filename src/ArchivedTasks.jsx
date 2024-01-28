import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaArchive } from 'react-icons/fa';
import ArchivedItem from './ArchivedItem';

function ArchivedTasks({
  showArchived,
  setShowArchived,
  archivedTasks,
  setArchivedTasks,
  setTasks,
}) {
  return (
    <div>
      <Modal
        show={showArchived}
        onHide={() => setShowArchived((x) => !x)}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="uppercase">
            <FaArchive className="inline-block" /> Archived Tasks
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {archivedTasks.map((item, idx) => (
              <ArchivedItem
                key={idx}
                item={item}
                archivedTasks={archivedTasks}
                setArchivedTasks={setArchivedTasks}
                showArchived={showArchived}
                setTasks={setTasks}
              />
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowArchived((x) => !x)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ArchivedTasks;
