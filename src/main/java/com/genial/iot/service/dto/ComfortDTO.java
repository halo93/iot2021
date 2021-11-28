package com.genial.iot.service.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
public class ComfortDTO {

    private RoomDTO roomDTO;
    private TemperatureDTO temperature;
    private LightDTO light;
    private HumidityDTO humidity;
    private NoiseDTO noise;
    private Rank rank;

    private Integer totalPoint = 0;

    @RequiredArgsConstructor
    public enum Rank {
        EXCELLENT,
        GOOD,
        NORMAL,
        BAD,
        NA,
    }
}
