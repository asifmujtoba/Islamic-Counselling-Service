import React from 'react';
import Button from '../../../elements/Button';
import ButtonGroup from '../../../elements/ButtonGroup';



const CallingModal = ({ handleSubmit, handleClose, show, children }) => {

  const showHideClassName = show ? "modal is-active" : "modal";

  return (
    <div className={showHideClassName}>
      <section className="modal-inner">
        <div className="modal-content">
        {children}
        <ButtonGroup >
        <Button className="primary" type="submit" onClick={handleSubmit}>Submit</Button>
        <Button className="dark" onClick={handleClose}>Close</Button>
      
        </ButtonGroup>
        </div>
      </section>
    </div>
  );
};

export default CallingModal;