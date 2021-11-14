package com.genial.iot.service.mapper;

import com.genial.iot.domain.Device;
import com.genial.iot.service.dto.DeviceDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Device} and its DTO {@link DeviceDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface DeviceMapper extends EntityMapper<DeviceDTO, Device> {}
