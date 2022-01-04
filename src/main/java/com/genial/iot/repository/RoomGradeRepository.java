package com.genial.iot.repository;

import com.genial.iot.domain.Room;
import com.genial.iot.domain.RoomGrade;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the Room entity.
 */
@Repository
public interface RoomGradeRepository extends MongoRepository<RoomGrade, String> {
    Optional<RoomGrade> findFirstByRoomIdOrderByCreatedDateDesc(String roomId);
}
