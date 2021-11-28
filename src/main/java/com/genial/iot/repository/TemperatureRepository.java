package com.genial.iot.repository;

import com.genial.iot.domain.Temperature;
import java.util.Optional;
import org.springframework.stereotype.Repository;

@Repository
public interface TemperatureRepository extends SensorRepository<Temperature> {}
