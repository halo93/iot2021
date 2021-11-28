package com.genial.iot.web.rest;

import com.genial.iot.service.ComfortService;
import com.genial.iot.service.dto.ComfortDTO;
import com.genial.iot.service.dto.SearchEUComfortDTO;
import java.util.List;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.PaginationUtil;

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
        List<ComfortDTO> results = comfortService.searchComfortsByEUStandards(searchEUComfortDTO);
        return ResponseEntity.ok().body(results);
    }
}
