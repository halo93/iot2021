package com.genial.iot.service.dto;

import lombok.Data;

@Data
public class SearchEUComfortDTO {

    private boolean temperature = true;
    private boolean humidity = true;
    private boolean light = true;
    private boolean noise = true;
}
