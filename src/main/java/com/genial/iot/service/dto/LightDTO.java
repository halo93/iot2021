package com.genial.iot.service.dto;

import com.genial.iot.domain.Light;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class LightDTO extends AbstractSensorDTO {

    public static LightDTO of(Light light) {
        LightDTO lightDTO = new LightDTO();
        lightDTO.setId(light.getId());
        lightDTO.setDeviceId(light.getDeviceId());
        lightDTO.setRoomId(light.getRoomId());
        lightDTO.setValue(light.getValue());
        lightDTO.setCreatedDate(light.getCreatedDate());
        return lightDTO;
    }
}
