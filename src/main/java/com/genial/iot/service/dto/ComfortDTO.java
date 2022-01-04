package com.genial.iot.service.dto;

import com.genial.iot.domain.RoomGrade.Rank;
import lombok.Data;

@Data
public class ComfortDTO {

    private RoomDTO room;
    private TemperatureDTO temperature;
    private LightDTO light;
    private HumidityDTO humidity;
    private NoiseDTO noise;
    private Rank rank;

    private double totalPoint = 0;
}
