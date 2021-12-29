package com.genial.iot.service.dto;

import com.genial.iot.domain.Noise;
import com.genial.iot.domain.Temperature;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class TemperatureDTO extends AbstractSensorDTO {

    public static TemperatureDTO of(Temperature temperature) {
        TemperatureDTO temperatureDTO = new TemperatureDTO();
        temperatureDTO.setId(temperature.getId());
        temperatureDTO.setDeviceId(temperature.getDeviceId());
        temperatureDTO.setRoomId(temperature.getRoomId());
        temperatureDTO.setValue(temperature.getValue());
        temperatureDTO.setCreatedDate(temperature.getCreatedDate());
        return temperatureDTO;
    }
}
