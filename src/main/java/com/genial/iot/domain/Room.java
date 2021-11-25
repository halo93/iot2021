package com.genial.iot.domain;

import java.util.HashSet;
import java.util.Set;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * A Room.
 */
@Document(collection = "rooms")
public class Room extends AbstractAuditingEntity {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Size(max = 100)
    @Field("name")
    private String name;

    @NotNull
    @Field("floor")
    private Integer floor;

    @NotNull
    @Field("size")
    private Double size;

    @NotNull
    @Field("capacity")
    private Integer capacity;

    @DBRef
    @Field("devices")
    private Set<Device> devices = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public String getId() {
        return this.id;
    }

    public Room id(String id) {
        this.setId(id);
        return this;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public Room name(String name) {
        this.setName(name);
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getFloor() {
        return this.floor;
    }

    public Room floor(Integer floor) {
        this.setFloor(floor);
        return this;
    }

    public void setFloor(Integer floor) {
        this.floor = floor;
    }

    public Double getSize() {
        return this.size;
    }

    public Room size(Double size) {
        this.setSize(size);
        return this;
    }

    public void setSize(Double size) {
        this.size = size;
    }

    public Integer getCapacity() {
        return this.capacity;
    }

    public Room capacity(Integer capacity) {
        this.setCapacity(capacity);
        return this;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public Set<Device> getDevices() {
        return this.devices;
    }

    public void setDevices(Set<Device> devices) {
        this.devices = devices;
    }

    public Room devices(Set<Device> devices) {
        this.setDevices(devices);
        return this;
    }

    public Room addDevice(Device device) {
        this.devices.add(device);
        return this;
    }

    public Room removeDevice(Device device) {
        this.devices.remove(device);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Room)) {
            return false;
        }
        return id != null && id.equals(((Room) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Room{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", floor=" + getFloor() +
            ", size=" + getSize() +
            ", capacity=" + getCapacity() +
            "}";
    }
}
