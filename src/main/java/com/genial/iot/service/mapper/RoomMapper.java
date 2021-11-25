package com.genial.iot.service.mapper;

import com.genial.iot.domain.Room;
import com.genial.iot.service.dto.RoomDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Room} and its DTO {@link RoomDTO}.
 */
@Mapper(componentModel = "spring", uses = { DeviceMapper.class })
public interface RoomMapper extends EntityMapper<RoomDTO, Room> {
    @Mapping(target = "devices", source = "devices", qualifiedByName = "idSet")
    RoomDTO toDto(Room s);

    @Mapping(target = "removeDevice", ignore = true)
    @Mapping(target = "createdDate", ignore = true)
    @Mapping(target = "createdBy", ignore = true)
    Room toEntity(RoomDTO roomDTO);
}
