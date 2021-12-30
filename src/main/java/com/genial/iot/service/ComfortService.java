package com.genial.iot.service;

import com.genial.iot.config.Constants;
import com.genial.iot.config.DateTimeUtil;
import com.genial.iot.repository.HumidityRepository;
import com.genial.iot.repository.LightRepository;
import com.genial.iot.repository.NoiseRepository;
import com.genial.iot.repository.TemperatureRepository;
import com.genial.iot.service.dto.*;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
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
                comfortDTO.setRoom(e);
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

    public List<ComfortDTO> searchComfortsByUserPreference(SearchUserPreferenceComfortDTO searchUserPreferenceComfortDTO) {
        List<ComfortDTO> comfortDTOs = roomService
            .findAll(Pageable.unpaged())
            .map(e -> {
                ComfortDTO comfortDTO = new ComfortDTO();
                comfortDTO.setRoom(e);
                return comfortDTO;
            })
            .getContent();
        return comfortDTOs
            .stream()
            .peek(e -> {
                setHumidityForComfortDTO(searchUserPreferenceComfortDTO.getHumidityPriority(), e);
                setLightForComfortDTO(searchUserPreferenceComfortDTO.getLightPriority(), e);
                setNoiseForComfortDTO(searchUserPreferenceComfortDTO.getNoisePriority(), e);
                setTemperatureForComfortDTO(searchUserPreferenceComfortDTO.getTemperaturePriority(), e);
            })
            .sorted(Comparator.comparing(ComfortDTO::getTotalPoint).reversed())
            .collect(Collectors.toList());
    }

    private void setTemperatureForComfortDTO(Boolean isTemperature, ComfortDTO comfortDTO) {
        final Double minTemp = DateTimeUtil.isSummerTimeInEurope()
            ? Constants.EU_SUMMER_TEMP_MIN_STANDARD
            : Constants.EU_WINTER_TEMP_MIN_STANDARD;
        final Double maxTemp = DateTimeUtil.isSummerTimeInEurope()
            ? Constants.EU_SUMMER_TEMP_MAX_STANDARD
            : Constants.EU_WINTER_TEMP_MAX_STANDARD;
        temperatureRepository
            .findTopByRoomIdOrderByCreatedDateDesc(comfortDTO.getRoom().getId())
            .ifPresent(e1 -> {
                TemperatureDTO temperatureDTO = TemperatureDTO.of(e1);
                if (isTemperature) {
                    if (e1.getValue() >= minTemp && e1.getValue() <= maxTemp) {
                        temperatureDTO.setValid(true);
                        comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + 1);
                    }
                } else {
                    comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + 1);
                }
                comfortDTO.setTemperature(temperatureDTO);
            });
    }

    private void setTemperatureForComfortDTO(double temperaturePriority, ComfortDTO comfortDTO) {
        final Double minTemp = DateTimeUtil.isSummerTimeInEurope()
            ? Constants.EU_SUMMER_TEMP_MIN_STANDARD
            : Constants.EU_WINTER_TEMP_MIN_STANDARD;
        final Double maxTemp = DateTimeUtil.isSummerTimeInEurope()
            ? Constants.EU_SUMMER_TEMP_MAX_STANDARD
            : Constants.EU_WINTER_TEMP_MAX_STANDARD;
        temperatureRepository
            .findTopByRoomIdOrderByCreatedDateDesc(comfortDTO.getRoom().getId())
            .ifPresent(e1 -> {
                TemperatureDTO temperatureDTO = TemperatureDTO.of(e1);
                if (e1.getValue() >= minTemp && e1.getValue() <= maxTemp) {
                    temperatureDTO.setValid(true);
                    comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + temperaturePriority * 100);
                }
                comfortDTO.setTemperature(temperatureDTO);
            });
    }

    private void setNoiseForComfortDTO(Boolean isNoise, ComfortDTO comfortDTO) {
        noiseRepository
            .findTopByRoomIdOrderByCreatedDateDesc(comfortDTO.getRoom().getId())
            .ifPresent(e1 -> {
                NoiseDTO noiseDTO = NoiseDTO.of(e1);
                if (isNoise) {
                    if (e1.getValue() <= Constants.EU_NOISE_AVG_STANDARD) {
                        noiseDTO.setValid(true);
                        comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + 1);
                    }
                } else {
                    comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + 1);
                }
                comfortDTO.setNoise(noiseDTO);
            });
    }

    private void setNoiseForComfortDTO(double noisePriority, ComfortDTO comfortDTO) {
        noiseRepository
            .findTopByRoomIdOrderByCreatedDateDesc(comfortDTO.getRoom().getId())
            .ifPresent(e1 -> {
                NoiseDTO noiseDTO = NoiseDTO.of(e1);
                if (e1.getValue() <= Constants.EU_NOISE_AVG_STANDARD) {
                    noiseDTO.setValid(true);
                    comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + noisePriority * 100);
                }
                comfortDTO.setNoise(noiseDTO);
            });
    }

    private void setLightForComfortDTO(Boolean isLight, ComfortDTO comfortDTO) {
        lightRepository
            .findTopByRoomIdOrderByCreatedDateDesc(comfortDTO.getRoom().getId())
            .ifPresent(e1 -> {
                LightDTO lightDTO = LightDTO.of(e1);
                if (isLight) {
                    if (e1.getValue() >= Constants.EU_LIGHT_MIN_STANDARD && e1.getValue() <= Constants.EU_LIGHT_MAX_STANDARD) {
                        lightDTO.setValid(true);
                        comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + 1);
                    }
                } else {
                    comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + 1);
                }
                comfortDTO.setLight(lightDTO);
            });
    }

    private void setLightForComfortDTO(double lightPriority, ComfortDTO comfortDTO) {
        lightRepository
            .findTopByRoomIdOrderByCreatedDateDesc(comfortDTO.getRoom().getId())
            .ifPresent(e1 -> {
                LightDTO lightDTO = LightDTO.of(e1);
                if (e1.getValue() >= Constants.EU_LIGHT_MIN_STANDARD && e1.getValue() <= Constants.EU_LIGHT_MAX_STANDARD) {
                    lightDTO.setValid(true);
                    comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + lightPriority * 100);
                }
                comfortDTO.setLight(lightDTO);
            });
    }

    private void setHumidityForComfortDTO(Boolean isHumidity, ComfortDTO comfortDTO) {
        humidityRepository
            .findTopByRoomIdOrderByCreatedDateDesc(comfortDTO.getRoom().getId())
            .ifPresent(e1 -> {
                HumidityDTO humidityDTO = HumidityDTO.of(e1);
                if (isHumidity) {
                    if (e1.getValue() >= Constants.EU_HUMIDITY_MIN_STANDARD && e1.getValue() <= Constants.EU_HUMIDITY_MAX_STANDARD) {
                        humidityDTO.setValid(true);
                        comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + 1);
                    }
                } else {
                    comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + 1);
                }
                comfortDTO.setHumidity(humidityDTO);
            });
    }

    private void setHumidityForComfortDTO(double humidityPriority, ComfortDTO comfortDTO) {
        humidityRepository
            .findTopByRoomIdOrderByCreatedDateDesc(comfortDTO.getRoom().getId())
            .ifPresent(e1 -> {
                HumidityDTO humidityDTO = HumidityDTO.of(e1);
                if (e1.getValue() >= Constants.EU_HUMIDITY_MIN_STANDARD && e1.getValue() <= Constants.EU_HUMIDITY_MAX_STANDARD) {
                    humidityDTO.setValid(true);
                    comfortDTO.setTotalPoint(comfortDTO.getTotalPoint() + humidityPriority * 100);
                }
                comfortDTO.setHumidity(humidityDTO);
            });
    }

    public Optional<ComfortDetailDTO> searchComfortDetailByRoomId(String roomId) {
        Optional<RoomDTO> roomOpt = roomService.findOneLazy(roomId);
        return roomOpt.map(e -> {
            ComfortDetailDTO comfortDetailDTO = new ComfortDetailDTO();
            comfortDetailDTO.setRoom(e);
            comfortDetailDTO.setTemperatures(getTop5RecentRecordedTemperatureData(roomId));
            comfortDetailDTO.setNoises(getTop5RecentRecordedNoiseData(roomId));
            comfortDetailDTO.setLights(getTop5RecentRecordedLightData(roomId));
            comfortDetailDTO.setHumidity(getTop5RecentRecordedHumidityData(roomId));
            return comfortDetailDTO;
        });
    }

    private List<TemperatureDTO> getTop5RecentRecordedTemperatureData(String roomId) {
        final Double minTemp = DateTimeUtil.isSummerTimeInEurope()
            ? Constants.EU_SUMMER_TEMP_MIN_STANDARD
            : Constants.EU_WINTER_TEMP_MIN_STANDARD;
        final Double maxTemp = DateTimeUtil.isSummerTimeInEurope()
            ? Constants.EU_SUMMER_TEMP_MAX_STANDARD
            : Constants.EU_WINTER_TEMP_MAX_STANDARD;
        return temperatureRepository
            .findTop5ByRoomIdOrderByCreatedDateDesc(roomId)
            .stream()
            .map(e1 -> {
                TemperatureDTO temperatureDTO = TemperatureDTO.of(e1);
                if (e1.getValue() >= minTemp && e1.getValue() <= maxTemp) {
                    temperatureDTO.setValid(true);
                }
                return temperatureDTO;
            })
            .collect(Collectors.toList());
    }

    private List<NoiseDTO> getTop5RecentRecordedNoiseData(String roomId) {
        return noiseRepository
            .findTop5ByRoomIdOrderByCreatedDateDesc(roomId)
            .stream()
            .map(e1 -> {
                NoiseDTO noiseDTO = NoiseDTO.of(e1);
                if (e1.getValue() <= Constants.EU_NOISE_AVG_STANDARD) {
                    noiseDTO.setValid(true);
                }
                return noiseDTO;
            })
            .collect(Collectors.toList());
    }

    private List<LightDTO> getTop5RecentRecordedLightData(String roomId) {
        return lightRepository
            .findTop5ByRoomIdOrderByCreatedDateDesc(roomId)
            .stream()
            .map(e1 -> {
                LightDTO lightDTO = LightDTO.of(e1);
                if (e1.getValue() >= Constants.EU_LIGHT_MIN_STANDARD && e1.getValue() <= Constants.EU_LIGHT_MAX_STANDARD) {
                    lightDTO.setValid(true);
                }
                return lightDTO;
            })
            .collect(Collectors.toList());
    }

    private List<HumidityDTO> getTop5RecentRecordedHumidityData(String roomId) {
        return humidityRepository
            .findTop5ByRoomIdOrderByCreatedDateDesc(roomId)
            .stream()
            .map(e1 -> {
                HumidityDTO humidityDTO = HumidityDTO.of(e1);
                if (e1.getValue() >= Constants.EU_HUMIDITY_MIN_STANDARD && e1.getValue() <= Constants.EU_HUMIDITY_MAX_STANDARD) {
                    humidityDTO.setValid(true);
                }
                return humidityDTO;
            })
            .collect(Collectors.toList());
    }
}
