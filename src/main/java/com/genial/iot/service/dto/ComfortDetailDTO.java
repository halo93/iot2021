package com.genial.iot.service.dto;

import java.util.List;
import lombok.Data;

@Data
public class ComfortDetailDTO {

    private RoomDTO room;
    private List<TemperatureDTO> temperatures;
    private List<LightDTO> lights;
    private List<HumidityDTO> humidity;
    private List<NoiseDTO> noises;
    private ComfortDTO.Rank rank;
}
