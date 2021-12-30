import '../home/home.scss';
import TempLineChartComponent from './temperature-line-chart';
import HumidLineChartComponent from './humidity-line-chart';
import NoiseLineChartComponent from './noise-line-chart';
import LightLineChartComponent from './light-line-chart';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './charts.css';
import { RouteComponentProps } from 'react-router-dom';

import { CardImg, Col, Row } from 'reactstrap';
import { faFileAudio, faLightbulb, faThermometerFull, faWater } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getEntity } from 'app/modules/rooms-comfort/comfort.reducer';

const ComfortPageComponent = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const comfortEntity = useAppSelector(state => state.comfort.entity);

  return (
    <div>
      {comfortEntity.room && (
        <h2 className="element">
          <p style={{ fontSize: 25, textAlign: 'left' }}> Comforts Details for {comfortEntity.room.name} </p>
        </h2>
      )}
      {console.log(comfortEntity)}
      <div className="center">
        <div className="element">
          <Row>
            <Col md="6">
              <h2>
                <p style={{ fontSize: 20, textAlign: 'center' }}>
                  <FontAwesomeIcon icon={faThermometerFull} /> Temperature{' '}
                </p>
              </h2>
              <TempLineChartComponent data={comfortEntity.temperatures} />
            </Col>
            <Col md="6">
              <h2>
                <p style={{ fontSize: 20, textAlign: 'center' }}>
                  {' '}
                  <FontAwesomeIcon icon={faWater} /> Humidity{' '}
                </p>
              </h2>
              <HumidLineChartComponent data={comfortEntity.humidity} />
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
              <LightLineChartComponent data={comfortEntity.lights} />
            </Col>
            <Col md="6">
              <h2>
                <p style={{ fontSize: 20, textAlign: 'center' }}>
                  {' '}
                  <FontAwesomeIcon icon={faFileAudio} /> Noise{' '}
                </p>
              </h2>
              <NoiseLineChartComponent data={comfortEntity.noises} />
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
              {comfortEntity.temperatures && (
                <p style={{ fontSize: 18 }}>
                  {' '}
                  <span className="temperature"></span> Temperature: {comfortEntity.temperatures[0].value} C
                </p>
              )}
            </h2>
          </Col>
          <Col md="4">
            <h2>
              {' '}
              {comfortEntity.humidity && (
                <p style={{ fontSize: 18 }}>
                  {' '}
                  <span className="humidity"></span> Humidity: {comfortEntity.humidity[0].value} %
                </p>
              )}
            </h2>
          </Col>
          <Col md="4">
            <h2>
              {' '}
              {comfortEntity.lights && (
                <p style={{ fontSize: 18 }}>
                  {' '}
                  <span className="light"></span> Light: {comfortEntity.lights[0].value} Lux
                </p>
              )}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <h2>
              {' '}
              {comfortEntity.noises && (
                <p style={{ fontSize: 18 }}>
                  {' '}
                  <span className="noise"></span> Noise: {comfortEntity.noises[0].value} dB
                </p>
              )}
            </h2>
          </Col>
          <Col md="4">
            <h2>
              {' '}
              {comfortEntity.room && (
                <p style={{ fontSize: 18 }}>
                  {' '}
                  <span className="capacity"></span> Room Capacity: {comfortEntity.room.capacity}
                </p>
              )}
            </h2>
          </Col>
        </Row>
      </div>
      <hr className="new4"></hr>
      <div>
        <h2>
          <p style={{ fontSize: 25, textAlign: 'left' }}> Photos </p>
          {comfortEntity.room && (
            <img
              src={`data:${comfortEntity.room.imagesContentType};base64,${comfortEntity.room.images}`}
              style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '40%', height: '40%', borderRadius: '5px' }}
            />
          )}
        </h2>
      </div>
    </div>
  );
};

export default ComfortPageComponent;
