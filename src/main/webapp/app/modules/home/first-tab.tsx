import React, { useEffect } from 'react';
import { Button, Card, CardBody, CardSubtitle, Col, Collapse, Input, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getEntities } from 'app/modules/home/user-preference.reducer';
import { useAppDispatch } from 'app/config/store';

const FirstTab = ({ clean, temperature, setTemperature, light, setLight, noise, setNoise, humidity, setHumidity }) => {
  const [checkedOneA, setCheckedOneA] = React.useState(true);
  const [checkedTwoA, setCheckedTwoA] = React.useState(true);
  const [checkedThreeA, setCheckedThreeA] = React.useState(true);
  const [checkedFourA, setCheckedFourA] = React.useState(true);
  const [copiedTemperature, setCopiedTemperature] = React.useState(temperature);
  const [copiedLight, setCopiedLight] = React.useState(light);
  const [copiedNoise, setCopiedNoise] = React.useState(noise);
  const [copiedHumidity, setCopiedHumidity] = React.useState(humidity);

  useEffect(() => {
    if (clean) {
      setCheckedOneA(true);
      setCheckedTwoA(true);
      setCheckedThreeA(true);
      setCheckedFourA(true);
    }
  }, []);

  const dispatch = useAppDispatch();

  const getAllEntities = () => {
    dispatch(getEntities({ temperature, humidity, light, noise }));
  };

  useEffect(() => {
    getAllEntities();
  }, [temperature, light, noise, humidity]);

  const handleChangeOneA = () => {
    setCheckedOneA(!checkedOneA);
    setCopiedTemperature(!copiedTemperature);
  };
  const handleChangeTwoA = () => {
    setCheckedTwoA(!checkedTwoA);
    setCopiedHumidity(!copiedHumidity);
  };
  const handleChangeThreeA = () => {
    setCheckedThreeA(!checkedThreeA);
    setCopiedLight(!copiedLight);
  };
  const handleChangeFourA = () => {
    setCheckedFourA(!checkedFourA);
    setCopiedNoise(!copiedNoise);
  };

  const submitPreference = () => {
    setTemperature(copiedTemperature);
    setLight(copiedLight);
    setNoise(copiedNoise);
    setHumidity(copiedHumidity);
  };

  return (
    <div className="FirstTab">
      <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
        Dear customer, please note that you can uncheck your least preferred criteria.
      </p>
      <div className="mt-2">
        <Row>
          <Col md="6">
            <Row>
              <Col md="4" className="custom-control custom-switch mb-2 mt-2" style={{ paddingLeft: '51px' }}>
                <Input
                  name="Temperature"
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitchesCheckedTemperature1"
                  checked={checkedOneA}
                  onChange={handleChangeOneA}
                />
                <label className="custom-control-label" htmlFor="customSwitchesCheckedTemperature1">
                  <span className="mr-2"> Temperature </span>
                </label>
              </Col>
            </Row>
            <Collapse isOpen={checkedOneA}>
              <Card>
                <CardBody>
                  <CardSubtitle style={{ color: 'black' }}>
                    The EU standard specifies that the temperature required in a classroom ranges from 20&#8451; - 24&#8451; in winter and
                    24&#8451; - 27&#8451; in Summer.
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Collapse>
          </Col>

          <Col md="6">
            <Row>
              <Col md="4" className="custom-control custom-switch mb-2 mt-2" style={{ paddingLeft: '51px' }}>
                <Input
                  name="Humidity"
                  className="custom-control-input"
                  id="customSwitchesCheckedHumidity1"
                  type="checkbox"
                  checked={checkedTwoA}
                  onChange={handleChangeTwoA}
                />
                <label className="custom-control-label" htmlFor="customSwitchesCheckedHumidity1">
                  <span className="mr-2"> Humidity </span>
                </label>
              </Col>
            </Row>

            <Collapse isOpen={checkedTwoA}>
              <Card>
                <CardBody>
                  <CardSubtitle style={{ color: 'black' }}>
                    The EU standard specifies that the minimum and the maximum humidity required in a classroom ranges from 30 - 60%.
                    respectively.
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
              <Col md="4" className="custom-control custom-switch mb-2 mt-2" style={{ paddingLeft: '51px' }}>
                <Input
                  name="Light"
                  className="custom-control-input"
                  id="customSwitchesCheckedLight1"
                  type="checkbox"
                  checked={checkedThreeA}
                  onChange={handleChangeThreeA}
                />
                <label className="custom-control-label" htmlFor="customSwitchesCheckedLight1">
                  <span className="mr-2"> Light </span>
                </label>
              </Col>
            </Row>
            <Collapse isOpen={checkedThreeA}>
              <Card>
                <CardBody>
                  <CardSubtitle style={{ color: 'black' }}>
                    The EU standard specifies that the average intensity of light required in a classroom ranges from 300-500lux.
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Collapse>
          </Col>

          <Col md="6">
            <Row>
              <Col md="4" className="custom-control custom-switch mb-2 mt-2" style={{ paddingLeft: '51px' }}>
                <Input
                  name="Noise"
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitchesCheckedNoise1"
                  checked={checkedFourA}
                  onChange={handleChangeFourA}
                />
                <label className="custom-control-label" htmlFor="customSwitchesCheckedNoise1">
                  <span className="mr-2"> Noise </span>
                </label>
              </Col>
            </Row>

            <Collapse isOpen={checkedFourA}>
              <Card>
                <CardBody>
                  <CardSubtitle style={{ color: 'black' }}>
                    The EU standard specifies that the maximum decibel of noise required in a classroom is 40dB.
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Collapse>
          </Col>
        </Row>
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
export default FirstTab;
