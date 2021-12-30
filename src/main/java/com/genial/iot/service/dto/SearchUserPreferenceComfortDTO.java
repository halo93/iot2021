package com.genial.iot.service.dto;

import lombok.Data;

@Data
public class SearchUserPreferenceComfortDTO {

    private double temperaturePriority;
    private double lightPriority;
    private double noisePriority;
    private double humidityPriority;
}
