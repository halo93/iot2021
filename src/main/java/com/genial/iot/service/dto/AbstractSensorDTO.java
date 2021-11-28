package com.genial.iot.service.dto;

import java.time.Instant;
import lombok.Data;

@Data
public abstract class AbstractSensorDTO {

    private String id;
    private Double value;
    private String roomId;
    private String deviceId;
    private Instant createdDate = Instant.now();
    private boolean isValid = false;
}
