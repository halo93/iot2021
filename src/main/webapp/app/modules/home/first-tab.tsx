import React, { useEffect } from 'react';
import { Card, CardBody, CardSubtitle, Col, Collapse, Input, Row } from 'reactstrap';

const FirstTab = ({
  clean,
  copiedTemperature,
  setCopiedTemperature,
  copiedLight,
  setCopiedLight,
  copiedNoise,
  setCopiedNoise,
  copiedHumidity,
  setCopiedHumidity,
}) => {
  const [checkedOneA, setCheckedOneA] = React.useState(true);
  const [checkedTwoA, setCheckedTwoA] = React.useState(true);
  const [checkedThreeA, setCheckedThreeA] = React.useState(true);
  const [checkedFourA, setCheckedFourA] = React.useState(true);

  useEffect(() => {
    if (clean) {
      setCheckedOneA(true);
      setCheckedTwoA(true);
      setCheckedThreeA(true);
      setCheckedFourA(true);
    }
  }, []);

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
    </div>
  );
};
export default FirstTab;
