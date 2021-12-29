package com.genial.iot.domain;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * A Device.
 */
@Document(collection = "humidity")
public class Humidity extends AbstractSensorEntity {

    private static final long serialVersionUID = 1L;

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Humidity)) {
            return false;
        }
        return getId() != null && getId().equals(((Humidity) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }
}
