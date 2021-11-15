package com.genial.iot.repository;

import com.genial.iot.domain.Room;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the Room entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RoomRepository extends MongoRepository<Room, String> {}
