package com.genial.iot.repository;

import com.genial.iot.domain.Device;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the Device entity.
 */
@Repository
public interface DeviceRepository extends MongoRepository<Device, String> {
    List<Device> findAllByRoomId(String roomId);
    List<Device> findAllByIdIn(List<String> ids);
    Page<Device> findAllByRoomIsNull(Pageable pageable);
}
