import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import FinishedTasksItem from './FinishedTasksItem';
import { useMediaQuery } from 'react-responsive';

function FinishedTasks({
  showFinishedTasks,
  setShowFinishedTasks,
  completedTasks,
  setCompletedTasks,
}) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <div>
      <Modal
        show={showFinishedTasks}
        onHide={() => setShowFinishedTasks((x) => !x)}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title className=" uppercase">
            <IoCheckmarkDoneCircle className="inline-block" /> Completed Tasks
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul
            className={`${isTabletOrMobile ? 'taskList m-0 pb-10 pl-0 pr-0 pt-10' : 'grid grid-cols-4 gap-4'}`}
          >
            {completedTasks.length === 0 && (
              <p className="text-center font-semibold text-slate-400">
                No completed tasks added before
              </p>
            )}
            {completedTasks.map((item, idx) => (
              <FinishedTasksItem key={idx} item={item} />
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => setShowFinishedTasks((x) => !x)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FinishedTasks;
