package com.genial.iot.service;

import com.genial.iot.config.Constants;
import com.genial.iot.config.DateTimeUtil;
import com.genial.iot.repository.*;
import com.genial.iot.service.dto.*;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class ComfortService {

    private final RoomService roomService;
    private final TemperatureRepository temperatureRepository;
    private final HumidityRepository humidityRepository;
    private final NoiseRepository noiseRepository;
    private final LightRepository lightRepository;

    public List<ComfortDTO> searchComfortsByEUStandards(SearchEUComfortDTO searchEUComfortDTO) {
        List<ComfortDTO> comfortDTOs = roomService
            .findAll(Pageable.unpaged())
            .map(e -> {
                ComfortDTO comfortDTO = new ComfortDTO();
                comfortDTO.setRoomDTO(e);
                return comfortDTO;
            })
            .getContent();
        return comfortDTOs
            .stream()
            .peek(e -> {
                setHumidityForComfortDTO(searchEUComfortDTO.isHumidity(), e);
                setLightForComfortDTO(searchEUComfortDTO.isLight(), e);
                setNoiseForComfortDTO(searchEUComfortDTO.isNoise(), e);
                setTemperatureForComfortDTO(searchEUComfortDTO.isTemperature(), e);
            })
            .sorted(Comparator.comparing(ComfortDTO::getTotalPoint).reversed())
            .collect(Collectors.toList());
    }

    private void setTemperatureForComfortDTO(Boolean isTemperature, ComfortDTO comfortDTO) {
        if (isTemperature) {
            final Double minTemp = DateTimeUtil.isSummerTimeInEurope()
                ? Constants.EU_SUMMER_TEMP_MIN_STANDARD
                : Constants.EU_WINTER_TEMP_MIN_STANDARD;
            final Double maxTemp = DateTimeUtil.isSummerTimeInEurope()
                ? Constants.EU_SUMMER_TEMP_MAX_STANDARD
                : Constants.EU_WINTER_TEMP_MAX_STANDARD;
            temperatureRepository
                .findTopByRoomIdOrderByCreatedDateDesc(comfortDTO.getRoomDTO().getId())
                .ifPresent(e1 -> {
                    TemperatureDTO temperatureDTO = TemperatureDTO.of(e1);
                    if (e1.getValue() >= minTemp && e1.getValue() <= maxTemp) {
                        temperatureDTO.setValid(true);
                        comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + 1);
                    }
                    comfortDTO.setTemperature(temperatureDTO);
                });
        }
    }

    private void setNoiseForComfortDTO(Boolean isNoise, ComfortDTO comfortDTO) {
        if (isNoise) {
            noiseRepository
                .findTopByRoomIdOrderByCreatedDateDesc(comfortDTO.getRoomDTO().getId())
                .ifPresent(e1 -> {
                    NoiseDTO noiseDTO = NoiseDTO.of(e1);
                    if (e1.getValue() <= Constants.EU_NOISE_AVG_STANDARD) {
                        noiseDTO.setValid(true);
                        comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + 1);
                    }
                    comfortDTO.setNoise(noiseDTO);
                });
        }
    }

    private void setLightForComfortDTO(Boolean isLight, ComfortDTO comfortDTO) {
        if (isLight) {
            lightRepository
                .findTopByRoomIdOrderByCreatedDateDesc(comfortDTO.getRoomDTO().getId())
                .ifPresent(e1 -> {
                    LightDTO lightDTO = LightDTO.of(e1);
                    if (e1.getValue() >= Constants.EU_LIGHT_MIN_STANDARD && e1.getValue() <= Constants.EU_LIGHT_MAX_STANDARD) {
                        lightDTO.setValid(true);
                        comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + 1);
                    }
                    comfortDTO.setLight(lightDTO);
                });
        }
    }

    private void setHumidityForComfortDTO(Boolean isHumidity, ComfortDTO comfortDTO) {
        if (isHumidity) {
            humidityRepository
                .findTopByRoomIdOrderByCreatedDateDesc(comfortDTO.getRoomDTO().getId())
                .ifPresent(e1 -> {
                    HumidityDTO humidityDTO = HumidityDTO.of(e1);
                    if (e1.getValue() >= Constants.EU_HUMIDITY_MIN_STANDARD && e1.getValue() <= Constants.EU_HUMIDITY_MAX_STANDARD) {
                        humidityDTO.setValid(true);
                        comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + 1);
                    }
                    comfortDTO.setHumidity(humidityDTO);
                });
        }
    }
}
