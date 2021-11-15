package com.genial.iot.service.dto;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;
import javax.validation.constraints.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

/**
 * A DTO for the {@link com.genial.iot.domain.Room} entity.
 */
@Data
public class RoomDTO implements Serializable {

    private String id;

    @NotNull
    @Size(max = 100)
    private String name;

    @NotNull
    private Integer floor;

    @NotNull
    private Double size;

    @NotNull
    private Integer capacity;

    private String createdBy;

    private Instant createdDate;

    private String lastModifiedBy;

    private Instant lastModifiedDate;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof RoomDTO)) {
            return false;
        }

        RoomDTO roomDTO = (RoomDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, roomDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "RoomDTO{" +
            "id='" + getId() + "'" +
            ", name='" + getName() + "'" +
            ", floor=" + getFloor() +
            ", size=" + getSize() +
            ", capacity=" + getCapacity() +
            "}";
    }
}
