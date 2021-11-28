package com.genial.iot.repository;

import com.genial.iot.domain.Noise;
import org.springframework.stereotype.Repository;

@Repository
public interface NoiseRepository extends SensorRepository<Noise> {}
