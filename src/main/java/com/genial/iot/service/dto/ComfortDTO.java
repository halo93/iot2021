package com.genial.iot.service.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
public class ComfortDTO {

    private RoomDTO room;
    private TemperatureDTO temperature;
    private LightDTO light;
    private HumidityDTO humidity;
    private NoiseDTO noise;
    private Rank rank;

    private double totalPoint = 0;

    @RequiredArgsConstructor
    public enum Rank {
        EXCELLENT,
        GOOD,
        NORMAL,
        BAD,
        NA,
    }
}
