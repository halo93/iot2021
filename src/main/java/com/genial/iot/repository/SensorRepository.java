package com.genial.iot.repository;

import com.genial.iot.domain.AbstractSensorEntity;
import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface SensorRepository<S extends AbstractSensorEntity> extends MongoRepository<S, String> {
    Optional<S> findTopByRoomIdOrderByCreatedDateDesc(String roomId);
    Optional<S> findTopByRoomIdAndValueBetweenOrderByCreatedDateDesc(String roomId, Double min, Double max);
}
