import React from 'react';
import { Col, Row } from 'reactstrap';

const SecondTab = () => {
  const [checkedOneB, setCheckedOneB] = React.useState(false);
  const [checkedTwoB, setCheckedTwoB] = React.useState(false);
  const [checkedThreeB, setCheckedThreeB] = React.useState(false);
  const [checkedFourB, setCheckedFourB] = React.useState(false);
  const [checkedFiveB, setCheckedFiveB] = React.useState(false);

  const handleChangeOneB = () => {
    setCheckedOneB(!checkedOneB);
  };
  const handleChangeTwoB = () => {
    setCheckedTwoB(!checkedTwoB);
  };
  const handleChangeThreeB = () => {
    setCheckedThreeB(!checkedThreeB);
  };
  const handleChangeFourB = () => {
    setCheckedFourB(!checkedFourB);
  };
  const handleChangeFiveB = () => {
    setCheckedFiveB(!checkedFiveB);
  };

  return (
    <div className="SecondTab">
      <div className="mt-2">
        <Row>
          <Col md="4" className="custom-control custom-switch">
            <input
              name="Temperature"
              type="checkbox"
              className="custom-control-input"
              id="customSwitchesCheckedTemperature2"
              checked={checkedOneB}
              onChange={handleChangeOneB}
              defaultChecked
            />
            <label className="custom-control-label" htmlFor="customSwitchesCheckedTemperature2">
              <span className="mr-2"> Temperature </span>
            </label>
          </Col>

          <Col md="2">
            <label>
              <input name="min_temp" id="values" type="text" placeholder="Minimum" className="text-left mt-1 mb-1 ml-1" />
            </label>
          </Col>

          <Col md="2">
            <label>
              <input name="max_temp" id="values" type="text" placeholder="Maximum" className="text-left mt-1 mb-1 mr-2 ml-2" />
            </label>
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col md="4" className="custom-control custom-switch">
            <input
              name="Humidity"
              className="custom-control-input"
              id="customSwitchesCheckedHumidity2"
              type="checkbox"
              checked={checkedTwoB}
              onChange={handleChangeTwoB}
            />
            <label className="custom-control-label" htmlFor="customSwitchesCheckedHumidity2">
              <span className="mr-2"> Humidity </span>
            </label>
          </Col>

          <Col md="2">
            <label>
              <input name="min_humidity" id="values" type="text" placeholder="Minimum" className="text-left mt-1 mb-1 ml-1" />
            </label>
          </Col>

          <Col md="2">
            <label>
              <input name="max_humidity" id="values" type="text" placeholder="Maximum" className="text-left mt-1 mb-1 mr-2 ml-2" />
            </label>
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col md="4" className="custom-control custom-switch">
            <input
              name="Light"
              className="custom-control-input"
              id="customSwitchesCheckedLight2"
              type="checkbox"
              checked={checkedThreeB}
              onChange={handleChangeThreeB}
            />
            <label className="custom-control-label" htmlFor="customSwitchesCheckedLight2">
              <span className="mr-2"> Light </span>
            </label>
          </Col>

          <Col md="3">
            <label>
              <input
                name="average_intensity"
                id="values"
                type="text"
                placeholder="Average Intensity"
                className="text-left mt-1 mb-1 ml-1"
              />
            </label>
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col md="4" className="custom-control custom-switch">
            <input
              name="Noise"
              type="checkbox"
              className="custom-control-input"
              id="customSwitchesCheckedNoise2"
              checked={checkedFourB}
              onChange={handleChangeFourB}
            />
            <label className="custom-control-label" htmlFor="customSwitchesCheckedNoise2">
              <span className="mr-2"> Noise </span>
            </label>
          </Col>

          <Col md="3">
            <label>
              <input name="average_decibel" id="values" type="text" placeholder="Average Decibel" className="text-left mt-1 mb-1 ml-1" />
            </label>
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col md="4" className="custom-control custom-switch">
            <input
              name="Room_Capacity"
              type="checkbox"
              className="custom-control-input"
              id="customSwitchesCheckedRoom_Capacity2"
              checked={checkedFiveB}
              onChange={handleChangeFiveB}
            />
            <label className="custom-control-label" htmlFor="customSwitchesCheckedRoom_Capacity2">
              <span className="mr-2"> Room Capacity </span>
            </label>
          </Col>

          <Col md="2">
            <label>
              <input name="min_room_capacity" id="values" type="text" placeholder="Minimum" className="text-left mt-1 mb-1 ml-1" />
            </label>
          </Col>

          <Col md="2">
            <label>
              <input name="max_room_capacity" id="values" type="text" placeholder="Maximum" className="text-left mt-1 mb-1 mr-2 ml-2" />
            </label>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SecondTab;
