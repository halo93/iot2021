package com.genial.iot.domain;

import java.io.Serializable;
import javax.validation.constraints.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * A Device.
 */
@Document(collection = "devices")
public class Device extends AbstractAuditingEntity {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("name")
    private String name;

    @NotNull
    @Field("producer")
    private String producer;

    @NotNull
    @Field("version")
    private String version;

    @NotNull
    @Field("type")
    private Type type;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public String getId() {
        return this.id;
    }

    public Device id(String id) {
        this.setId(id);
        return this;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public Device name(String name) {
        this.setName(name);
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProducer() {
        return this.producer;
    }

    public Device producer(String producer) {
        this.setProducer(producer);
        return this;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    public String getVersion() {
        return this.version;
    }

    public Device version(String version) {
        this.setVersion(version);
        return this;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public Type getType() {
        return this.type;
    }

    public Device type(Type type) {
        this.setType(type);
        return this;
    }

    public void setType(Type type) {
        this.type = type;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Device)) {
            return false;
        }
        return id != null && id.equals(((Device) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Device{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", producer='" + getProducer() + "'" +
            ", version='" + getVersion() + "'" +
            ", type='" + getType() + "'" +
            "}";
    }

    /**
     * The Type enumeration.
     */
    public enum Type {
        SENSOR,
        PROCESSOR,
        OTHERS,
    }
}
