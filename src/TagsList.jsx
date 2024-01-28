import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaTag } from 'react-icons/fa';
import CreateUser from './CreateUser';
import CreateTag from './CreateTag';
import { Badge } from 'react-bootstrap';
function TagsList({ showTags, setShowTags, tags, setTags }) {
  return (
    <div>
      <Modal
        show={showTags}
        onHide={() => setShowTags((x) => !x)}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className=" uppercase">
            <FaTag className="inline-block" /> Tags
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateTag setTags={setTags} />
          <h5 className="mt-3  border-b border-slate-600 pb-1 uppercase">
            Tags
          </h5>
          <div className="p-3 shadow">
            {tags.length === 0 && (
              <p className="m-2 text-center font-thin">No tags added yet...</p>
            )}
            {tags.map((Tag, idx) => (
              <Badge
                key={idx}
                bg="primary"
                className="m-1 inline-block   p-2 font-thin"
              >
                @ {Tag.tag}
              </Badge>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowTags((x) => !x)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TagsList;
