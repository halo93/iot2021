package com.genial.iot.service.mapper;

import com.genial.iot.domain.Device;
import com.genial.iot.service.dto.DeviceDTO;
import java.util.Set;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Device} and its DTO {@link DeviceDTO}.
 */
@Mapper(componentModel = "spring", uses = { RoomMapper.class })
public interface DeviceMapper extends EntityMapper<DeviceDTO, Device> {
    @Mapping(target = "roomId", source = "room.id")
    DeviceDTO toDto(Device device);

    @Named("idSet")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    Set<DeviceDTO> toDtoIdSet(Set<Device> device);
}
