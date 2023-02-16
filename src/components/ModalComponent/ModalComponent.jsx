import { useState } from "react";
import { Modal, Button } from "semantic-ui-react";

export const ModalComponent = ({ showModal, handleCloseModal, unit }) => {
  const [formData, setFormData] = useState({
    quality: unit.quality,
    health: unit.health,
    attack: unit.attack,
    maxTargetCount: unit.maxTargetCount,
    spawnCost: unit.spawnCost,
    spawnCooldownInSeconds: unit.spawnCooldownInSeconds,
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    
  }
  return (
    <Modal onClose={handleCloseModal} open={showModal}>
      <Modal.Header>Edit Unit</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <div className="ui form">
            <div className="field">
              <label>Health</label>
              <input
                type="number"
                id="health"
                name="health"
                min="5"
                max="10000"
                step="5"
                value={formData.health}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Attack</label>
              <input
                type="number"
                id="attack"
                name="attack"
                min="5"
                max="500"
                step="5"
                value={formData.attack}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Max Target Count</label>
              <input
                type="number"
                id="maxTargetCount"
                name="maxTargetCount"
                min="1"
                max="100"
                value={formData.maxTargetCount}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Spawn Cost</label>
              <input
                type="number"
                id="spawnCost"
                name="spawnCost"
                min="0"
                max="1000"
                step="5"
                value={formData.spawnCost}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Spawn Cooldown in Seconds</label>
              <input
                type="number"
                id="spawnCooldownInSeconds"
                name="spawnCooldownInSeconds"
                min="0"
                max="100"
                step="0.1"
                value={formData.spawnCooldownInSeconds}
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label>Quality</label>
              <select
                id="quality"
                name="quality"
                className="ui search dropdown"
                value={formData.quality}
                onChange={handleInputChange}
              >
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
          onClick={handleSubmit}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};
