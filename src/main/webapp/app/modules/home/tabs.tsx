import React, { useState } from 'react';
import FirstTab from './first-tab';
import SecondTab from './second-tab';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TabsComponent = ({ temperature, setTemperature, light, setLight, noise, setNoise, humidity, setHumidity, tab, setTab }) => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [clean, setClean] = useState(false);

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab('tab1');
    setTab(1);
    setClean(true);
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab('tab2');
    setTab(2);
    setClean(true);
  };

  return (
    <div className="Tabs">
      <ul className="nav">
        <li className={activeTab === 'tab1' ? 'active' : ''} onClick={handleTab1}>
          Room comfort based on EU standards
        </li>
        <li className={activeTab === 'tab2' ? 'active' : ''} onClick={handleTab2}>
          Room comfort based on your preference
        </li>
      </ul>
      <div>
        {activeTab === 'tab1' ? (
          <div className="outlet d-flex justify-content-center">
            <FirstTab
              clean={clean}
              temperature={temperature}
              setTemperature={setTemperature}
              light={light}
              setLight={setLight}
              noise={noise}
              setNoise={setNoise}
              humidity={humidity}
              setHumidity={setHumidity}
            />
          </div>
        ) : (
          <div className="justify-content-center">
            <SecondTab />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsComponent;
