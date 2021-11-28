package com.genial.iot.service.dto;

import com.genial.iot.domain.Noise;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class NoiseDTO extends AbstractSensorDTO {

    public static NoiseDTO of(Noise noise) {
        NoiseDTO noiseDTO = new NoiseDTO();
        noiseDTO.setId(noise.getId());
        noiseDTO.setDeviceId(noise.getDeviceId());
        noiseDTO.setRoomId(noise.getRoomId());
        noiseDTO.setValue(noise.getValue());
        noiseDTO.setCreatedDate(noise.getCreatedDate());
        return noiseDTO;
    }
}
