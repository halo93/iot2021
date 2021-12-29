import '../home/home.scss';
import TempLineChartComponent from './temperature-line-chart';
import HumidLineChartComponent from './humidity-line-chart';
import NoiseLineChartComponent from './noise-line-chart';
import LightLineChartComponent from './light-line-chart';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './charts.css';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { Col, Row } from 'reactstrap';
import { faFileAudio, faLightbulb, faThermometerFull, faWater } from '@fortawesome/free-solid-svg-icons';

const ComfortPageComponent = () => {
  return (
    <div>
      <h2 className="element">
        <p style={{ fontSize: 25, textAlign: 'left' }}> Comforts Details for the selected Room </p>
      </h2>
      <div className="center">
        <div className="element">
          <Row>
            <Col md="6">
              <h2>
                <p style={{ fontSize: 20, textAlign: 'center' }}>
                  <FontAwesomeIcon icon={faThermometerFull} /> Temperature{' '}
                </p>
              </h2>
              <TempLineChartComponent />
            </Col>
            <Col md="6">
              <h2>
                <p style={{ fontSize: 20, textAlign: 'center' }}>
                  {' '}
                  <FontAwesomeIcon icon={faWater} /> Humidity{' '}
                </p>
              </h2>
              <HumidLineChartComponent />
            </Col>
          </Row>
        </div>

        <div className="manasik">
          <Row>
            <Col md="6">
              <h2>
                <p style={{ fontSize: 20, textAlign: 'center' }}>
                  {' '}
                  <FontAwesomeIcon icon={faLightbulb} /> Light{' '}
                </p>
              </h2>
              <LightLineChartComponent />
            </Col>
            <Col md="6">
              <h2>
                <p style={{ fontSize: 20, textAlign: 'center' }}>
                  {' '}
                  <FontAwesomeIcon icon={faFileAudio} /> Noise{' '}
                </p>
              </h2>
              <NoiseLineChartComponent />
            </Col>
          </Row>
        </div>
      </div>
      <hr className="new4"></hr>
      <div>
        <h2 className="element">
          <p style={{ fontSize: 25, textAlign: 'left' }}> Current Statistics </p>
        </h2>
        <Row>
          <Col md="4">
            <h2>
              {' '}
              <p style={{ fontSize: 18 }}>
                {' '}
                <span className="temperature"></span> Temperature:{' '}
              </p>
            </h2>
          </Col>
          <Col md="4">
            <h2>
              {' '}
              <p style={{ fontSize: 18 }}>
                {' '}
                <span className="humidity"></span> Humidity:{' '}
              </p>
            </h2>
          </Col>
          <Col md="4">
            <h2>
              {' '}
              <p style={{ fontSize: 18 }}>
                {' '}
                <span className="light"></span> Light:{' '}
              </p>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <h2>
              {' '}
              <p style={{ fontSize: 18 }}>
                {' '}
                <span className="noise"></span> Noise:{' '}
              </p>
            </h2>
          </Col>
          <Col md="4">
            <h2>
              {' '}
              <p style={{ fontSize: 18 }}>
                {' '}
                <span className="capacity"></span> Room Capacity:{' '}
              </p>
            </h2>
          </Col>
        </Row>
      </div>
      <hr className="new4"></hr>
      <div>
        <h2>
          <p style={{ fontSize: 25, textAlign: 'left' }}> Map and Photos </p>
        </h2>
      </div>
    </div>
  );
};

export default ComfortPageComponent;
