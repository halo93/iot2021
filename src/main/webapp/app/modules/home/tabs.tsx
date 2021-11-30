import React, { useState } from 'react';
import FirstTab from './first-tab';
import SecondTab from './second-tab';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TabsComponent = ({ temperature, setTemperature, light, setLight, noise, setNoise, humidity, setHumidity }) => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [clean, setClean] = useState(false);
  const [copiedTemperature, setCopiedTemperature] = useState(temperature);
  const [copiedLight, setCopiedLight] = useState(light);
  const [copiedNoise, setCopiedNoise] = useState(noise);
  const [copiedHumidity, setCopiedHumidity] = useState(humidity);

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab('tab1');
    setClean(true);
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab('tab2');
    setClean(true);
  };

  const submitPreference = () => {
    setTemperature(copiedTemperature);
    setLight(copiedLight);
    setNoise(copiedNoise);
    setHumidity(copiedHumidity);
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
      <div className="outlet d-flex justify-content-center">
        {activeTab === 'tab1' ? (
          <FirstTab
            clean={clean}
            copiedTemperature={copiedTemperature}
            setCopiedTemperature={setCopiedTemperature}
            copiedLight={copiedLight}
            setCopiedLight={setCopiedLight}
            copiedNoise={copiedNoise}
            setCopiedNoise={setCopiedNoise}
            copiedHumidity={copiedHumidity}
            setCopiedHumidity={setCopiedHumidity}
          />
        ) : (
          <SecondTab />
        )}
      </div>

      <hr style={{ backgroundColor: 'gray' }} />
      <div className="d-flex justify-content-center mt-4">
        <Button
          color="primary"
          id="save-entity"
          data-cy="entityCreateSaveButton"
          type="button"
          onClick={submitPreference}
          className="btn btn-primary"
        >
          <FontAwesomeIcon icon="save" />
          &nbsp; Submit my Preference
        </Button>
      </div>
    </div>
  );
};

export default TabsComponent;
