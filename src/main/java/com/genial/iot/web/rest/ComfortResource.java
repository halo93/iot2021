package com.genial.iot.web.rest;

import com.genial.iot.service.ComfortService;
import com.genial.iot.service.dto.ComfortDTO;
import com.genial.iot.service.dto.ComfortDetailDTO;
import com.genial.iot.service.dto.SearchEUComfortDTO;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.jhipster.web.util.ResponseUtil;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api")
public class ComfortResource {

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ComfortService comfortService;

    @GetMapping("/comforts/eu-standards")
    public ResponseEntity<List<ComfortDTO>> searchRoomsComfortByEUStandards(
        @RequestBody(required = false) SearchEUComfortDTO searchEUComfortDTO
    ) {
        if (Objects.isNull(searchEUComfortDTO)) {
            searchEUComfortDTO = new SearchEUComfortDTO();
        }
        log.debug("REST request to get a list of Comfort with Search Param : {}", searchEUComfortDTO);
        List<ComfortDTO> results = comfortService.searchComfortsByEUStandards(searchEUComfortDTO);
        return ResponseEntity.ok().body(results);
    }

    @GetMapping("/comforts/eu-standards/{roomId}")
    public ResponseEntity<ComfortDetailDTO> searchRoomComfortByEUStandards(@PathVariable String roomId) {
        log.debug("REST request to get a Comfort with RoomID : {}", roomId);
        Optional<ComfortDetailDTO> result = comfortService.searchComfortDetailByRoomId(roomId);
        return ResponseUtil.wrapOrNotFound(result);
    }
}
