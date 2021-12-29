package com.genial.iot.repository;

import com.genial.iot.domain.Humidity;
import org.springframework.stereotype.Repository;

@Repository
public interface HumidityRepository extends SensorRepository<Humidity> {}
