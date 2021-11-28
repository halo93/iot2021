import React, { useState } from 'react';
import FirstTab from './firstTab';
import SecondTab from '../home/secondTab';
import { Button, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [clean, setClean] = useState(false);

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab('tab2');
  };

  return (
    <div className="Tabs">
      <ul className="nav">
        <li className={activeTab === 'tab1' ? 'active' : ''} onClick={handleTab1}>
          Room comfort with EU standards
        </li>
        <li className={activeTab === 'tab2' ? 'active' : ''} onClick={handleTab2}>
          Room comfort based on your preference
        </li>
      </ul>
      <div className="outlet d-flex justify-content-center">{activeTab === 'tab1' ? <FirstTab clean={clean} /> : <SecondTab />}</div>

      <hr style={{ backgroundColor: 'gray' }} />
      <div className="d-flex justify-content-center mt-4">
        <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" className="btn btn-primary">
          <FontAwesomeIcon icon="save" />
          &nbsp; Submit my Preference
        </Button>
      </div>
    </div>
  );
};

export default TabsComponent;
