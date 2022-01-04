package com.genial.iot.domain;

import java.util.HashSet;
import java.util.Set;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * A Room.
 */
@Document(collection = "room-grade")
public class RoomGrade extends AbstractAuditingEntity {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("RoomID")
    private String roomId;

    @NotNull
    @Field("Grade")
    private Rank rank;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public String getId() {
        return this.id;
    }

    public RoomGrade id(String id) {
        this.setId(id);
        return this;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

    public Rank getRank() {
        return rank;
    }

    public void setRank(Rank rank) {
        this.rank = rank;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof RoomGrade)) {
            return false;
        }
        return id != null && id.equals(((RoomGrade) o).id);
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
            ", roomId='" + getRoomId() + "'" +
            ", rank=" + getRank() +
            "}";
    }

    @RequiredArgsConstructor
    @Getter
    public enum Rank {
        A("A"),
        B("B"),
        C("C"),
        D("D"),
        F("F"),
        NA("N/A");

        private final String gradeValue;
    }
}
