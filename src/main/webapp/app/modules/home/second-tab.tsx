import React, { useEffect, useState } from 'react';
import { Button, Col, Form, FormGroup, Label } from 'reactstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import { AHP_ITEMS } from 'app/config/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch } from 'app/config/store';
import { getUserPreferenceEntities } from 'app/modules/home/user-preference.reducer';

const SecondTab = () => {
  const [humidityovertempPriority, setHumidityOverTempPriority] = useState(AHP_ITEMS.find(e => +e.value === 1));
  const [noiseovertempPriority, setNoiseOverTempPriority] = useState(AHP_ITEMS.find(e => +e.value === 1));
  const [noiseoverhumidityPriority, setNoiseOverHumidityPriority] = useState(AHP_ITEMS.find(e => +e.value === 1));
  const [lightovertempPriority, setLightOverTempPriority] = useState(AHP_ITEMS.find(e => +e.value === 1));
  const [lightoverhumidityPriority, setLightOverHumidityPriority] = useState(AHP_ITEMS.find(e => +e.value === 1));
  const [lightovernoisePriority, setLightOverNoisePriority] = useState(AHP_ITEMS.find(e => +e.value === 1));

  const [importanceObj, setImportanceObj] = useState({
    temp: {
      temp: 1,
      light: 1,
      humidity: 1,
      noise: 1,
    },
    light: {
      temp: 1,
      light: 1,
      humidity: 1,
      noise: 1,
    },
    humidity: {
      temp: 1,
      light: 1,
      humidity: 1,
      noise: 1,
    },
    noise: {
      temp: 1,
      light: 1,
      humidity: 1,
      noise: 1,
    },
    weightedSum: {
      tempSum: 4,
      lightSum: 4,
      noiseSum: 4,
      humiditySum: 4,
    },
  });

  const [priorityObj, setPriorityObj] = useState({
    temp: {
      temp: 0.25,
      light: 0.25,
      humidity: 0.25,
      noise: 0.25,
    },
    light: {
      temp: 0.25,
      light: 0.25,
      humidity: 0.25,
      noise: 0.25,
    },
    humidity: {
      temp: 0.25,
      light: 0.25,
      humidity: 0.25,
      noise: 0.25,
    },
    noise: {
      temp: 0.25,
      light: 0.25,
      humidity: 0.25,
      noise: 0.25,
    },
    priority: {
      temperaturePriority: 0.25,
      lightPriority: 0.25,
      humidityPriority: 0.25,
      noisePriority: 0.25,
    },
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserPreferenceEntities(priorityObj.priority));
  }, [importanceObj, priorityObj]);

  const submitPreference = () => {
    const changedImportanceObj = {
      ...importanceObj,
      temp: {
        temp: 1,
        light: +lightovertempPriority.value > 0 ? 1 / +lightovertempPriority.value : -1 * +lightovertempPriority.value,
        humidity: +humidityovertempPriority.value > 0 ? 1 / +humidityovertempPriority.value : -1 * +humidityovertempPriority.value,
        noise: +noiseovertempPriority.value > 0 ? 1 / +noiseovertempPriority.value : -1 * +noiseovertempPriority.value,
      },
      light: {
        temp: +lightovertempPriority.value > 0 ? +lightovertempPriority.value : -1 / +lightovertempPriority.value,
        light: 1,
        humidity: +lightoverhumidityPriority.value > 0 ? +lightoverhumidityPriority.value : -1 / +lightoverhumidityPriority.value,
        noise: +lightovernoisePriority.value > 0 ? +lightovernoisePriority.value : -1 / +lightovernoisePriority.value,
      },
      humidity: {
        temp: +humidityovertempPriority.value > 0 ? +humidityovertempPriority.value : -1 / +humidityovertempPriority.value,
        light: +lightoverhumidityPriority.value > 0 ? 1 / +lightoverhumidityPriority.value : -1 * +lightoverhumidityPriority.value,
        humidity: 1,
        noise: +noiseoverhumidityPriority.value > 0 ? 1 / +noiseoverhumidityPriority.value : -1 * +noiseoverhumidityPriority.value,
      },
      noise: {
        temp: +noiseovertempPriority.value > 0 ? +noiseovertempPriority.value : -1 / +noiseovertempPriority.value,
        light: +lightovernoisePriority.value > 0 ? 1 / +lightovernoisePriority.value : -1 * +lightovernoisePriority.value,
        humidity: +noiseoverhumidityPriority.value > 0 ? +noiseoverhumidityPriority.value : -1 / +noiseoverhumidityPriority.value,
        noise: 1,
      },
    };
    changedImportanceObj.weightedSum = {
      tempSum:
        changedImportanceObj.temp.temp +
        changedImportanceObj.humidity.temp +
        changedImportanceObj.noise.temp +
        changedImportanceObj.light.temp,
      lightSum:
        changedImportanceObj.light.light +
        changedImportanceObj.humidity.light +
        changedImportanceObj.noise.light +
        changedImportanceObj.temp.light,
      noiseSum:
        changedImportanceObj.noise.noise +
        changedImportanceObj.humidity.noise +
        changedImportanceObj.light.noise +
        changedImportanceObj.temp.noise,
      humiditySum:
        changedImportanceObj.humidity.humidity +
        changedImportanceObj.light.humidity +
        changedImportanceObj.noise.humidity +
        changedImportanceObj.temp.humidity,
    };
    console.log('changedImportanceObj: ', changedImportanceObj);
    setImportanceObj(changedImportanceObj);

    const changedPriorityObj = {
      ...priorityObj,
      temp: {
        temp: changedImportanceObj.temp.temp / changedImportanceObj.weightedSum.tempSum,
        light: changedImportanceObj.temp.light / changedImportanceObj.weightedSum.lightSum,
        humidity: changedImportanceObj.temp.humidity / changedImportanceObj.weightedSum.humiditySum,
        noise: changedImportanceObj.temp.noise / changedImportanceObj.weightedSum.noiseSum,
      },
      light: {
        temp: changedImportanceObj.light.temp / changedImportanceObj.weightedSum.tempSum,
        light: changedImportanceObj.light.light / changedImportanceObj.weightedSum.lightSum,
        humidity: changedImportanceObj.light.humidity / changedImportanceObj.weightedSum.humiditySum,
        noise: changedImportanceObj.light.noise / changedImportanceObj.weightedSum.noiseSum,
      },
      humidity: {
        temp: changedImportanceObj.humidity.temp / changedImportanceObj.weightedSum.tempSum,
        light: changedImportanceObj.humidity.light / changedImportanceObj.weightedSum.lightSum,
        humidity: changedImportanceObj.humidity.humidity / changedImportanceObj.weightedSum.humiditySum,
        noise: changedImportanceObj.humidity.noise / changedImportanceObj.weightedSum.noiseSum,
      },
      noise: {
        temp: changedImportanceObj.noise.temp / changedImportanceObj.weightedSum.tempSum,
        light: changedImportanceObj.noise.light / changedImportanceObj.weightedSum.lightSum,
        humidity: changedImportanceObj.noise.humidity / changedImportanceObj.weightedSum.humiditySum,
        noise: changedImportanceObj.noise.noise / changedImportanceObj.weightedSum.noiseSum,
      },
    };
    changedPriorityObj.priority = {
      temperaturePriority:
        (changedPriorityObj.temp.temp + changedPriorityObj.temp.light + changedPriorityObj.temp.humidity + changedPriorityObj.temp.noise) /
        4,
      lightPriority:
        (changedPriorityObj.light.temp +
          changedPriorityObj.light.humidity +
          changedPriorityObj.light.noise +
          changedPriorityObj.light.light) /
        4,
      humidityPriority:
        (changedPriorityObj.humidity.humidity +
          changedPriorityObj.humidity.light +
          changedPriorityObj.humidity.noise +
          changedPriorityObj.humidity.temp) /
        4,
      noisePriority:
        (changedPriorityObj.noise.noise +
          changedPriorityObj.noise.light +
          changedPriorityObj.noise.humidity +
          changedPriorityObj.noise.temp) /
        4,
    };
    console.log(changedPriorityObj);
    setPriorityObj(changedPriorityObj);
  };

  const onChangeHumidityOverTempSlider = event => {
    const foundAHPItem = AHP_ITEMS.find(e => {
      return e.value === event.target.value;
    });
    if (foundAHPItem) {
      setHumidityOverTempPriority(foundAHPItem);
    }
  };

  const onChangeNoiseOverTempSlider = event => {
    const foundAHPItem = AHP_ITEMS.find(e => {
      return e.value === event.target.value;
    });
    if (foundAHPItem) {
      setNoiseOverTempPriority(foundAHPItem);
    }
  };

  const onChangeNoiseOverHumiditySlider = event => {
    const foundAHPItem = AHP_ITEMS.find(e => {
      return e.value === event.target.value;
    });
    if (foundAHPItem) {
      setNoiseOverHumidityPriority(foundAHPItem);
    }
  };

  const onChangeLightOverTempSlider = event => {
    const foundAHPItem = AHP_ITEMS.find(e => {
      return e.value === event.target.value;
    });
    if (foundAHPItem) {
      setLightOverTempPriority(foundAHPItem);
    }
  };

  const onChangeLightOverHumiditySlider = event => {
    const foundAHPItem = AHP_ITEMS.find(e => {
      return e.value === event.target.value;
    });
    if (foundAHPItem) {
      setLightOverHumidityPriority(foundAHPItem);
    }
  };

  const onChangeLightOverNoiseSlider = event => {
    const foundAHPItem = AHP_ITEMS.find(e => {
      return e.value === event.target.value;
    });
    if (foundAHPItem) {
      setLightOverNoisePriority(foundAHPItem);
    }
  };

  return (
    <div>
      <div className="SecondTab2, text-center">
        <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
          Dear customer, please select your most preferred criteria in order of importance.
        </p>
        <Form>
          <FormGroup row={true}>
            <Col xs="4" className="pl5">
              <Label>Humidity over Temperature</Label>
            </Col>
            <Col xs="4">
              <RangeSlider max={9} min={-9} step={2} value={humidityovertempPriority.value} onChange={onChangeHumidityOverTempSlider} />
            </Col>
            <Col xs="4">
              <Label>{humidityovertempPriority.text}</Label>
            </Col>
          </FormGroup>

          <FormGroup row={true}>
            <Col xs="4">
              <Label>Noise over Temperature</Label>
            </Col>
            <Col xs="4">
              <RangeSlider max={9} min={-9} step={2} value={noiseovertempPriority.value} onChange={onChangeNoiseOverTempSlider} />
            </Col>
            <Col xs="4">
              <Label>{noiseovertempPriority.text}</Label>
            </Col>
          </FormGroup>

          <FormGroup row={true}>
            <Col xs="4">
              <Label>Noise over Humidity</Label>
            </Col>
            <Col xs="4">
              <RangeSlider max={9} min={-9} step={2} value={noiseoverhumidityPriority.value} onChange={onChangeNoiseOverHumiditySlider} />
            </Col>
            <Col xs="4">
              <Label>{noiseoverhumidityPriority.text}</Label>
            </Col>
          </FormGroup>

          <FormGroup row={true}>
            <Col xs="4">
              <Label>Light over Temperature</Label>
            </Col>
            <Col xs="4">
              <RangeSlider max={9} min={-9} step={2} value={lightovertempPriority.value} onChange={onChangeLightOverTempSlider} />
            </Col>
            <Col xs="4">
              <Label>{lightovertempPriority.text}</Label>
            </Col>
          </FormGroup>

          <FormGroup row={true}>
            <Col xs="4">
              <Label>Light over Humidity</Label>
            </Col>
            <Col xs="4">
              <RangeSlider max={9} min={-9} step={2} value={lightoverhumidityPriority.value} onChange={onChangeLightOverHumiditySlider} />
            </Col>
            <Col xs="4">
              <Label>{lightoverhumidityPriority.text}</Label>
            </Col>
          </FormGroup>

          <FormGroup row={true}>
            <Col xs="4">
              <Label>Light over Noise</Label>
            </Col>
            <Col xs="4">
              <RangeSlider max={9} min={-9} step={2} value={lightovernoisePriority.value} onChange={onChangeLightOverNoiseSlider} />
            </Col>
            <Col xs="4">
              <Label>{lightovernoisePriority.text}</Label>
            </Col>
          </FormGroup>
        </Form>
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
export default SecondTab;
