package com.genial.iot.web.rest;

import com.genial.iot.domain.Device;
import com.genial.iot.repository.DeviceRepository;
import com.genial.iot.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.genial.iot.domain.Device}.
 */
@RestController
@RequestMapping("/api")
public class DeviceResource {

    private final Logger log = LoggerFactory.getLogger(DeviceResource.class);

    private static final String ENTITY_NAME = "device";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DeviceRepository deviceRepository;

    public DeviceResource(DeviceRepository deviceRepository) {
        this.deviceRepository = deviceRepository;
    }

    /**
     * {@code POST  /devices} : Create a new device.
     *
     * @param device the device to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new device, or with status {@code 400 (Bad Request)} if the device has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/devices")
    public ResponseEntity<Device> createDevice(@Valid @RequestBody Device device) throws URISyntaxException {
        log.debug("REST request to save Device : {}", device);
        if (device.getId() != null) {
            throw new BadRequestAlertException("A new device cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Device result = deviceRepository.save(device);
        return ResponseEntity
            .created(new URI("/api/devices/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId()))
            .body(result);
    }

    /**
     * {@code PUT  /devices/:id} : Updates an existing device.
     *
     * @param id the id of the device to save.
     * @param device the device to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated device,
     * or with status {@code 400 (Bad Request)} if the device is not valid,
     * or with status {@code 500 (Internal Server Error)} if the device couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/devices/{id}")
    public ResponseEntity<Device> updateDevice(
        @PathVariable(value = "id", required = false) final String id,
        @Valid @RequestBody Device device
    ) throws URISyntaxException {
        log.debug("REST request to update Device : {}, {}", id, device);
        if (device.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, device.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!deviceRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Device result = deviceRepository.save(device);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, device.getId()))
            .body(result);
    }

    /**
     * {@code PATCH  /devices/:id} : Partial updates given fields of an existing device, field will ignore if it is null
     *
     * @param id the id of the device to save.
     * @param device the device to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated device,
     * or with status {@code 400 (Bad Request)} if the device is not valid,
     * or with status {@code 404 (Not Found)} if the device is not found,
     * or with status {@code 500 (Internal Server Error)} if the device couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/devices/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Device> partialUpdateDevice(
        @PathVariable(value = "id", required = false) final String id,
        @NotNull @RequestBody Device device
    ) throws URISyntaxException {
        log.debug("REST request to partial update Device partially : {}, {}", id, device);
        if (device.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, device.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!deviceRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Device> result = deviceRepository
            .findById(device.getId())
            .map(existingDevice -> {
                if (device.getName() != null) {
                    existingDevice.setName(device.getName());
                }
                if (device.getProducer() != null) {
                    existingDevice.setProducer(device.getProducer());
                }
                if (device.getVersion() != null) {
                    existingDevice.setVersion(device.getVersion());
                }
                if (device.getType() != null) {
                    existingDevice.setType(device.getType());
                }

                return existingDevice;
            })
            .map(deviceRepository::save);

        return ResponseUtil.wrapOrNotFound(result, HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, device.getId()));
    }

    /**
     * {@code GET  /devices} : get all the devices.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of devices in body.
     */
    @GetMapping("/devices")
    public List<Device> getAllDevices() {
        log.debug("REST request to get all Devices");
        return deviceRepository.findAll();
    }

    /**
     * {@code GET  /devices/:id} : get the "id" device.
     *
     * @param id the id of the device to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the device, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/devices/{id}")
    public ResponseEntity<Device> getDevice(@PathVariable String id) {
        log.debug("REST request to get Device : {}", id);
        Optional<Device> device = deviceRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(device);
    }

    /**
     * {@code DELETE  /devices/:id} : delete the "id" device.
     *
     * @param id the id of the device to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/devices/{id}")
    public ResponseEntity<Void> deleteDevice(@PathVariable String id) {
        log.debug("REST request to delete Device : {}", id);
        deviceRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id)).build();
    }
}
