import { Modal, Button, Image, Header } from "semantic-ui-react";

export const ModalComponent = ({ showModal, handleCloseModal, unit }) => {
  return (
    <Modal onClose={handleCloseModal} open={showModal}>
      <Modal.Header>Edit Unit</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <div className="ui form">
            <div className="field">
              <label>Health</label>
              <input type="number" />
            </div>
            <div className="field">
              <label>Attack</label>
              <input type="number" />
            </div>
            <div className="field">
              <label>Max Target Count</label>
              <input type="number" />
            </div>
            <div className="field">
              <label>Spawn Cost</label>
              <input type="number" />
            </div>
            <div className="field">
              <label>Spawn Cooldown in Seconds</label>
              <input type="number" />
            </div>
            <div className="field">
              <label>Quality</label>
              <select id='quality' name='quality' className="ui search dropdown">
                <option value="Common">Common</option>
                <option value="Epic">Epic</option>
                <option value="Rare">Rare</option>
              </select>
            </div>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={handleCloseModal}>
          Close Modal
        </Button>
        <Button
          content="Submit"
          labelPosition="right"
          icon="checkmark"
          onClick={handleCloseModal}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};
