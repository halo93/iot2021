package com.genial.iot.domain;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * A Device.
 */
@Document(collection = "temperature")
public class Temperature extends AbstractSensorEntity {

    private static final long serialVersionUID = 1L;

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Temperature)) {
            return false;
        }
        return getId() != null && getId().equals(((Temperature) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }
}
