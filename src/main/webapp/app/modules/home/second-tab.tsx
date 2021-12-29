import React, { useEffect } from 'react';
import { Card, CardBody, CardSubtitle, Col, Collapse, Input, Row } from 'reactstrap';
import {
  AVG_DECIBEL,
  MAX_HUMIDITY,
  MAX_LIGHT,
  MAX_TEMP_SUMMER,
  MAX_TEMP_WINTER,
  MIN_HUMIDITY,
  MIN_LIGHT,
  MIN_TEMP_SUMMER,
  MIN_TEMP_WINTER,
} from 'app/config/constants';
import { isSummerTimeInEurope } from 'app/shared/util/date-utils';

const SecondTab = clean => {
  const [checkedOneB, setCheckedOneB] = React.useState(true);
  const [checkedTwoB, setCheckedTwoB] = React.useState(true);
  const [checkedThreeB, setCheckedThreeB] = React.useState(true);
  const [checkedFourB, setCheckedFourB] = React.useState(true);
  const [checkedFiveB, setCheckedFiveB] = React.useState(false);

  useEffect(() => {
    if (clean) {
      setCheckedOneB(true);
      setCheckedTwoB(true);
      setCheckedThreeB(true);
      setCheckedFourB(true);
      setCheckedFiveB(false);
    }
  }, []);

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
      <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
        Dear customer, please note that you can uncheck your least preferred criteria and fill your desired room capacity (optional).
      </p>
      <div className="mt-2">
        <Row>
          <Col md="6">
            <Row>
              <Col md="6" className="custom-control custom-switch mb-2 mt-2" style={{ paddingLeft: '45px' }}>
                <Input
                  name="Temperature"
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitchesCheckedTemperature2"
                  checked={checkedOneB}
                  onChange={handleChangeOneB}
                />
                <label className="custom-control-label" htmlFor="customSwitchesCheckedTemperature2">
                  <span className="mr-2"> Temperature </span>
                </label>
              </Col>
            </Row>

            <Collapse isOpen={checkedOneB}>
              <Card>
                <CardBody>
                  <CardSubtitle style={{ color: 'black' }}>
                    <p> Please input your minimum and maximum acceptable temperature values. </p>
                    <Row>
                      <Col md="5">
                        <label>
                          <Input
                            name="min_temp"
                            id="min_temp"
                            type="text"
                            placeholder="Minimum"
                            className="text-left mt-1 mb-1 ml-1"
                            value={isSummerTimeInEurope() ? MIN_TEMP_SUMMER : MIN_TEMP_WINTER}
                          />
                        </label>
                      </Col>
                      <Col md="5">
                        <label>
                          <Input
                            name="max_temp"
                            id="max_temp"
                            type="text"
                            placeholder="Maximum"
                            className="text-left mt-1 mb-1 mr-2 ml-2"
                            value={isSummerTimeInEurope() ? MAX_TEMP_SUMMER : MAX_TEMP_WINTER}
                          />
                        </label>
                      </Col>
                    </Row>
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Collapse>
          </Col>

          <Col md="6">
            <Row>
              <Col md="6" className="custom-control custom-switch mb-2 mt-2" style={{ paddingLeft: '45px' }}>
                <Input
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
            </Row>

            <Collapse isOpen={checkedTwoB}>
              <Card>
                <CardBody>
                  <CardSubtitle style={{ color: 'black' }}>
                    <p> Please input your minimum and maximum acceptable humidity values.</p>
                    <Row>
                      <Col md="5">
                        <label>
                          <Input
                            name="min_humidity"
                            id="min_humidity"
                            type="text"
                            placeholder="Minimum"
                            className="text-left mt-1 mb-1 ml-1"
                            value={MIN_HUMIDITY}
                          />
                        </label>
                      </Col>
                      <Col md="5">
                        <label>
                          <Input
                            name="min_humidity"
                            id="min_humidity"
                            type="text"
                            placeholder="Maximum"
                            className="text-left mt-1 mb-1 mr-2 ml-2"
                            value={MAX_HUMIDITY}
                          />
                        </label>
                      </Col>
                    </Row>
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Collapse>
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col md="6">
            <Row>
              <Col md="6" className="custom-control custom-switch mb-2 mt-2" style={{ paddingLeft: '45px' }}>
                <Input
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
            </Row>

            <Collapse isOpen={checkedThreeB}>
              <Card>
                <CardBody>
                  <CardSubtitle style={{ color: 'black' }}>
                    <p> Please input your minimum and maximum acceptable light intensity values. </p>
                    <Row>
                      <Col md="5">
                        <label>
                          <Input
                            name="min_light"
                            id="min_light"
                            type="text"
                            placeholder="Minimum"
                            className="text-left mt-1 mb-1 ml-1"
                            value={MIN_LIGHT}
                          />
                        </label>
                      </Col>
                      <Col md="5">
                        <label>
                          <Input
                            name="max_light"
                            id="max_light"
                            type="text"
                            placeholder="Maximum"
                            className="text-left mt-1 mb-1 mr-2 ml-2"
                            value={MAX_LIGHT}
                          />
                        </label>
                      </Col>
                    </Row>
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Collapse>
          </Col>

          <Col md="6">
            <Row>
              <Col md="6" className="custom-control custom-switch mb-2 mt-2" style={{ paddingLeft: '45px' }}>
                <Input
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
            </Row>

            <Collapse isOpen={checkedFourB}>
              <Card>
                <CardBody>
                  <CardSubtitle style={{ color: 'black' }}>
                    <p> Please input your average acceptable noise value in decibel. </p>
                    &nbsp; &nbsp; &nbsp;
                    <Row>
                      <Col md="5">
                        <label>
                          <Input
                            name="avg_decibel"
                            id="avg_decibel"
                            type="text"
                            placeholder="Average Decibel"
                            className="text-left mt-1 mb-1 ml-1"
                            value={AVG_DECIBEL}
                          />
                        </label>
                      </Col>
                    </Row>
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Collapse>
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col md="6">
            <Row>
              <Col md="8" className="custom-control custom-switch mb-2 mt-2" style={{ paddingLeft: '45px' }}>
                <Input
                  name="Room_Capacity"
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitchesCheckedRoom_Capacity2"
                  onChange={handleChangeFiveB}
                />
                <label className="custom-control-label" htmlFor="customSwitchesCheckedRoom_Capacity2">
                  <span className="mr-2"> Room Capacity </span>
                </label>
              </Col>
            </Row>

            <Collapse isOpen={checkedFiveB}>
              <Card>
                <CardBody>
                  <CardSubtitle style={{ color: 'black' }}>
                    <p> Please input your minimum and maximum acceptable room capacity. </p>
                    <Row>
                      <Col md="5">
                        <label>
                          <Input
                            name="min_room_capacity"
                            id="min_room_capacity"
                            type="text"
                            placeholder="Minimum"
                            className="text-left mt-1 mb-1 ml-1"
                          />
                        </label>
                      </Col>
                      <Col md="5">
                        <label>
                          <Input
                            name="max_room_capacity"
                            id="max_room_capacity"
                            type="text"
                            placeholder="Maximum"
                            className="text-left mt-1 mb-1 mr-2 ml-2"
                          />
                        </label>
                      </Col>
                    </Row>
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Collapse>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SecondTab;
