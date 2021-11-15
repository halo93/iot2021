package com.genial.iot.service.mapper;

import com.genial.iot.domain.Room;
import com.genial.iot.service.dto.RoomDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Room} and its DTO {@link RoomDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface RoomMapper extends EntityMapper<RoomDTO, Room> {}
