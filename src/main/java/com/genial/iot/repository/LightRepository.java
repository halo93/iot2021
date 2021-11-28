package com.genial.iot.repository;

import com.genial.iot.domain.Light;
import org.springframework.stereotype.Repository;

@Repository
public interface LightRepository extends SensorRepository<Light> {}
