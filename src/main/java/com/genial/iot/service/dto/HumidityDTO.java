package com.genial.iot.service.dto;

import com.genial.iot.domain.Humidity;
import java.time.Instant;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class HumidityDTO extends AbstractSensorDTO {

    public static HumidityDTO of(Humidity humidity) {
        HumidityDTO humidityDTO = new HumidityDTO();
        humidityDTO.setId(humidity.getId());
        humidityDTO.setDeviceId(humidity.getDeviceId());
        humidityDTO.setRoomId(humidity.getRoomId());
        humidityDTO.setValue(humidity.getValue());
        humidityDTO.setCreatedDate(humidity.getCreatedDate());
        return humidityDTO;
    }
}
