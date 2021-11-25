package com.genial.iot.service;

import com.genial.iot.domain.Device;
import com.genial.iot.domain.Room;
import com.genial.iot.repository.DeviceRepository;
import com.genial.iot.repository.RoomRepository;
import com.genial.iot.service.dto.RoomDTO;
import com.genial.iot.service.mapper.RoomMapper;
import java.util.*;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Room}.
 */
@Service
@RequiredArgsConstructor
public class RoomService {

    private final Logger log = LoggerFactory.getLogger(RoomService.class);

    private final RoomRepository roomRepository;

    private final DeviceRepository deviceRepository;

    private final RoomMapper roomMapper;

    /**
     * Save a room.
     *
     * @param roomDTO the entity to save.
     * @return the persisted entity.
     */
    @Transactional
    public RoomDTO save(RoomDTO roomDTO) {
        log.debug("Request to save Room : {}", roomDTO);
        Room room = roomMapper.toEntity(roomDTO);
        room = roomRepository.save(room);
        return roomMapper.toDto(room);
    }

    public RoomDTO update(RoomDTO roomDTO) {
        log.debug("Request to save Room : {}", roomDTO);
        Room existingRoom = roomRepository.findById(roomDTO.getId()).orElseThrow(NoSuchElementException::new);
        Room room = roomMapper.toEntity(roomDTO);
        room.setDevices(updateAssociatedDevices(existingRoom, room));
        room.setCreatedBy(existingRoom.getCreatedBy());
        room.setCreatedDate(existingRoom.getCreatedDate());
        room = roomRepository.save(room);
        return roomMapper.toDto(room);
    }

    private Set<Device> updateAssociatedDevices(Room existingRoom, Room updatedRoom) {
        List<Device> existingDevicesInRoom = deviceRepository.findAllByIdIn(
            existingRoom.getDevices().stream().map(Device::getId).collect(Collectors.toList())
        );
        List<Device> devicesToBeUpdatedInRoom = deviceRepository.findAllByIdIn(
            updatedRoom.getDevices().stream().map(Device::getId).collect(Collectors.toList())
        );
        if (devicesToBeUpdatedInRoom.isEmpty()) {
            existingDevicesInRoom.forEach(e -> e.setRoom(null));
            deviceRepository.saveAll(existingDevicesInRoom);
        } else {
            existingDevicesInRoom.forEach(e -> e.setRoom(null));
            devicesToBeUpdatedInRoom.forEach(e -> e.setRoom(updatedRoom));
        }
        deviceRepository.saveAll(existingDevicesInRoom);
        return new HashSet<>(deviceRepository.saveAll(devicesToBeUpdatedInRoom));
    }

    /**
     * Partially update a room.
     *
     * @param roomDTO the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<RoomDTO> partialUpdate(RoomDTO roomDTO) {
        log.debug("Request to partially update Room : {}", roomDTO);

        return roomRepository
            .findById(roomDTO.getId())
            .map(existingRoom -> {
                roomMapper.partialUpdate(existingRoom, roomDTO);

                return existingRoom;
            })
            .map(roomRepository::save)
            .map(roomMapper::toDto);
    }

    /**
     * Get all the rooms.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    public Page<RoomDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Rooms");
        return roomRepository.findAll(pageable).map(roomMapper::toDto);
    }

    /**
     * Get all the rooms with eager load of many-to-many relationships.
     *
     * @return the list of entities.
     */
    public Page<RoomDTO> findAllWithEagerRelationships(Pageable pageable) {
        return roomRepository.findAllWithEagerRelationships(pageable).map(roomMapper::toDto);
    }

    /**
     * Get one room by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    public Optional<RoomDTO> findOne(String id) {
        log.debug("Request to get Room : {}", id);
        return roomRepository.findOneWithEagerRelationships(id).map(roomMapper::toDto);
    }

    /**
     * Delete the room by id.
     *
     * @param id the id of the entity.
     */
    public void delete(String id) {
        log.debug("Request to delete Room : {}", id);
        roomRepository.deleteById(id);
    }
}
